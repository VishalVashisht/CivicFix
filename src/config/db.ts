const { Pool } = require('pg')
import dbConfig from './config.json'

const pool = new Pool({
  user: dbConfig.db.user,
  host: dbConfig.db.host,
  database: dbConfig.db.database,
  password: dbConfig.db.password,
  port: dbConfig.db.port,
})

export const query = (text: string, params?: any[]) => pool.query(text, params)