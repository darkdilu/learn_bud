import Employer from "../models/EmployerModel.js";
import JobSeeker from "../models/JobSeeker.js";

export const newMsgNotification = async (
  receiverType,
  receiverId,
  newMessage,
  sendertype,
  senderId
) => {
  let sndr = {};
  if (sendertype === "employer") {
    sndr = await Employer.findById(senderId);
  }
  if (sendertype === "jobseeker") {
    sndr = await JobSeeker.findById(senderId);
  }
  if (receiverType === "employer") {
    const usr = await Employer.findById(receiverId);
    usr.messageNotification.unshift({
      senderId: newMessage.senderId,
      isRead: false,
      date: new Date(),
      name: sndr.fullName ? sndr.fullName : sndr.companyName,
    });
    await usr.save();
  }
  if (receiverType === "jobseeker") {
    const usr = await JobSeeker.findById(receiverId);
    usr.messageNotification.unshift({
      senderId: newMessage.senderId,
      isRead: false,
      date: new Date(),
      name: sndr.fullName ? sndr.fullName : sndr.companyName,
    });
    await usr.save();
  }
};
