import { Request, Response, NextFunction } from 'express'
import { query } from '../config/db'

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, role } = req.body

    const sql = `
      INSERT INTO users (name, email, password_hash, salt, role)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING uid, name, email, role
    `
    
    // In a real app, hash the password before this step!
    const values = [name, email, password, 'static_salt', role]
    const result = await query(sql, values)

    res.status(201).json({
      success: true,
      data: result.rows[0]
    })
  } catch (error) {
    // Passes the error to the global error handler in app.ts
    next(error) 
  }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const { } req.query
    const sql = `SELECT * FROM users`
    const result = await query(sql)
    res.status(201).json({
      success: true,
      data: result.rows[0]
    })
  } catch (error) {
    next(error) 
  }
}