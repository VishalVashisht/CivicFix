import { Router } from 'express'
import { signup, getUser } from '../controllers'

const router = Router()

// This defines the specific endpoint
router.post('/signup', signup)
router.get('/getUser', getUser)

export default router