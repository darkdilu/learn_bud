import { Router } from "express";
import {
  addNewJob,
  companyProfile,
  deleteAccount,
  deleteJob,
  editJob,
  getAllCandidates,
  getAllEmCompanies,
  getApplicants,
  getEmployerJobs,
  getSingleCandidate,
  getSingleEmCompany,
  getSingleJob,
  logoUpload,
  rejectSeeker,
  shortListSeeker,
  updateCompanyProfile,
  updateNotification,
} from "../controllers/employerDashboardController.js";
import {
  validateCompanyProfileInput,
  validatePostJobInput,
} from "../../../middleware/validationMiddleware.js";
import { checkCompany } from "../../../middleware/authMiddleware.js";
import upload from "../../../middleware/multerMiddleware.js";

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
router.patch("/company-logo", upload.single("logo"), logoUpload);
router.get("/candidates", getAllCandidates);
router.get("/candidates/:id", getSingleCandidate);
router.get("/companies", getAllEmCompanies);
router.get("/companies/:id", getSingleEmCompany);
router.get("/applicants", getApplicants);
router.patch("/shortlist", shortListSeeker);
router.patch("/reject", rejectSeeker);
router.patch("/notification", updateNotification);

export default router;
