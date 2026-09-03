import { useEffect, useEffectEvent, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useInterview } from "../../interview/hooks/useInterview";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";
import LoadingScreen from "../../Loading/LoadingScreen";
import "../profile.scss";

const Profile = () => {
  const { user } = useAuth();
  const { reports, loading, getReports } = useInterview();
  const [error, setError] = useState(null);

  const loadReports = useEffectEvent(async () => {
    try {
      setError(null);
      await getReports();
    } catch (requestError) {
      setError(requestError?.response?.data?.message || "Unable to load report activity.");
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
      setError(requestError?.response?.data?.message || "Unable to load report activity.");
    }
  };

  if (loading && !reports.length) {
    return (
      <LoadingScreen
        title="Loading your profile"
        message="Gathering your account and interview preparation activity..."
      />
    );
  }

  const averageScore = reports.length
    ? Math.round(reports.reduce((total, report) => total + (report.matchScore || 0), 0) / reports.length)
    : 0;
  const latestReports = [...reports]
    .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt))
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="profile-page">
        <div className="profile-dashboard">
          <header className="profile-hero-card">
            <div className="profile-identity">
              <div className="profile-avatar-large" aria-hidden="true">
                {(user?.username || "U").charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="profile-kicker">Account profile</p>
                <h1>{user?.username || "Your profile"}</h1>
                <p className="profile-email">{user?.email}</p>
              </div>
            </div>
            <Link className="profile-action" to="/interview">Create new report <span aria-hidden="true">-&gt;</span></Link>
          </header>

          <section className="profile-stats" aria-label="Preparation statistics">
            <article className="profile-stat-card">
              <span>Total reports</span>
              <strong>{reports.length}</strong>
              <small>Interview strategies created</small>
            </article>
            <article className="profile-stat-card">
              <span>Average match</span>
              <strong>{averageScore}%</strong>
              <small>Across your saved reports</small>
            </article>
            <article className="profile-stat-card">
              <span>Account status</span>
              <strong className="status-ready">Ready</strong>
              <small>Profile is active</small>
            </article>
          </section>

          {error ? (
            <section className="profile-message">
              <h2>Activity unavailable</h2>
              <p>{error}</p>
              <button type="button" onClick={retryReports}>Try again</button>
            </section>
          ) : (
            <section className="profile-activity">
              <div className="profile-section-heading">
                <div>
                  <p className="profile-kicker">Your preparation</p>
                  <h2>Recent reports</h2>
                </div>
                <Link to="/reports">View all reports <span aria-hidden="true">-&gt;</span></Link>
              </div>
              {latestReports.length ? (
                <div className="profile-report-list">
                  {latestReports.map((report) => (
                    <Link className="profile-report-row" to={`/interview/report/${report._id}`} key={report._id}>
                      <div>
                        <strong>{report.JobTitle || "Interview preparation report"}</strong>
                        <span>{report.createdAt ? new Date(report.createdAt).toLocaleDateString() : "Date unavailable"}</span>
                      </div>
                      <span className="profile-report-score">{report.matchScore ?? 0}% match <span aria-hidden="true">-&gt;</span></span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="profile-message profile-no-reports">
                  <h3>No reports yet</h3>
                  <p>Build your first personalized interview strategy to start tracking your preparation.</p>
                  <Link to="/interview">Generate your first report</Link>
                </div>
              )}
            </section>
          )}

          <section className="profile-details">
            <div>
              <p className="profile-kicker">Account details</p>
              <h2>Personal information</h2>
            </div>
            <dl>
              <div><dt>Username</dt><dd>{user?.username || "Not available"}</dd></div>
              <div><dt>Email address</dt><dd>{user?.email || "Not available"}</dd></div>
              <div><dt>Workspace</dt><dd>GNAI Interview Prep</dd></div>
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
