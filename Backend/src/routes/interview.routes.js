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

/**
 * @route GET /api/interview/report/:reportId
 * @description This route is used to retrieve a specific interview report based on the provided report ID.
 * @access Private
 */
interviewRouter.get("/report/:reportId", authMiddleware.authUser, interviewController.getInterviewReportByIdController);

/**
 * @route GET /api/interview/reports
 * @description This route is used to retrieve all interview reports for the authenticated user.
 * @access Private
 */
interviewRouter.get("/reports", authMiddleware.authUser, interviewController.getAllInterviewReportsController);

module.exports = interviewRouter;