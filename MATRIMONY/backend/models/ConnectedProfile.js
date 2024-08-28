import mongoose from 'mongoose'

const connectedMatrimonyProfile = new mongoose.Schema({
    fromUID:{
        type:String,
        required:true
    },
    toUID:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending",
    }
})

connectedMatrimonyProfile.index({ fromUID: 1, toUID: 1 }, { unique: true });

const MatrimonyProfileconnection = mongoose.model("ConnectedMatrimonyProfile",connectedMatrimonyProfile);
export default MatrimonyProfileconnection