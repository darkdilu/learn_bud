import { NotFoundError } from "../errors/customErrors.js";
import Employer from "../models/EmployerModel.js";
import JobSeeker from "../models/JobSeeker.js";
import User from "../models/UserModel.js";

export const newConnection = async (
  senderId,
  receiverId,
  senderType,
  receiverType,
  userId
) => {
  const user = await User.findById(userId);
  if (!user) throw new NotFoundError("No user found");
  if (receiverType === "employer") {
    const employer = await Employer.findById(receiverId);
    if (!employer) throw new NotFoundError("the Company does not exists");
    const receiver = await User.findById(employer.owner);
    if (!receiver) throw new NotFoundError("no receiving user");

    if (senderType === "jobseeker") {
      receiver.emconnections.push({ jsId: senderId });
      await receiver.save();
      user.jsconnections.push({ emId: receiverId });
      await user.save();
    }
    if (senderType === "employer") {
      receiver.emconnections.push({ emId: senderId });
      await receiver.save();
      user.emconnections.push({ emId: receiverId });
      await user.save();
    }
  }
  if (receiverType === "jobseeker") {
    const jobseeker = await JobSeeker.findById(receiverId);
    if (!jobseeker) throw new NotFoundError("the candidate doesnt exist");
    const receiver = await User.findById(jobseeker.owner);
    if (!receiver) throw new NotFoundError("No receiving user");

    if (senderType === "jobseeker") {
      receiver.jsconnections.push({ jsId: senderId });
      await receiver.save();
      user.jsconnections.push({ jsId: receiverId });
      await user.save();
    }
    if (senderType === "employer") {
      receiver.jsconnections.push({ emId: senderId });
      await receiver.save();
      user.emconnections.push({ jsId: receiverId });
      await user.save();
    }
  }
};
