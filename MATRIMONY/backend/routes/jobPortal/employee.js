import express from "express"
import { creatEmployee } from "../../controllers/jobPortal.js";
const router = express.Router()

router.post('/createEmployee',creatEmployee);

export default router
