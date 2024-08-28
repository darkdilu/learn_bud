import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import nodeMalier from 'nodemailer'
import crypto from 'crypto'
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import twilio from 'twilio'
import dotenv from 'dotenv'
import Profile from "../models/MatrimonyProfile.js";
import AWS from 'aws-sdk'
import mongoose from "mongoose";


dotenv.config()


const accoundSid = process.env.accoundSid
const authtoken = process.env.authtoken

const client = twilio(accoundSid, authtoken)
const otps = {};

AWS.config.update({
  region: 'ap-south-1', 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const sns = new AWS.SNS({ apiVersion: '2010-03-31' });

const sendOTP = async (phoneNumber, otp) => {
  const params = {
    Message: `Your OTP is ${otp}`,
    PhoneNumber: phoneNumber,
  };

  try {
    const result = await sns.publish(params).promise();
    console.log('OTP sent successfully:', result);
    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Failed to send OTP:', error);
    return { success: false, message: error.message };
  }
};


export const AWSOTP = async (req, res) => {
  const { phoneNumber } = req.body;

  // Generate a 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Send the OTP
  const result = await sendOTP(phoneNumber, otp);

  // Respond to the client
  if (result.success) {
    res.status(200).json({ message: result.message, otp });
  } else {
    res.status(500).json({ message: result.message });
  }
}

export const Register = async (req, res) => {
  const { firstName, lastName, email, username, password, confirmPassword, phno } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    console.log(existingUser)
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    const newUser = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      phno
    });
    

   
    const savedUser = await newUser.save();

    const tempAccessToken = jwt.sign({
      id:savedUser._id,
      isAdmin:savedUser.isAdmin,
      isStaff:savedUser.isStaff
    },
    process.env.JWT,{
      expiresIn: '7d' 
    }
  )

  res.cookie("refreshToken",tempAccessToken,{
    httpOnly:true,
    secure:true,
    maxAge:7 * 24 * 60 * 60 * 1000
  }).status(201).json({ message: "User registered successfully", user: savedUser });

  } catch (error) {
    console.error('Error during registration:', error.message); // Log the error message
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



export const Login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return next(createError(404, "user not found"))

    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isPasswordCorrect) return next(createError(400, "Invalid password"))

    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin,
      isStaff: user.isStaff,
    },
      process.env.JWT, {
      expiresIn: '30m'
    }
    )
    const { _id, password, isAdmin, googleID, isStaff,...otherDetails } = user._doc

    


    const refreshToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        isStaff: user.isStaff,
      },
      process.env.JWT,
      { expiresIn: '7d' });
      
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
      }).status(201).json({message:"login successful",otherDetails,accessToken:accessToken});
  } catch (err) {
    next(err)
  }
}

export const refreshToken = (req, res, next) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) return next(createError(401, "No refresh token"));

  jwt.verify(refreshToken, process.env.JWT, (err, user) => {
    console.log("user data in refresh token",user);
    
    if (err) return next(createError(403, "Invalid refresh token"));
    

    const accessToken = jwt.sign(
      { id: user.id,
        isAdmin: user.isAdmin,
        isStaff: user.isStaff,
      },
      process.env.JWT,
      { expiresIn: '7h' }
    );

    // res.cookie("accessToken", accessToken, { httpOnly: true, secure: true });
    res.status(200).json({ accessToken: accessToken });
    console.log(accessToken);
  });
};

export const logOut = (req, res) => {
  res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: 'none' });
  res.status(200).json({ message: "logged out successfully" })
}


export const getUserData = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    const { password, ...otherDetails } = user._doc;
    if (!user) return next(createError(404, "user not found"))
    res.status(200).json(otherDetails);
  } catch (error) {
    next(error)
  }
};

export const getIds = async(req,res)=>{
  const userId = req.user 
  console.log(userId);
  try{
    const user = await Profile.findOne({userId:userId})
    const matrimonyId = user._id
    res.status(200).json({
      matrimonyId:matrimonyId,
      userId:userId
    })
  }catch(err){
    console.log(err);
  }
  
  // try {
  //   const userProfile = await Profile.find({ userId: mongoose.Types.ObjectId(userId) });
  //       console.log(userProfile);
  // } catch (error) {
  //   console.log(error);
  // }
}


export const otp_sent = async (req, res) => {
  const { phoneNumber } = req.body;
  console.log(phoneNumber);
  
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  try {
    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    })
    otps[phoneNumber] = otp;
    res.status(200).json({ message: 'OTP send successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send verification' });
  }
}

export const verify_otp = (req, res) => {
  const { phoneNumber, otp } = req.body;
  if (otps[phoneNumber] && otps[phoneNumber] === otp) {
    delete otps[phoneNumber];
    res.status(200).json({ message: 'Verification successful' });
  } else {
    res.status(400).json({ error: 'Invalid code' });
  }
}

let otpStore = {};

const transporter = nodeMalier.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD, 
  },
});

export const generateOTP = async (req, res) => {

  const { email } = req.body;
  console.log("email",email);
  

  const otp = crypto.randomInt(100000, 999999).toString(); 

  otpStore[email] = otp; 

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}`,
  };
  console.log("message sent email", process.env.EMAIL);

  console.log("otpStore",otpStore);
  
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error details:", error); 
      return res.status(500).json({ message: "Error sending email" });
    }
    res.status(200).json({ message: "OTP sent successfully" });
  });
};

export const verifyOTP = (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] && otpStore[email] === otp) {
    delete otpStore[email]; // OTP used, so remove it from the store
    res.status(200).json({ message: "OTP verified successfully" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
};






