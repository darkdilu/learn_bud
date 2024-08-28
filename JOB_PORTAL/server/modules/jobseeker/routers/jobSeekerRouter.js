import { Router } from "express";
import {
  applyjob,
  deleteMyAccount,
  getAllCompanies,
  getAllJobs,
  getAppliedJobs,
  getCompanyActiveJobs,
  GetJobSeeker,
  getSingleCompany,
  getsingleJob,
  saveData,
  updatebasicDetails,
  updateeducationDetails,
  updateJobNotification,
  updatepreferences,
  updateprofessionalDetails,
  updateworkDetails,
  uploadProfilePicture,
  uploadResume,
} from "../controllers/jobSeekerController.js";
import {
  validateBasicDetailsInput,
  validateJobseekerDetailInput,
  validatePreferencesInput,
} from "../../../middleware/validationMiddleware.js";
import upload from "../../../middleware/multerMiddleware.js";

const router = Router();

router.get("/", GetJobSeeker);
router.delete("/", deleteMyAccount);
router.post("/data", validateJobseekerDetailInput, saveData);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getsingleJob);
router.patch("/jobs/:id", applyjob);
router.get("/applied-jobs", getAppliedJobs);
router.get("/companies", getAllCompanies);
router.get("/companies/:id", getSingleCompany);
router.get("/active-jobs/:id", getCompanyActiveJobs);
router.patch("/profile/basic", validateBasicDetailsInput, updatebasicDetails);
router.patch("/profile/education", updateeducationDetails);
router.patch("/profile/work", updateworkDetails);
router.patch("/profile/professional", updateprofessionalDetails);
router.patch("/notification", updateJobNotification);
router.patch(
  "/profile/profile-image",
  upload.single("profilePic"),
  uploadProfilePicture
);
router.patch("/profile/resume", upload.single("resume"), uploadResume);
router.patch(
  "/profile/preferences",
  validatePreferencesInput,
  updatepreferences
);

export default router;
