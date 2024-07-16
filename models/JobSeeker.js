import mongoose, { Schema, model } from "mongoose";

const EducationSchema = new Schema({
  programme: String,
  institution: String,
  started: Date,
  ended: Date,
  isCurrent: Boolean,
  courses: String,
});
const WorkSchema = new Schema({
  jobTitle: String,
  company: String,
  started: Date,
  ended: Date,
  isWorking: Boolean,
  acheivements: String,
});
const ProjectSchema = new Schema({
  project: String,
  started: Date,
  ended: Date,
  isCurrent: Boolean,
  description: String,
});
const CertificateSchema = new Schema({
  certificate: String,
  started: Date,
  ended: Date,
  description: String,
});

const JobSeekerSchema = new Schema(
  {
    fullName: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    profilePic: {
      type: String,
    },
    picPublicId: {
      type: String,
    },
    totalExperience: {
      type: String,
    },
    gender: {
      type: String,
    },
    resume: {
      type: String,
    },
    resumePublicId: {
      type: String,
    },
    currentSalary: {
      type: String,
    },
    oneWord: {
      type: String,
    },
    profileViews: {
      type: Number,
      default: 0,
    },
    qualification: {
      type: String,
      enum: [
        "Certificate",
        "Diploma",
        "Bachelors Degree",
        "Masters Degree",
        "Doctorate",
      ],
    },
    expectedSalary: { type: String },
    preferredLocation: {
      type: [String],
    },
    skills: {
      type: [String],
    },
    languages: {
      type: [String],
    },
    about: {
      type: String,
    },
    messageNotification: {
      type: [],
    },
    notification: {
      type: [],
    },
    appliedJobs: {
      type: [mongoose.Types.ObjectId],
      ref: "Job",
      default: [],
    },
    shortListed: {
      type: [mongoose.Types.ObjectId],
      ref: "Job",
      default: [],
    },
    rejected: {
      type: [mongoose.Types.ObjectId],
      ref: "Job",
      default: [],
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    portfolio: {
      type: String,
    },
    twitter: {
      type: String,
    },
    education: {
      type: [EducationSchema],
    },
    work: {
      type: [WorkSchema],
    },
    projects: {
      type: [ProjectSchema],
    },
    certificates: {
      type: [CertificateSchema],
    },
    dataCollected: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const JobSeeker = model("JobSeeker", JobSeekerSchema);
export default JobSeeker;
