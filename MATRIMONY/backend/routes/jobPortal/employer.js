import express from 'express'
import { createEmployer } from '../../controllers/jobPortal.js'
import {verifyUser} from '../../utils/verifyToken.js'
const router = express.Router()

router.post('/createEmployer/:id',verifyUser,createEmployer)

export default router