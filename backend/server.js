const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const applicantRoutes = require("./routes/applicantRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/applicants", applicantRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
