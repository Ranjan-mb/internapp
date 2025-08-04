const Applicant = require("../models/applicantModel");

exports.registerApplicant = async (req, res) => {
  try {
    const newApplicant = new Applicant(req.body);
    const saved = await newApplicant.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllApplicants = async (req, res) => {
  try {
    const all = await Applicant.find().sort({createdAt: -1});
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
