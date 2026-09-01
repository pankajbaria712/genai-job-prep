import { Link } from "react-router";
import "./notFoundPage.scss";

const NotFoundPage = () => {
  return (
    <main className="not-found-shell">
      <div className="not-found-backdrop" aria-hidden="true" />

      <div className="not-found-card" role="alert" aria-live="assertive">
        <div className="brand-row">
          <div className="brand-mark-wrap">
            <img src="/logo.png" alt="GNAI logo" className="brand-logo" />
          </div>
          <span className="brand-name">GNAI</span>
        </div>

        <div className="error-code">404</div>
        <h1>Page not found</h1>
        <p>
          The page you are looking for may have moved, been removed, or never existed.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="primary-action">
            Back to home
          </Link>
          <Link to="/login" className="secondary-action">
            Go to login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
