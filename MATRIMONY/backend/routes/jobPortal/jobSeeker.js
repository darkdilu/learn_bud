import express from 'express'
import { createJobSeeker } from '../../controllers/jobPortal.js'
import { verifyUser } from '../../utils/verifyToken.js'
const router = express.Router()
 
router.post('/createJobSeeker/:id',verifyUser,createJobSeeker)
export default router