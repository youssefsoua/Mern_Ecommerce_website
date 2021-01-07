import dotenv from 'dotenv'
dotenv.config()

const config = {
  dbUrl: process.env.DBURL,
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV || 'development',
  logDir: process.env.LOGDIR || 'logs',
}

export default config
