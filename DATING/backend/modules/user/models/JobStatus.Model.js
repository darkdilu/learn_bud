const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  JobType: {
    type: String,
    required: true,
  },
  CompanyName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("job_status", jobSchema);
