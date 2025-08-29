#!/bin/bash

# FindMeRoom.com - Production Deployment Script
# Usage: ./scripts/deploy.sh

set -e

echo "🚀 Starting FindMeRoom.com deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="findmeroom-ssr"
APP_DIR="/var/www/findmeroom"
BACKUP_DIR="$APP_DIR/backups/$(date +%Y%m%d_%H%M%S)"

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_dependencies() {
    log_info "Checking dependencies..."

    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi

    # Check Node.js version
    NODE_VERSION=$(node -v | cut -d'.' -f1 | cut -d'v' -f2)
    if [ "$NODE_VERSION" -lt 18 ]; then
        log_error "Node.js version 18+ is required. Current version: $(node -v)"
        exit 1
    fi

    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        log_error "PM2 is not installed. Please install PM2 globally: npm install -g pm2"
        exit 1
    fi

    # Check if Nginx is installed
    if ! command -v nginx &> /dev/null; then
        log_error "Nginx is not installed. Please install Nginx first."
        exit 1
    fi

    log_info "All dependencies are installed ✅"
}

create_backup() {
    if [ -d "$APP_DIR/dist" ]; then
        log_info "Creating backup of current deployment..."
        mkdir -p "$BACKUP_DIR"
        cp -r "$APP_DIR/dist" "$BACKUP_DIR/"
        cp -r "$APP_DIR/node_modules" "$BACKUP_DIR/" 2>/dev/null || true
        log_info "Backup created at: $BACKUP_DIR"
    fi
}

build_application() {
    log_info "Building application for production..."

    # Install dependencies
    if [ -f "package.json" ]; then
        npm ci --production
    else
        log_error "package.json not found!"
        exit 1
    fi

    # Build the application
    npm run build:prod

    if [ $? -eq 0 ]; then
        log_info "Application built successfully ✅"
    else
        log_error "Build failed!"
        exit 1
    fi
}

stop_application() {
    log_info "Stopping current application..."

    # Stop PM2 application if running
    if pm2 list | grep -q "$APP_NAME"; then
        pm2 stop "$APP_NAME" || true
        pm2 delete "$APP_NAME" || true
    fi

    log_info "Application stopped ✅"
}

start_application() {
    log_info "Starting application with PM2..."

    # Start the application
    pm2 start ecosystem.config.js --env production

    # Wait a moment for the app to start
    sleep 5

    # Check if application is running
    if pm2 list | grep -q "$APP_NAME"; then
        log_info "Application started successfully ✅"
        pm2 status
    else
        log_error "Failed to start application!"
        exit 1
    fi
}

test_deployment() {
    log_info "Testing deployment..."

    # Wait for application to be ready
    sleep 10

    # Test if application responds
    if curl -s -f http://localhost:4000 > /dev/null; then
        log_info "Application is responding ✅"
    else
        log_error "Application is not responding!"
        exit 1
    fi

    # Test SSR by checking if HTML contains content
    RESPONSE=$(curl -s http://localhost:4000)
    if echo "$RESPONSE" | grep -q "findmeroom\|property"; then
        log_info "SSR is working correctly ✅"
    else
        log_warn "SSR might not be working properly. Check the response manually."
    fi
}

cleanup_old_backups() {
    log_info "Cleaning up old backups..."

    # Keep only last 5 backups
    BACKUP_COUNT=$(ls -1d $APP_DIR/backups/*/ 2>/dev/null | wc -l)
    if [ "$BACKUP_COUNT" -gt 5 ]; then
        ls -1d $APP_DIR/backups/*/ | head -n -$((5)) | xargs rm -rf
        log_info "Old backups cleaned up ✅"
    fi
}

show_summary() {
    echo ""
    echo "========================================"
    echo "🎉 DEPLOYMENT COMPLETED SUCCESSFULLY!"
    echo "========================================"
    echo ""
    echo "📊 Deployment Summary:"
    echo "   • Application: $APP_NAME"
    echo "   • Directory: $APP_DIR"
    echo "   • Port: 4000"
    echo "   • PM2 Status: $(pm2 jlist | jq -r '.[0].pm2_env.status' 2>/dev/null || echo 'Check manually')"
    echo ""
    echo "🔧 Useful Commands:"
    echo "   • Check status: pm2 status"
    echo "   • View logs: pm2 logs $APP_NAME"
    echo "   • Restart app: pm2 restart $APP_NAME"
    echo "   • Stop app: pm2 stop $APP_NAME"
    echo ""
    echo "🌐 Next Steps:"
    echo "   1. Configure Nginx (see DEPLOYMENT.md)"
    echo "   2. Set up SSL certificate"
    echo "   3. Update DNS records"
    echo "   4. Test the live website"
    echo ""
    echo "📖 For detailed instructions, see: DEPLOYMENT.md"
}

# Main deployment process
main() {
    log_info "Starting deployment process..."

    # Check if running as root or with sudo
    if [ "$EUID" -eq 0 ]; then
        log_warn "Running as root. Consider using a regular user with sudo privileges."
    fi

    # Navigate to application directory
    cd "$APP_DIR" || {
        log_error "Cannot access application directory: $APP_DIR"
        log_info "Make sure the directory exists and you have proper permissions."
        exit 1
    }

    # Run deployment steps
    check_dependencies
    create_backup
    build_application
    stop_application
    start_application
    test_deployment
    cleanup_old_backups
    show_summary

    log_info "Deployment completed! 🎉"
}

# Handle command line arguments
case "${1:-}" in
    "--help"|"-h")
        echo "FindMeRoom.com Deployment Script"
        echo ""
        echo "Usage:"
        echo "  $0              # Run full deployment"
        echo "  $0 --help       # Show this help"
        echo "  $0 --test       # Test current deployment"
        echo ""
        echo "This script will:"
        echo "  • Check system dependencies"
        echo "  • Create backup of current deployment"
        echo "  • Build the application"
        echo "  • Stop current application"
        echo "  • Start new application with PM2"
        echo "  • Test the deployment"
        echo "  • Clean up old backups"
        exit 0
        ;;
    "--test")
        test_deployment
        ;;
    *)
        main
        ;;
esac
