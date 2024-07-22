import {
  BadRequestError,
  NotFoundError,
} from "../../../errors/customErrors.js";
import { formatImage } from "../../../middleware/multerMiddleware.js";
import Employer from "../../../models/EmployerModel.js";
import Job from "../../../models/JobModel.js";
import { v2 as cloudinary } from "cloudinary";
import JobSeeker from "../../../models/JobSeeker.js";
import { getRecieverSocketId, io } from "../../../socket/socket.js";

export const updateCompanyProfile = async (req, res) => {
  const employer = await Employer.findById(req.user.employerId);
  if (!employer) throw new NotFoundError("Employer not found");
  employer.companyName = req.body.companyName;
  employer.companyEmail = req.body.companyEmail;
  employer.companyContact = req.body.companyContact;
  employer.founded = req.body.founded;
  employer.size = req.body.size;
  employer.industry = req.body.industry;
  employer.website = req.body.website;
  employer.facebook = req.body.facebook;
  employer.twitter = req.body.twitter;
  employer.linkedin = req.body.linkedin;
  employer.country = req.body.country;
  employer.state = req.body.state;
  employer.companyAddress = req.body.companyAddress;
  employer.about = req.body.about;
  await employer.save();
  res.status(200).json({ msg: "company details added successfully" });
};

export const companyProfile = async (req, res) => {
  const employer = await Employer.findById(req.user.employerId);
  if (!employer) throw new NotFoundError("Employer not found");
  res.status(200).json(employer);
};

export const addNewJob = async (req, res) => {
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const newJob = new Job({
    jobTitle: req.body.jobTitle,
    description: req.body.description,
    category: req.body.category,
    jobType: req.body.jobType,
    jobLocation: req.body.jobLocation,
    salary: req.body.salary,
    deadline: req.body.deadline,
    qualification: req.body.qualification,
    experience: req.body.experience,
    gender: req.body.gender,
    owner: req.user.employerId,
    jobPlace: req.body.jobPlace,
    skills: skillsArray,
    userOwner: req.user.userId,
  });
  await newJob.save();
  const employer = await Employer.findById(req.user.employerId);
  employer.totalJobs.push(newJob._id);
  await employer.save();

  res.status(201).json({ msg: "Job added successfully" });
};

export const getEmployerJobs = async (req, res) => {
  const jobs = await Job.find({ owner: req.user.employerId }).populate("owner");
  if (!jobs) throw new NotFoundError("No Jobs Found");
  res.status(200).json(jobs);
};

export const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id).populate("owner");
  if (!job) throw new NotFoundError("No Job found");
  res.status(200).json(job);
};

export const editJob = async (req, res) => {
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const job = await Job.findById(req.params.id);
  if (!job) throw new NotFoundError("No job found");
  job.jobTitle = req.body.jobTitle;
  job.description = req.body.description;
  job.category = req.body.category;
  job.jobType = req.body.jobType;
  job.jobLocation = req.body.jobLocation;
  job.salary = req.body.salary;
  job.deadline = req.body.deadline;
  job.qualification = req.body.qualification;
  job.experience = req.body.experience;
  job.gender = req.body.gender;
  job.jobPlace = req.body.jobPlace;
  job.owner = req.user.employerId;
  job.skills = skillsArray;
  await job.save();
  res.status(200).json({ msg: "Job updated successfully" });
};

export const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) throw new NotFoundError("no jobs found");
  res.status(200).json({ msg: "Job deleted successfully" });
};

export const deleteAccount = async (req, res) => {
  const account = await Employer.findByIdAndDelete(req.user.employerId);
  if (!account) throw new NotFoundError("no account has been found");
  res.status(200).json({ msg: "account has been deleted" });
};

export const logoUpload = async (req, res) => {
  const seeker = await Employer.findById(req.user.employerId);
  if (!seeker) throw new NotFoundError("No user found");
  if (req.file) {
    const file = formatImage(req.file);
    if (seeker.logoPublicId) {
      await cloudinary.uploader.destroy(seeker.logoPublicId);
    }
    const response = await cloudinary.uploader.upload(file);
    seeker.logo = response.secure_url;
    seeker.logoPublicId = response.public_id;
    await seeker.save();
    res.status(200).json({ msg: "success", url: response.secure_url });
  } else {
    throw new BadRequestError("No files found");
  }
};

export const getAllCandidates = async (req, res) => {
  const {
    candidateSearchKeyword,
    candidateSearchLocation,
    candidateSearchGender,
    candidateSearchExperience,
    candidateSearchQualification,
    candidateSearchSort,
    candidateSearchCurrentPage,
  } = req.query;
  const queryObject = {
    dataCollected: true,
    owner: { $ne: req.user.userId },
  };
  if (candidateSearchKeyword && candidateSearchKeyword !== "") {
    queryObject.fullName = { $regex: candidateSearchKeyword, $options: "i" };
  }
  if (candidateSearchLocation && candidateSearchLocation !== "") {
    queryObject.preferredLocation = {
      $regex: candidateSearchLocation,
      $options: "i",
    };
  }
  if (candidateSearchGender && candidateSearchGender !== "ALL") {
    queryObject.gender = candidateSearchGender;
  }
  if (candidateSearchExperience && candidateSearchExperience !== "ALL") {
    queryObject.totalExperience = candidateSearchExperience;
  }
  if (candidateSearchQualification && candidateSearchQualification !== "ALL") {
    queryObject.qualification = candidateSearchQualification;
  }
  const sortOptions = {
    Newest: "-createdAt",
    Oldest: "createdAt",
  };

  const sortKey = sortOptions[candidateSearchSort] || sortOptions.Newest;
  const page = Number(candidateSearchCurrentPage) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const candidates = await JobSeeker.find(queryObject)
    .populate("owner")
    .sort(sortKey)
    .skip(skip)
    .limit(limit);
  const totalCandidates = await JobSeeker.countDocuments(queryObject);
  if (!candidates) throw new NotFoundError("No jobseekers found");
  const numOfPages = Math.ceil(totalCandidates / limit);
  res.status(200).json({ candidates, totalCandidates, page, numOfPages });
};

export const getSingleCandidate = async (req, res) => {
  const candidate = await JobSeeker.findById(req.params.id).populate("owner");
  if (!candidate) throw new NotFoundError("No candidate found");
  candidate.profileViews = candidate.profileViews + 1;
  await candidate.save();
  res.status(200).json(candidate);
};

export const getAllEmCompanies = async (req, res) => {
  const {
    companySearchKeyword,
    companySearchLocation,
    companySearchIndustry,
    companySearchCurrentPage,
    companySearchSort,
  } = req.query;
  const queryObject = {
    _id: { $ne: req.user.employerId },
    companyName: { $exists: true },
  };
  if (companySearchKeyword && companySearchKeyword !== "") {
    queryObject.companyName.$regex = companySearchKeyword;
    queryObject.companyName.$options = "i";
  }
  if (companySearchLocation && companySearchLocation !== "") {
    queryObject.state = { $regex: companySearchLocation, $options: "i" };
  }
  if (companySearchIndustry && companySearchIndustry !== "ALL") {
    queryObject.industry = companySearchIndustry;
  }
  const sortOptions = {
    Newest: "-createdAt",
    Oldest: "createdAt",
  };

  const sortKey = sortOptions[companySearchSort] || sortOptions.Newest;
  const page = Number(companySearchCurrentPage) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const companies = await Employer.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);
  const totalCompanies = await Employer.countDocuments(queryObject);
  if (!companies) throw new NotFoundError("no companies found");
  const numOfPages = Math.ceil(totalCompanies / limit);
  res.status(200).json({ companies, totalCompanies, page, numOfPages });
};

export const getSingleEmCompany = async (req, res) => {
  const company = await Employer.findById(req.params.id);
  if (!company) throw new NotFoundError("no company found");
  const totalJobs = await Job.find({
    owner: company._id,
    isActive: true,
  });
  res.status(200).json({ company, totalJobs });
};

export const getApplicants = async (req, res) => {
  const applicants = await Employer.findById(req.user.employerId).populate([
    "allApplicants.applicant",
    "allApplicants.jobApplied",
    "shortlisted.applicant",
    "shortlisted.jobApplied",
  ]);
  if (!applicants) throw new NotFoundError("No employer found");
  res.status(200).json(applicants);
};

export const shortListSeeker = async (req, res) => {
  const applicant = await JobSeeker.findById(req.body.applicantId);
  const job = await Job.findById(req.body.jobId);
  const employer = await Employer.findById(req.user.employerId);
  if (!applicant || !job || !employer)
    throw new NotFoundError("Something wrong. Incomplete details");
  let allapplicantArray = employer.allApplicants;
  const upobject = allapplicantArray.find(
    (x) =>
      x.applicant.toString() === req.body.applicantId.toString() &&
      x.jobApplied.toString() === req.body.jobId.toString()
  );
  if (!upobject) throw new NotFoundError("No data");
  upobject.action = "shortListed";

  const shortlistObj = {
    applicant: req.body.applicantId,
    jobApplied: req.body.jobId,
  };
  employer.shortlisted.push(shortlistObj);
  employer.allApplicants = allapplicantArray;
  job.shortListed.push(req.body.applicantId);
  applicant.shortListed.push(req.body.jobId);
  const recieverSocketId = getRecieverSocketId(applicant._id);
  if (recieverSocketId) {
    io.to(recieverSocketId).emit("jobNotification", {
      senderId: employer._id,
      name: employer.companyName,
      action: "shortlisted",
      isRead: false,
      date: new Date(),
    });
  } else {
    applicant.notification.unshift({
      senderId: employer._id,
      name: employer.companyName,
      action: "shortlisted",
      isRead: false,
      date: new Date(),
    });
  }
  await job.save();
  await employer.save();
  await applicant.save();
  res.status(200).json({ msg: "success" });
};

export const rejectSeeker = async (req, res) => {
  const applicant = await JobSeeker.findById(req.body.applicantId);
  const job = await Job.findById(req.body.jobId);
  const employer = await Employer.findById(req.user.employerId);
  if (!applicant || !job || !employer)
    throw new NotFoundError("Something wrong. Incomplete details");
  let allapplicantArray = employer.allApplicants;
  const upobject = allapplicantArray.find(
    (x) =>
      x.applicant.toString() === req.body.applicantId.toString() &&
      x.jobApplied.toString() === req.body.jobId.toString()
  );
  if (!upobject) throw new NotFoundError("No data");
  upobject.action = "rejected";
  const rejectObj = {
    applicant: req.body.applicantId,
    jobApplied: req.body.jobId,
  };
  employer.rejected.push(rejectObj);
  employer.allApplicants = allapplicantArray;
  job.rejected.push(req.body.applicantId);
  applicant.rejected.push(req.body.jobId);
  const recieverSocketId = getRecieverSocketId(applicant._id);
  if (recieverSocketId) {
    io.to(recieverSocketId).emit("jobNotification", {
      senderId: employer._id,
      name: employer.companyName,
      action: "rejected",
      isRead: false,
      date: new Date(),
    });
  } else {
    applicant.notification.unshift({
      senderId: employer._id,
      name: employer.companyName,
      action: "rejected",
      isRead: false,
      date: new Date(),
    });
  }
  await job.save();
  await employer.save();
  await applicant.save();
  res.status(200).json({ msg: "success" });
};

export const updateNotification = async (req, res) => {
  const { notification } = req.body;
  const user = await Employer.findByIdAndUpdate(
    { _id: req.user.employerId },
    { notification: notification }
  );
  if (!user) throw new NotFoundError("No user found");
  res.status(200).json({ msg: "success" });
};
