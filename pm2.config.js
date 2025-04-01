module.exports = {
  apps: [{
    name: 'strapi',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production'
    },
    exec_mode: 'cluster',
    instances: 'max',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    merge_logs: true,
    time: true
  }]
};