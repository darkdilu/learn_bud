import mongoose from 'mongoose'

const shortListedMatrimonyProfile = new mongoose.Schema({
    fromUID:{
        type:String,
        required:true
    },
    toUID:{
        type:String,
        required:true
    },
    // status:{
    //     type:String,
    //     enum:["pending","requested"],
    //     default:"pending",
    // }
})

const shortListMatrimonyProfile = mongoose.model("shortListedMatrimonyProfile",shortListedMatrimonyProfile);
export default shortListMatrimonyProfile