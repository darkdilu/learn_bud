const mongoose = require("mongoose");
async function mongoDBConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("Database connected..");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  mongoDBConnection,
};
