import * as dotenv from "dotenv";
dotenv.config();
import twilio from "twilio";

export const client = new twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);
export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000);
};
