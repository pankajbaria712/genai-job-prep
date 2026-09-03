import { useContext} from "react";
import { InterviewContext } from "../interview.context.jsx";
import { getAllInterviewReports, generateInterviewReport, getInterviewReportById } from "../services/interview.api.js";

export const useInterview = () => {
    const context = useContext(InterviewContext);
    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider");
    }

    const { loading, setLoading, report, setReport, reports, setReports } = context;

    const generateReport = async ({resumeFile, selfDescription, jobDescription}) => {
        setLoading(true);
        try {
            const response = await generateInterviewReport({resumeFile, selfDescription, jobDescription});
            setReport(response.interviewReport);
            return response.interviewReport;
        } catch (error) {
            console.error("Error generating interview report:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }

    const getReportById = async (reportId) => {
        setLoading(true);
        try {
            const response = await getInterviewReportById(reportId);
            setReport(response.interviewReport);
        }
        catch (error) {
            console.error("Error fetching interview report by ID:", error);
            throw error;
        }
        finally {
            setLoading(false);
        }
    }

    const getReports = async () => {
        setLoading(true);
        try {
            const response = await getAllInterviewReports();
            setReports(response.interviewReports);
            return response.interviewReports;
        }
        catch (error) {
            console.error("Error fetching all interview reports:", error);
            throw error;
        }
        finally {
            setLoading(false);
        }
    }

    return {
        loading,
        report,
        reports,
        generateReport,
        getReportById,
        getReports
    };
}