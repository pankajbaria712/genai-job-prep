import { Link } from "react-router";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import "./reports.scss";

const formatDate = (date) => {
  if (!date) return "Date unavailable";

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(new Date(date));
};

const ReportsPage = ({ reports, hasReports, searchTerm, sortOrder, onSearchChange, onSortChange }) => {
  return (
    <>
      <Navbar />
      <main className="reports-page">
        <section className="reports-hero">
          <p className="reports-kicker">Your preparation archive</p>
          <h1>Your Reports</h1>
          <p>Review every interview strategy you have created and continue preparing from where you left off.</p>
        </section>

        {hasReports ? (
          <section className="reports-content" aria-label="Interview reports">
            <div className="reports-toolbar">
              <label className="reports-search">
                <span>Search reports</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => onSearchChange(event.target.value)}
                  placeholder="Search by job title"
                />
              </label>
              <label className="reports-sort">
                <span>Sort by</span>
                <select value={sortOrder} onChange={(event) => onSortChange(event.target.value)}>
                  <option value="newest">Newest first</option>
                  <option value="oldest">Oldest first</option>
                  <option value="score-high">Highest match score</option>
                  <option value="score-low">Lowest match score</option>
                </select>
              </label>
            </div>

            {reports.length > 0 ? (
              <div className="reports-grid">
                {reports.map((report) => (
                  <Link
                    className="report-card"
                    to={`/interview/report/${report._id}`}
                    key={report._id}
                  >
                    <div className="report-card-topline">
                      <span>{formatDate(report.createdAt)}</span>
                      <strong>{report.matchScore ?? 0}% match</strong>
                    </div>
                    <h2>{report.JobTitle || "Interview preparation report"}</h2>
                    <span className="report-card-action">Open report <span aria-hidden="true">-&gt;</span></span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="reports-empty-filter">
                <h2>No reports match your search</h2>
                <p>Try a different job title or clear the search field.</p>
              </div>
            )}
          </section>
        ) : (
          <section className="reports-empty" aria-label="No interview reports">
            <span className="empty-mark" aria-hidden="true">+</span>
            <h2>Your next opportunity starts here</h2>
            <p>You have not generated an interview report yet. Create one and turn a job description into a focused preparation plan.</p>
            <Link className="reports-primary-action" to="/interview">Generate Your First Interview Report</Link>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ReportsPage;
