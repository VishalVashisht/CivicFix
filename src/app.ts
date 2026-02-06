import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import userRoutes from './routes'
const app: Application = express()

app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))


app.use('/api', userRoutes);

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'OK' })
})

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' })
})

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err)

  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  })
})

export default app
