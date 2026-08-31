const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const interviewController = require("../controller/interview.controller");
const upload = require("../middleware/file.middleware");
const interviewRouter = express.Router();

/**
 * @route POST /api/interview
 * @description This route is used to generate an interview report based on the provided resume, self-description, and job description.
 * @access Private
 */

interviewRouter.post("/", authMiddleware.authUser, upload.single("resume"), interviewController.generateInterviewReportController);

module.exports = interviewRouter;