import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true }, 
        designation: {
        type: String,
    },
   location:{
    type:String
   }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee