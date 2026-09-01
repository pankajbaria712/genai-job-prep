import "./loading.scss";

const LoadingScreen = ({
  title = "Preparing your profile",
  message = "Checking your session and getting the app ready...",
}) => {
  return (
    <main className="loading-shell">
      <div className="loading-backdrop" aria-hidden="true" />

      <div className="loading-card" role="status" aria-live="polite">
        <div className="brand-row">
          <div className="brand-mark-wrap">
            <img src="/logo.png" alt="GNAI logo" className="brand-logo" />
          </div>
          <span className="brand-name">GNAI</span>
        </div>

        <div className="progress-block" aria-hidden="true">
          <div className="progress-labels">
            <span>Booting</span>
            <span>82%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" />
          </div>
        </div>

        <h1>{title}</h1>
        <p>{message}</p>

        <div className="loading-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </main>
  );
};

export default LoadingScreen;
