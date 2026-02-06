import app from './app'
import { config } from './config/env'

const server = app.listen(config.port, () => {
  console.log(`Server running at port : ${config.port} (${config.nodeEnv})`)
})

const shutdown = () => {
  console.log('Shutting down server')

  server.close(() => {
    console.log('Server closed')
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
