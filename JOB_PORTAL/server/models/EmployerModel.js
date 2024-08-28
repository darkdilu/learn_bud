import mongoose, { Schema, model } from "mongoose";

const AllApplicantsSchema = new Schema(
  {
    applicant: {
      type: mongoose.Types.ObjectId,
      ref: "JobSeeker",
    },
    jobApplied: {
      type: mongoose.Types.ObjectId,
      ref: "Job",
    },
    action: {
      type: String,
      enum: ["shortListed", "rejected"],
    },
  },
  { timestamps: true }
);

const ShortListedSchema = new Schema(
  {
    applicant: {
      type: mongoose.Types.ObjectId,
      ref: "JobSeeker",
    },
    jobApplied: {
      type: mongoose.Types.ObjectId,
      ref: "Job",
    },
  },
  { timestamps: true }
);

const rejectedSchema = new Schema(
  {
    applicant: {
      type: mongoose.Types.ObjectId,
      ref: "JobSeeker",
    },
    jobApplied: {
      type: mongoose.Types.ObjectId,
      ref: "Job",
    },
  },
  { timestamps: true }
);

const EmployerSchema = new Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    logo: {
      type: String,
    },
    logoPublicId: {
      type: String,
    },
    companyName: {
      type: String,
    },
    companyEmail: {
      type: String,
    },
    companyContact: {
      type: String,
    },
    website: {
      type: String,
    },
    founded: {
      type: Date,
    },
    messageNotification: {
      type: [],
    },
    notification: {
      type: [],
    },
    size: {
      type: String,
      enum: ["10-50", "50-100", "100-200", "200-400", "400-800", ">800"],
    },
    about: {
      type: String,
    },
    industry: {
      type: String,
      enum: [
        "Information Technology & Telecommunications",
        "Finance & Insurance",
        "Healthcare & Pharmaceuticals",
        "Education & Training",
        "Engineering & Manufacturing",
        "Construction & Real Estate",
        "Retail, Wholesale & E-commerce",
        "Hospitality, Travel & Tourism",
        "Media, Entertainment & Arts",
        "Government, Non-Profit & Public Services",
      ],
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
    totalJobs: {
      type: [mongoose.Types.ObjectId],
      ref: "Job",
    },
    activeJobs: {
      type: String,
    },
    allApplicants: {
      type: [AllApplicantsSchema],
      default: [],
    },
    shortlisted: {
      type: [ShortListedSchema],
      default: [],
    },
    rejected: {
      type: [rejectedSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Employer = model("Employer", EmployerSchema);
export default Employer;
