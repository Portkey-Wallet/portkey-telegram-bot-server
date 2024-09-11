module.exports = {
  apps: [
    {
      name: 'portkey-telegram-bot-server-test',
      script: './dist/main.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules', 'logs', 'dist', '.tmp'],
      max_memory_restart: '1G',
      env: {
        BUILD_ENV: 'testnet'
      }
    },
    {
      name: 'portkey-telegram-bot-server',
      script: './dist/main.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules', 'logs', 'dist', '.tmp'],
      max_memory_restart: '1G',
      env: {
        BUILD_ENV: 'mainnet'
      }
    },
    {
      name: 'portkey-telegram-bot-server-local',
      script: './dist/main.js',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules', 'logs', 'dist', '.tmp'],
      max_memory_restart: '1G',
      env: {
        BUILD_ENV: 'testnet',
        IS_LOCAL: true
      }
    }
  ]
};
