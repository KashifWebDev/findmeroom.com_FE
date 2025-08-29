# 🚀 FindMeRoom.com - Production Deployment Guide

## Prerequisites

Before deploying to your VPS, ensure you have:

1. **Node.js 18+** installed on your VPS
2. **PM2** installed globally: `npm install -g pm2`
3. **Nginx** or **Apache** web server configured
4. **SSL certificate** (Let's Encrypt recommended)
5. **Domain** pointing to your VPS IP

## 📋 Server Requirements

- **RAM**: Minimum 2GB (4GB recommended)
- **CPU**: 1+ cores
- **Storage**: 5GB+ free space
- **Node.js**: Version 18 or higher
- **OS**: Ubuntu 20.04+ / CentOS 8+ / Debian 11+

## 🔧 Production Setup Steps

### 1. Server Preparation

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+ (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Create application directory
sudo mkdir -p /var/www/findmeroom
sudo chown -R $USER:$USER /var/www/findmeroom
```

### 2. Deploy Application Code

```bash
# Navigate to application directory
cd /var/www/findmeroom

# Clone or upload your application code
# (Assuming you upload the built files)

# Install production dependencies only
npm ci --production

# Copy production environment file
cp config/production.env .env
# Edit .env file with your production values
nano .env
```

### 3. Build and Deploy

```bash
# Build the application for production
npm run build:prod

# Start the application with PM2
npm run serve:prod

# Check PM2 status
pm2 status

# View application logs
pm2 logs findmeroom-ssr
```

### 4. Configure Nginx (Reverse Proxy)

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/findmeroom.com
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name findmeroom.com www.findmeroom.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name findmeroom.com www.findmeroom.com;

    # SSL Configuration (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/findmeroom.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/findmeroom.com/key.pem;

    # SSL Security
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Proxy to Node.js application
    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;

        # Timeout settings
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Logs
    access_log /var/log/nginx/findmeroom_access.log;
    error_log /var/log/nginx/findmeroom_error.log;
}
```

Enable the site:

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/findmeroom.com /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### 5. SSL Certificate Setup (Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d findmeroom.com -d www.findmeroom.com

# Set up auto-renewal
sudo crontab -e
# Add this line:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

## 🔄 Application Management

### PM2 Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs findmeroom-ssr

# Restart application
npm run restart:prod

# Stop application
npm run stop:prod

# Delete application
npm run delete:prod

# Monitor resources
pm2 monit
```

### Log Management

```bash
# View application logs
pm2 logs findmeroom-ssr

# View logs with follow
pm2 logs findmeroom-ssr --lines 100 -f

# Clear logs
pm2 flush
```

## 🧪 Testing SSR in Production

### Method 1: View Source Code

1. Visit your website: `https://findmeroom.com`
2. Right-click and select "View Page Source" (Ctrl+U)
3. **SSR is working if you see:**
   - Complete HTML structure with content
   - Meta tags, title, and content in the source
   - No loading placeholders or empty content

### Method 2: Disable JavaScript

1. Open browser developer tools (F12)
2. Go to Network tab
3. Check "Disable cache"
4. Right-click refresh button → "Empty Cache and Hard Reload"
5. **SSR is working if:**
   - Page loads instantly with content
   - No "Loading..." or empty states
   - Content appears before JavaScript executes

### Method 3: Check Response Headers

```bash
# Check if server responds with HTML
curl -I https://findmeroom.com

# Should return:
# HTTP/2 200
# content-type: text/html
```

### Method 4: SEO Testing

```bash
# Check if search engines can crawl content
curl https://findmeroom.com | grep -i "findmeroom\|property\|real estate"

# Should return actual content, not JavaScript placeholders
```

### Method 5: Performance Testing

```bash
# Test response time
curl -o /dev/null -s -w "%{time_total}\n" https://findmeroom.com

# Should be < 2 seconds for SSR
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Application Not Starting
```bash
# Check PM2 logs
pm2 logs findmeroom-ssr

# Check if port 4000 is available
netstat -tlnp | grep 4000

# Restart application
npm run restart:prod
```

#### 2. Nginx Connection Issues
```bash
# Check Nginx status
sudo systemctl status nginx

# Test configuration
sudo nginx -t

# Check Nginx error logs
sudo tail -f /var/log/nginx/findmeroom_error.log
```

#### 3. SSL Certificate Issues
```bash
# Renew certificate
sudo certbot renew

# Check certificate status
sudo certbot certificates
```

#### 4. Memory Issues
```bash
# Check memory usage
pm2 monit

# Restart if memory > 1GB
npm run restart:prod
```

### Performance Optimization

```bash
# Enable PM2 cluster mode (if multi-core)
# Edit ecosystem.config.js and change instances to 'max'

# Set up log rotation
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

## 📊 Monitoring

### PM2 Monitoring
```bash
# Start PM2 monitoring
pm2 monit

# View dashboard
pm2 plus
```

### Nginx Monitoring
```bash
# Check active connections
sudo nginx -s reload && curl -s http://127.0.0.1/nginx_status
```

### Application Health Check
```bash
# Create health check endpoint (optional)
curl https://findmeroom.com/api/health
```

## 🔄 Deployment Workflow

### For Future Updates:

```bash
# 1. Pull latest code or upload new build
cd /var/www/findmeroom

# 2. Install new dependencies (if any)
npm ci --production

# 3. Build application
npm run build:prod

# 4. Restart application
npm run restart:prod

# 5. Check logs
pm2 logs findmeroom-ssr

# 6. Verify deployment
curl -I https://findmeroom.com
```

## 📞 Support

If you encounter issues:

1. Check PM2 logs: `pm2 logs findmeroom-ssr`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/findmeroom_error.log`
3. Verify server resources: `htop` or `top`
4. Test locally first: `npm run dev:ssr`

## ✅ Success Checklist

- [ ] ✅ Application builds successfully
- [ ] ✅ PM2 starts application without errors
- [ ] ✅ Nginx serves requests correctly
- [ ] ✅ SSL certificate is valid
- [ ] ✅ Domain resolves to server
- [ ] ✅ SSR renders content on page load
- [ ] ✅ No JavaScript errors in browser console
- [ ] ✅ Page loads fast (< 3 seconds)
- [ ] ✅ SEO content is crawlable

## 🎉 You're Done!

Your Angular SSR application is now live on your VPS with:
- ✅ Server-Side Rendering enabled
- ✅ Hash-based routing configured
- ✅ Production-ready build
- ✅ PM2 process management
- ✅ Nginx reverse proxy
- ✅ SSL encryption
- ✅ Optimized performance
