import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
})

/**
 * @route POST /api/interview
 * @description This function is used to generate an interview report based on the provided resume, self-description, and job description.
 * @access Private
 */

export const generateInterviewReport = async ({ resumeFile, selfDescription, jobDescription }) => {
    const formData = new FormData();
    formData.append('jobDescription', jobDescription);
    formData.append('selfDescription', selfDescription);
    formData.append('resume', resumeFile);

    const response = await api.post('/api/interview', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
}

/**
 * @route GET /api/interview/report/:reportId
 * @description This function is used to retrieve a specific interview report based on the provided report ID.
 * @access Private
 */

export const getInterviewReportById = async (reportId) => {
    const response = await api.get(`/api/interview/report/${reportId}`);
    return response.data;
}

/**
 * @route GET /api/interview/reports
 * @description This function is used to retrieve all interview reports for the authenticated user.
 * @access Private
 */

export const getAllInterviewReports = async () => {
    const response = await api.get('/api/interview/reports');
    return response.data;
}