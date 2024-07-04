import { Router } from "express";
import {
  addNewJob,
  companyProfile,
  deleteAccount,
  deleteJob,
  editJob,
  getEmployerJobs,
  getSingleJob,
  updateCompanyProfile,
} from "../controllers/employerDashboardController.js";
import {
  validateCompanyProfileInput,
  validatePostJobInput,
} from "../../../middleware/validationMiddleware.js";
import { checkCompany } from "../../../middleware/authMiddleware.js";

const router = Router();
router.post(
  "/company-profile",
  validateCompanyProfileInput,
  updateCompanyProfile
);
router.get("/company-profile", companyProfile);
router.get("/job", getEmployerJobs);
router.post("/job", validatePostJobInput, checkCompany, addNewJob);
router.patch("/job/:id", editJob);
router.get("/job/:id", getSingleJob);
router.delete("/job/:id", deleteJob);
router.delete("/", deleteAccount);

export default router;
