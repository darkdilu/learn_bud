import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
    members:{
        type:Array
    }
},{timestamps:true}
)

const ConversationMembers = mongoose.model("ConversationUsers",ConversationSchema);
export default ConversationMembers