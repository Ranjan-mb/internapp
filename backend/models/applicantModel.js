const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Applicant", applicantSchema);
