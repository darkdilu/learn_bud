import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    username:{
        type:String
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String
    },
    phno:{
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isStaff: {
        type: Boolean,
        default: false
    }

},
{timestamp:true}
)

const User = mongoose.model('User', userSchema)
export default User;