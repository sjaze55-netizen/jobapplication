const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

router.post("/apply", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      position,
      experience,
      resumeUrl,
      coverLetter
    } = req.body;

    if (!name || !email || !phone || !position) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const application = new Application({
      name,
      email,
      phone,
      position,
      experience,
      resumeUrl,
      coverLetter
    });

    await application.save();

    res.status(201).json({
      message: "Application submitted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;
