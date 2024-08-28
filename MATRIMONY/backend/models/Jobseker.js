import mongoose from "mongoose";

const jobSeekerSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true }, 
 title:{type:String},
 expertiseLevel:{type:String}
});

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema);
export default JobSeeker