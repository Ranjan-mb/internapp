const express = require("express");
const router = express.Router();

const { registerApplicant, getAllApplicants } = require("../controllers/applicantController");

router.post("/register", registerApplicant);
router.get("/", getAllApplicants);

module.exports = router;
