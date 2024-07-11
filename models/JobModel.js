import mongoose, { Schema, model } from "mongoose";

const JobSchema = new Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Employer",
    },
    userOwner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    jobTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Software Development & IT",
        "Finance & Accounting",
        "Healthcare & Medical",
        "Education & Training",
        "Engineering & Technical",
        "Construction & Skilled Trades",
        "Sales, Marketing & Advertising",
        "Customer Service & Support",
        "Human Resources & Recruitment",
        "Management & Executive",
      ],
    },
    jobType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Internship"],
    },
    qualification: {
      type: String,
      required: true,
      enum: [
        "Certificate",
        "Diploma",
        "Bachelors Degree",
        "Masters Degree",
        "Doctorate",
      ],
    },
    experience: {
      type: String,
      required: true,
      enum: ["All", "fresher", "0-1", "1-2", "2-4", "4-6", ">6"],
    },
    gender: {
      type: String,
      required: true,
      enum: ["All", "Male", "Female"],
    },
    skills: {
      type: [String],
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
      enum: ["On-site", "Remote", "W-F-H", "Hybrid"],
    },
    salary: {
      type: String,
      required: true,
    },
    applied: {
      type: [mongoose.Types.ObjectId],
      ref: "JobSeeker",
      default: [],
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    shortListed: {
      type: [mongoose.Types.ObjectId],
      ref: "JobSeeker",
      default: [],
    },
    rejected: {
      type: [mongoose.Types.ObjectId],
      ref: "JobSeeker",
      default: [],
    },
    jobPlace: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Job = model("Job", JobSchema);
export default Job;
