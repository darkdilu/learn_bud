import mongoose from "mongoose";

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO_DB, {
        serverSelectionTimeoutMS:30000,
        connectTimeoutMS: 30000, // 30 seconds
      });
      console.log('SUCCESSFULLY CONNECTED TO THE DATABASE $$$$');
    } catch (err) {
      console.error('Failed to connect to MongoDB:', err.message);
      console.error('Error details:', err);
    }
  };


  export default connect
  