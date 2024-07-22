import { NotFoundError } from "../../../errors/customErrors.js";
import { formatImage } from "../../../middleware/multerMiddleware.js";
import Employer from "../../../models/EmployerModel.js";
import Job from "../../../models/JobModel.js";
import JobSeeker from "../../../models/JobSeeker.js";
import User from "../../../models/UserModel.js";
import { v2 as cloudinary } from "cloudinary";
import { getRecieverSocketId, io } from "../../../socket/socket.js";

export const saveData = async (req, res) => {
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const languagesArray = req.body.languages
    .split(",")
    .map((item) => item.trim());
  const locationArray = req.body.preferredLocation
    .split(",")
    .map((item) => item.trim());
  const jobseeker = await JobSeeker.findById(req.user.jobseekerId);
  if (!jobseeker) throw new NotFoundError("no candidate was found");
  jobseeker.education = req.body.education;
  jobseeker.work = req.body.work;
  jobseeker.projects = req.body.projects;
  jobseeker.certificates = req.body.certificates;
  jobseeker.fullName = req.body.fullName;
  jobseeker.currentSalary = req.body.currentSalary;
  jobseeker.expectedSalary = req.body.expectedSalary;
  jobseeker.totalExperience = req.body.totalExperience;
  jobseeker.about = req.body.about;
  jobseeker.oneWord = req.body.oneWord;
  jobseeker.preferredLocation = locationArray;
  jobseeker.skills = skillsArray;
  jobseeker.languages = languagesArray;

  jobseeker.dataCollected = true;
  await jobseeker.save();
  res.status(200).json({ msg: "details added successfully" });
};

export const getAllJobs = async (req, res) => {
  const {
    jobSearchKeyword,
    jobSearchLocation,
    jobSearchCategory,
    jobSearchGender,
    jobSearchJobType,
    jobSearchExperience,
    jobSearchQualification,
    jobSearchSort,
    jobSearchCurrentPage,
  } = req.query;
  const queryObject = {
    userOwner: { $ne: req.user.userId },
  };
  if (jobSearchKeyword && jobSearchKeyword !== "") {
    queryObject.jobTitle = { $regex: jobSearchKeyword, $options: "i" };
  }
  if (jobSearchLocation && jobSearchLocation !== "") {
    queryObject.jobPlace = { $regex: jobSearchLocation, $options: "i" };
  }
  if (jobSearchCategory && jobSearchCategory !== "ALL") {
    queryObject.category = jobSearchCategory;
  }
  if (jobSearchGender && jobSearchGender !== "ALL") {
    queryObject.gender = jobSearchGender;
  }
  if (jobSearchJobType && jobSearchJobType !== "ALL") {
    queryObject.jobType = jobSearchJobType;
  }
  if (jobSearchExperience && jobSearchExperience !== "ALL") {
    queryObject.experience = jobSearchExperience;
  }
  if (jobSearchQualification && jobSearchQualification !== "ALL") {
    queryObject.qualification = jobSearchQualification;
  }
  const sortOptions = {
    Newest: "-createdAt",
    Oldest: "createdAt",
  };
  const sortKey = sortOptions[jobSearchSort] || sortOptions.Newest;
  const page = Number(jobSearchCurrentPage) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const jobs = await Job.find(queryObject)
    .populate("owner")
    .sort(sortKey)
    .skip(skip)
    .limit(limit);
  const totalJobs = await Job.countDocuments(queryObject);
  if (!jobs) throw new NotFoundError("No jobs found");

  const numOfPages = Math.ceil(totalJobs / limit);
  res.status(200).json({ jobs, totalJobs, page, numOfPages });
};

export const getsingleJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id).populate("owner");
  console.log();
  if (!job) throw new NotFoundError("No job found");
  res.status(200).json(job);
};

export const getAllCompanies = async (req, res) => {
  const {
    companySearchKeyword,
    companySearchLocation,
    companySearchIndustry,
    companySearchCurrentPage,
    companySearchSort,
  } = req.query;
  const queryObject = {
    companyName: { $exists: true },
    owner: { $ne: req.user.userId },
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

export const getSingleCompany = async (req, res) => {
  const { id } = req.params;
  const company = await Employer.findById(id);
  if (!company) throw new NotFoundError("No company found");
  res.status(200).json(company);
};

export const getCompanyActiveJobs = async (req, res) => {
  const { id } = req.params;
  const jobs = await Job.find({ owner: id, isActive: true }).populate("owner");
  if (!jobs) throw new NotFoundError("No active jobs found");
  res.status(200).json(jobs);
};

export const deleteMyAccount = async (req, res) => {
  const user = await JobSeeker.findByIdAndDelete(req.user.jobseekerId);
  if (!user) throw new NotFoundError("no user detected");
  res.status(200).json({ msg: "account has been deleted" });
};

export const GetJobSeeker = async (req, res) => {
  const user = await JobSeeker.findById(req.user.jobseekerId).populate("owner");
  if (!user) throw new NotFoundError("no user detected");
  res.status(200).json(user);
};

export const updatebasicDetails = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId);
  const user = await User.findById(req.user.userId);
  if (!seeker || !user)
    throw new NotFoundError("no jobseeker or user detected");
  seeker.fullName = req.body.fullName;
  seeker.profilePic = req.body.profilePic;
  seeker.resume = req.body.resume;
  seeker.qualification = req.body.qualification;
  user.age = req.body.age;
  user.dateOfBirth = req.body.dateOfBirth;
  user.address = req.body.address;
  user.email = req.body.email;
  await user.save();
  await seeker.save();
  const updated = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  res.status(200).json({ msg: "success", updated });
};

export const updateeducationDetails = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  if (!seeker) throw new NotFoundError("no jobseeker found");
  seeker.education = req.body.education;
  seeker.dataCollected = true;
  await seeker.save();
  res.status(200).json({ msg: "success", seeker });
};

export const updateworkDetails = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  if (!seeker) throw new NotFoundError("no jobseeker found");
  seeker.work = req.body.work;
  await seeker.save();
  res.status(200).json({ msg: "success", seeker });
};

export const updateprofessionalDetails = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  if (!seeker) throw new NotFoundError("no jobseeker found");
  seeker.certificates = req.body.certificates;
  seeker.projects = req.body.projects;
  await seeker.save();
  res.status(200).json({ msg: "success", seeker });
};

export const updatepreferences = async (req, res) => {
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const languagesArray = req.body.languages
    .split(",")
    .map((item) => item.trim());
  const locationArray = req.body.preferredLocation
    .split(",")
    .map((item) => item.trim());
  const seeker = await JobSeeker.findById(req.user.jobseekerId).populate(
    "owner"
  );
  if (!seeker) throw new NotFoundError("no jobseeker found");
  seeker.currentSalary = req.body.currentSalary;
  seeker.expectedSalary = req.body.expectedSalary;
  seeker.totalExperience = req.body.totalExperience;
  seeker.preferredLocation = locationArray;
  seeker.skills = skillsArray;
  seeker.languages = languagesArray;
  seeker.portfolio = req.body.portfolio;
  seeker.github = req.body.github;
  seeker.about = req.body.about;
  seeker.oneWord = req.body.oneWord;
  await seeker.save();
  res.status(200).json({ msg: "success", seeker });
};

export const uploadProfilePicture = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId);
  if (!seeker) throw new NotFoundError("No jobseeker found");
  if (req.file) {
    const file = formatImage(req.file);
    if (seeker.picPublicId) {
      await cloudinary.uploader.destroy(seeker.picPublicId);
    }
    const response = await cloudinary.uploader.upload(file);
    seeker.profilePic = response.secure_url;
    seeker.picPublicId = response.public_id;
    await seeker.save();
    res.status(200).json({ msg: "success", url: response.secure_url });
  } else {
    throw new BadRequestError("No files found");
  }
};

export const uploadResume = async (req, res) => {
  const seeker = await JobSeeker.findById(req.user.jobseekerId);
  if (!seeker) throw new NotFoundError("No jobseeker found");
  if (req.file) {
    const file = formatImage(req.file);
    if (seeker.resumePublicId) {
      await cloudinary.uploader.destroy(seeker.resumePublicId);
    }
    const response = await cloudinary.uploader.upload(file);
    seeker.resume = response.secure_url;
    seeker.resumePublicId = response.public_id;
    await seeker.save();
    res.status(200).json({ msg: "success", url: response.secure_url });
  } else {
    throw new BadRequestError("No files found");
  }
};

export const applyjob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) throw new NotFoundError("No job found");
  const seeker = await JobSeeker.findById(req.user.jobseekerId);
  if (!seeker) throw new NotFoundError("No seeker found");
  const employer = await Employer.findById(job.owner);
  if (!employer) throw new NotFoundError("No employer found");
  job.applied.push(req.user.jobseekerId);
  seeker.appliedJobs.push(job._id);
  const applicantObject = {
    applicant: req.user.jobseekerId,
    jobApplied: job._id,
  };
  employer.allApplicants.push(applicantObject);
  const recieverSocketId = getRecieverSocketId(employer._id);
  if (recieverSocketId) {
    io.to(recieverSocketId).emit("jobNotification", {
      senderId: seeker._id,
      name: seeker.fullName,
      action: "applied",
      isRead: false,
      date: new Date(),
    });
  } else {
    employer.notification.unshift({
      senderId: seeker._id,
      name: seeker.fullName,
      action: "applied",
      isRead: false,
      date: new Date(),
    });
  }
  await job.save();
  await seeker.save();
  await employer.save();
  res.status(200).json({ msg: "success" });
};

export const getAppliedJobs = async (req, res) => {
  const user = await JobSeeker.findById(req.user.jobseekerId).populate([
    "appliedJobs",
    "shortListed",
    "appliedJobs.owner",
  ]);
  if (!user) throw new NotFoundError("No user found");
  res.status(200).json(user);
};

export const updateJobNotification = async (req, res) => {
  const { notification } = req.body;
  const user = await JobSeeker.findByIdAndUpdate(
    { _id: req.user.jobseekerId },
    { notification: notification }
  );
  if (!user) throw new NotFoundError("No user found");
  res.status(200).json({ msg: "success" });
};
