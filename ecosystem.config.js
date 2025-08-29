module.exports = {
  apps: [
    {
      name: 'findmeroom-ssr',
      script: 'dist/sheltos_front/server/server.mjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 4000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      // Restart the app if it crashes
      restart_delay: 4000,
      // Maximum number of restart attempts
      max_restarts: 10,
      // Time window for max_restarts
      min_uptime: '10s'
    }
  ]
};
