import { useEffect, useEffectEvent, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LoadingScreen from "../../Loading/LoadingScreen";
import { useInterview } from "../../interview/hooks/useInterview";
import InterviewReportPage from "./InterviewReportPage";

const InterviewReportContainer = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const { report, reports, loading, getReportById, getReports } = useInterview();
  const [error, setError] = useState(null);

  const loadReport = useEffectEvent(async () => {
    try {
      setError(null);
      if (reportId) {
        await getReportById(reportId);
      } else if (!report && !reports.length) {
        await getReports();
      }
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Unable to load this interview report.");
    }
  });

  useEffect(() => {
    void Promise.resolve().then(loadReport);
  }, [reportId]);

  const selectedReport = reportId ? report : report || reports[0];

  if (loading || (!selectedReport && !error)) {
    return (
      <LoadingScreen
        title="Loading your interview report"
        message="Gathering your personalized preparation strategy..."
      />
    );
  }

  if (error || !selectedReport) {
    return (
      <main>
        <p>{error || "No interview reports are available yet."}</p>
        <button type="button" onClick={() => navigate("/interview")}>
          Create an interview plan
        </button>
      </main>
    );
  }

  return <InterviewReportPage report={selectedReport} />;
};

export default InterviewReportContainer;
