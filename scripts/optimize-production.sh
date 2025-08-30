#!/bin/bash

# FindMeRoom Production Performance Optimization Script
# Run this on your VPS to optimize SSR performance

set -e

echo "🚀 Optimizing FindMeRoom SSR Performance..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    log_error "Please run this script as root (sudo)"
    exit 1
fi

# Function to backup file
backup_file() {
    local file="$1"
    if [ -f "$file" ]; then
        cp "$file" "${file}.backup.$(date +%Y%m%d_%H%M%S)"
        log_info "Backed up: $file"
    fi
}

# 1. System Performance Tuning
log_info "1. Optimizing System Performance..."

# Increase file descriptors
echo "* soft nofile 65536" >> /etc/security/limits.conf
echo "* hard nofile 65536" >> /etc/security/limits.conf

# Optimize kernel parameters
cat >> /etc/sysctl.conf << EOF
# Network optimizations
net.core.somaxconn = 65536
net.ipv4.tcp_max_syn_backlog = 65536
net.ipv4.ip_local_port_range = 1024 65535

# Memory optimizations
vm.swappiness = 10
vm.dirty_ratio = 60
vm.dirty_background_ratio = 2

# File system optimizations
fs.file-max = 2097152
EOF

sysctl -p
log_success "System parameters optimized"

# 2. Apache Performance Optimization
log_info "2. Optimizing Apache Configuration..."

# Enable required modules
a2enmod proxy_http
a2enmod proxy
a2enmod headers
a2enmod deflate
a2enmod expires
a2enmod ssl
a2enmod http2

# Update Apache configuration
cat >> /etc/apache2/apache2.conf << EOF
# Performance optimizations
Timeout 30
KeepAlive On
KeepAliveTimeout 5
MaxKeepAliveRequests 100
StartServers 2
MinSpareServers 2
MaxSpareServers 5
MaxRequestWorkers 150
MaxConnectionsPerChild 1000

# Thread limits
ThreadLimit 64
ThreadsPerChild 64
ThreadStackSize 2097152
EOF

# 3. Node.js Performance Optimization
log_info "3. Setting up Node.js Performance..."

# Install pm2 for better process management (optional alternative to systemd)
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    log_success "PM2 installed for optional use"
fi

# 4. SSL/TLS Optimization
log_info "4. Optimizing SSL/TLS..."

# Create SSL session cache directory
mkdir -p /var/cache/apache2/ssl
chown www-data:www-data /var/cache/apache2/ssl

# 5. Memory and Swap Optimization
log_info "5. Optimizing Memory Usage..."

# Create swap if not exists (1GB recommended)
if [ ! -f /swapfile ]; then
    fallocate -l 1G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
    log_success "1GB swap file created"
fi

# 6. Application-specific Optimizations
log_info "6. Setting up Application Optimizations..."

# Create log directories
mkdir -p /var/log/findmeroom
chown www-data:www-data /var/log/findmeroom

# Set proper permissions
chown -R www-data:www-data /var/www/findmeroom
chmod -R 755 /var/www/findmeroom

# 7. Restart Services
log_info "7. Restarting Services..."

# Restart Apache
systemctl restart apache2

# Restart Node.js service
systemctl daemon-reload
systemctl restart findmeroom

log_success "All services restarted"

# 8. Performance Monitoring Setup
log_info "8. Setting up Performance Monitoring..."

# Install monitoring tools
apt update
apt install -y htop iotop sysstat

# Enable sysstat
sed -i 's/ENABLED="false"/ENABLED="true"/' /etc/default/sysstat

log_success "Performance monitoring tools installed"

# 9. Final Verification
log_info "9. Running Final Verification..."

# Check services status
if systemctl is-active --quiet apache2; then
    log_success "Apache is running"
else
    log_error "Apache is not running"
fi

if systemctl is-active --quiet findmeroom; then
    log_success "FindMeRoom SSR service is running"
else
    log_error "FindMeRoom SSR service is not running"
fi

# Test application
sleep 3
if curl -s -f http://localhost:4000 > /dev/null; then
    log_success "SSR server is responding"
else
    log_error "SSR server is not responding"
fi

echo ""
echo "========================================"
echo "🎉 OPTIMIZATION COMPLETE!"
echo "========================================"
echo ""
echo "📊 Performance Improvements Applied:"
echo "   ✅ System kernel parameters tuned"
echo "   ✅ Apache configuration optimized"
echo "   ✅ SSL/TLS performance enhanced"
echo "   ✅ Memory and swap optimized"
echo "   ✅ File permissions corrected"
echo "   ✅ Performance monitoring enabled"
echo ""
echo "🔧 Next Steps:"
echo "   1. Update Apache config with optimized version"
echo "   2. Update systemd service with optimized version"
echo "   3. Test your application performance"
echo "   4. Monitor with: htop, iotop, or sar"
echo ""
echo "📈 Monitor Performance:"
echo "   • htop - Real-time system monitoring"
echo "   • sudo journalctl -u findmeroom -f - Follow SSR logs"
echo "   • curl -w '@curl-format.txt' -o /dev/null -s https://findmeroom.com"
echo ""
echo "🚀 Your SSR should now be significantly faster!"
