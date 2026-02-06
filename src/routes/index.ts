import { Request, Response, NextFunction, Router } from 'express';
import { signup, getUser } from '../controllers';

const router = Router();

// const demoMiddleware = async (Request, Response, NextFunction) => {
//     // can check jwt token here
//     console.log("INSIDE MIDDLEWARE");
//     NextFunction()
// }
// router.use('/api',  )

// This defines the specific endpoint
router.post('/signup', signup);
router.get('/getUser', getUser);

export default router;