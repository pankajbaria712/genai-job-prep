import { useEffect, useEffectEvent, useState } from "react";
import LoadingScreen from "../../Loading/LoadingScreen";
import { useInterview } from "../../interview/hooks/useInterview";
import ReportsPage from "./ReportsPage";

const sortReports = (reports, sortOrder) => {
  return [...reports].sort((first, second) => {
    if (sortOrder === "score-high") return (second.matchScore ?? 0) - (first.matchScore ?? 0);
    if (sortOrder === "score-low") return (first.matchScore ?? 0) - (second.matchScore ?? 0);

    const firstDate = new Date(first.createdAt).getTime();
    const secondDate = new Date(second.createdAt).getTime();
    return sortOrder === "oldest" ? firstDate - secondDate : secondDate - firstDate;
  });
};

const ReportsContainer = () => {
  const { reports, loading, getReports } = useInterview();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [error, setError] = useState(null);

  const loadReports = useEffectEvent(async () => {
    try {
      setError(null);
      await getReports();
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Unable to load your reports.");
    }
  });

  useEffect(() => {
    void Promise.resolve().then(loadReports);
  }, []);

  const retryReports = async () => {
    try {
      setError(null);
      await getReports();
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Unable to load your reports.");
    }
  };

  const visibleReports = sortReports(
    reports.filter((report) =>
      (report.JobTitle || "Interview preparation report")
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase()),
    ),
    sortOrder,
  );

  if (loading && !reports.length) {
    return (
      <LoadingScreen
        title="Loading your reports"
        message="Gathering your interview preparation history..."
      />
    );
  }

  if (error) {
    return (
      <main className="reports-error">
        <h1>We could not load your reports</h1>
        <p>{error}</p>
        <button type="button" onClick={retryReports}>Try again</button>
      </main>
    );
  }

  return (
    <ReportsPage
      reports={visibleReports}
      hasReports={reports.length > 0}
      searchTerm={searchTerm}
      sortOrder={sortOrder}
      onSearchChange={setSearchTerm}
      onSortChange={setSortOrder}
    />
  );
};

export default ReportsContainer;
