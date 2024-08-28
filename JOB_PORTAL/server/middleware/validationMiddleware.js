import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";
import Employer from "../models/EmployerModel.js";
import User from "../models/UserModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body("username").notEmpty().withMessage("username is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format"),
  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid Email format"),
  body("password").notEmpty().withMessage("Password is required"),
]);

export const validateUserDetailInput = withValidationErrors([
  body("age").notEmpty().withMessage("age is required"),
  body("dateOfBirth").notEmpty().withMessage("Date of Birth is required"),
  body("hobbies").notEmpty().withMessage("hobbies are required"),
  body("interest").notEmpty().withMessage("interest are is required"),
  body("gender").notEmpty().withMessage("gender is required"),
  body("smoking").notEmpty().withMessage("smoking is required"),
  body("address").notEmpty().withMessage("address is required"),
  body("drinking").notEmpty().withMessage("drinking is required"),
  body("highestQualification")
    .notEmpty()
    .withMessage("qualification is required"),
]);

export const validateCompanyProfileInput = withValidationErrors([
  body("companyName")
    .notEmpty()
    .withMessage("company name is required")
    .custom(async (companyName, { req }) => {
      const user = await Employer.findOne({ companyName });
      if (user && user._id.toString() !== req.user.employerId.toString()) {
        throw new BadRequestError("Company Name already exists");
      }
    }),
  body("companyEmail")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (companyEmail, { req }) => {
      const user = await Employer.findOne({ companyEmail });
      if (user && user._id.toString() !== req.user.employerId.toString()) {
        throw new BadRequestError("Email already exists");
      }
    }),
  body("companyContact")
    .notEmpty()
    .withMessage("company contact is required")
    .custom(async (companyContact, { req }) => {
      const user = await Employer.findOne({ companyContact });
      if (user && user._id.toString() !== req.user.employerId.toString()) {
        throw new BadRequestError("Company contact already exists");
      }
    }),
  body("founded").notEmpty().withMessage("founded date is required"),
  body("size").notEmpty().withMessage("company size is required"),
  body("industry").notEmpty().withMessage("industry is required"),
  body("website").notEmpty().withMessage("website is required"),
  body("facebook").notEmpty().withMessage("facebook url is required"),
  body("twitter").notEmpty().withMessage("twitter url is required"),
  body("linkedin").notEmpty().withMessage("linkedin url is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("state").notEmpty().withMessage("state is required"),
  body("companyAddress").notEmpty().withMessage("company address is required"),
  body("about").notEmpty().withMessage("about is required"),
]);

export const validatePostJobInput = withValidationErrors([
  body("jobTitle").notEmpty().withMessage("Job title is required"),
  body("description").notEmpty().withMessage("description is required"),
  body("category").notEmpty().withMessage("Job category is required"),
  body("jobType").notEmpty().withMessage("Job type is required"),
  body("qualification").notEmpty().withMessage("Job qualification is required"),
  body("experience").notEmpty().withMessage("experience is required"),
  body("gender").notEmpty().withMessage("gender is required"),
  body("skills").notEmpty().withMessage("skills is required"),
  body("jobLocation").notEmpty().withMessage("Job location is required"),
  body("deadline").notEmpty().withMessage("deadline is required"),
  body("salary").notEmpty().withMessage("Job salary is required"),
]);

export const validateJobseekerDetailInput = withValidationErrors([
  body("fullName").notEmpty().withMessage("fullName is required"),
  body("currentSalary").notEmpty().withMessage("current salary is required"),
  body("expectedSalary").notEmpty().withMessage("expected salary is required"),
  body("totalExperience")
    .notEmpty()
    .withMessage("total experience is required"),
  body("preferredLocation")
    .notEmpty()
    .withMessage("preferred location is required"),
  body("skills").notEmpty().withMessage("skills is required"),
  body("languages").notEmpty().withMessage("languages is required"),
  body("oneWord").notEmpty().withMessage("one word description is required"),
  body("about").notEmpty().withMessage("about is required"),
]);

export const validateBasicDetailsInput = withValidationErrors([
  body("fullName").notEmpty().withMessage("fullName is required"),
  body("age").notEmpty().withMessage("age is required"),
  body("dateOfBirth").notEmpty().withMessage("date of birth is required"),
  body("address").notEmpty().withMessage("address is required"),
  body("qualification").notEmpty().withMessage("qualification is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId.toString()) {
        throw new BadRequestError("Email already exists");
      }
    }),
]);

export const validatePreferencesInput = withValidationErrors([
  body("currentSalary").notEmpty().withMessage("current salary is required"),
  body("expectedSalary").notEmpty().withMessage("expected salary is required"),
  body("totalExperience")
    .notEmpty()
    .withMessage("total experience is required"),
  body("preferredLocation")
    .notEmpty()
    .withMessage("preferred location is required"),
  body("skills").notEmpty().withMessage("skills is required"),
  body("languages").notEmpty().withMessage("languages is required"),
  body("oneWord").notEmpty().withMessage("one word description is required"),
  body("about").notEmpty().withMessage("about is required"),
]);

export const validateChangePasswordInput = withValidationErrors([
  body("password").notEmpty().withMessage("password is required"),
  body("newPassword").notEmpty().withMessage("new password is required"),
]);
