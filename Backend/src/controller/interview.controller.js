const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReport.model");


/** 
 * @route POST /api/interview
 * @description This controller is used to generate an interview report based on the provided resume, self-description, and job description.
 * @access Private
*/

async function generateInterviewReportController(req, res) {
 
 
    const resumeContent = req.file
        ? await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        : { text: "" };
    const { selfDescription, jobDescription } = req.body;
    
    const interViewReportByAi = await generateInterviewReport({
        resume: resumeContent.text, 
        selfDescription, 
        jobDescription
    });

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interViewReportByAi
    })

    res.status(201).json({
        message: "Interview report generated successfully",
        interviewReport
    })
}

/**
 * @route GET /api/interview/report/:reportId
 * @description This controller is used to retrieve a specific interview report based on the provided report ID.
 * @access Private
 */

async function getInterviewReportByIdController(req, res) {
    const { reportId } = req.params;

    const interviewReport = await interviewReportModel.findOne({
        _id: reportId,
        user: req.user.id
    });

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found"
        })
    }

    res.status(200).json({
        message: "Interview report retrieved successfully",
        interviewReport
    })
}

/**
 * @route GET /api/interview/reports
 * @description This controller is used to retrieve all interview reports for the authenticated user.
 * @access Private 
 */

async function getAllInterviewReportsController(req, res) {
    const interviewReports = await interviewReportModel.find({
        user: req.user.id
    }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan");

    res.status(200).json({
        message: "Interview reports retrieved successfully",
        interviewReports
    })
}

module.exports = {generateInterviewReportController, getInterviewReportByIdController, getAllInterviewReportsController}