import "./report.scss";

const mockReport = {
  jobDescription:
    "Senior Frontend Engineer - build scalable, accessible web applications using React, TypeScript, Node.js, and modern product engineering practices.",
  resume:
    "3+ years of frontend experience building responsive product features, collaborating with design teams, and improving performance for B2B SaaS products.",
  selfDescription:
    "I am a frontend engineer with strong React fundamentals, a focus on UI quality, and experience designing user flows for business tools.",
  matchScore: 86,
  technicalQuestions: [
    {
      question: "How would you optimize a React app that renders large data tables efficiently?",
      intention: "Measure performance engineering depth",
      answer:
        "I would memoize expensive derived computations, virtualize large lists, debounce expensive updates, and isolate state to reduce re-renders. I would also profile the page with React DevTools before changing the rendering strategy.",
    },
    {
      question: "Explain how you would structure a reusable API layer in a frontend project.",
      intention: "Understand architecture thinking",
      answer:
        "I would centralize request configuration, error handling, and auth logic in dedicated services or client modules, then compose them through typed hooks or repository abstractions to keep components clean and predictable.",
    },
    {
      question: "What is the difference between controlled and uncontrolled inputs in React?",
      intention: "Validate form-state understanding",
      answer:
        "Controlled components sync their value with React state, which makes validation and dynamic logic easier. Uncontrolled inputs rely on DOM refs and are useful for lightweight scenarios but less predictable when the app needs validation or complex UX.",
    },
  ],
  behavioralQuestions: [
    {
      question: "Tell us about a time you handled a difficult stakeholder disagreement.",
      intention: "Assess communication and conflict resolution",
      answer:
        "I focused on the user outcome, shared evidence from product metrics and user feedback, and proposed a compromise that aligned with business goals while preserving engineering quality.",
    },
    {
      question: "Describe a project where you had to improve delivery speed without losing quality.",
      intention: "Assess prioritization and ownership",
      answer:
        "I broke work into user-visible milestones, automated repetitive checks, and aligned the team around high-impact tasks so we could ship earlier while protecting the critical quality gates.",
    },
  ],
  skillGaps: [
    { skill: "System design for large-scale frontend apps", severity: "high" },
    { skill: "Advanced TypeScript patterns", severity: "medium" },
    { skill: "Backend integration testing", severity: "medium" },
  ],
  preparationPlan: [
    {
      day: 1,
      focus: "Core React and state management",
      tasks: [
        "Review hooks, rendering behavior, and state updates",
        "Practice 3 React interview questions from memory",
        "Build one small component with memoization and prop optimization",
      ],
    },
    {
      day: 2,
      focus: "TypeScript and API contracts",
      tasks: [
        "Revisit utility types and generic usage",
        "Mock API flows and error handling patterns",
        "Write a small typed service layer from scratch",
      ],
    },
    {
      day: 3,
      focus: "System design and communication",
      tasks: [
        "Practice explaining frontend architecture decisions",
        "Prepare tradeoff examples for performance and scalability",
        "Review one case study on distributed UI patterns",
      ],
    },
  ],
};

const severityClass = {
  low: "low",
  medium: "medium",
  high: "high",
};

const saveAsPdf = () => {
  window.print();
};

const InterviewReportPopup = ({ report = mockReport, onClose }) => {
  return (
    <div className="report-overlay" onClick={onClose}>
      <div
        className="report-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Interview strategy report"
      >
        <button
          type="button"
          className="close-button"
          aria-label="Close report"
          onClick={onClose}
        >
          ×
        </button>

        <header className="report-header">
          <div className="report-brand">
            <div className="brand-mark-wrap">
              <img src="/logo.png" alt="GNAI logo" className="brand-logo" />
            </div>
            <span>GNAI</span>
          </div>

          <div className="header-actions">
            <button type="button" className="secondary-action-button">
              Open full page
            </button>
            <button type="button" className="pdf-button" onClick={saveAsPdf}>
              Save as PDF
            </button>
          </div>
        </header>

        <div className="report-summary">
          <div className="summary-copy">
            <p className="eyebrow">Interview strategy report</p>
            <h1>AI Interview Performance Review</h1>
            <p className="summary-text">
              Personalized recommendations based on your profile, role fit, and key
              interview gaps for the next hiring round.
            </p>
          </div>

          <div className="score-card">
            <span>Match score</span>
            <strong>{report.matchScore}%</strong>
            <small>Strong fit</small>
          </div>
        </div>

        <section className="report-panel">
          <h2>Overview</h2>
          <div className="two-column">
            <div className="info-block">
              <label>Job Role</label>
              <p>{report.jobDescription}</p>
            </div>
            <div className="info-block">
              <label>Profile Snapshot</label>
              <p>{report.selfDescription}</p>
            </div>
          </div>
        </section>

        <section className="report-panel">
          <h2>Technical questions</h2>
          <div className="question-list">
            {report.technicalQuestions.map((item, index) => (
              <article key={index} className="question-card">
                <div className="question-topline">
                  <span className="question-index">Q{index + 1}</span>
                  <span className="question-intent">{item.intention}</span>
                </div>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="report-panel">
          <h2>Behavioral questions</h2>
          <div className="question-list">
            {report.behavioralQuestions.map((item, index) => (
              <article key={index} className="question-card">
                <div className="question-topline">
                  <span className="question-index">B{index + 1}</span>
                  <span className="question-intent">{item.intention}</span>
                </div>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="report-panel">
          <h2>Skill gaps</h2>
          <div className="gap-grid">
            {report.skillGaps.map((item, index) => (
              <div key={index} className="gap-item">
                <div className="gap-title-row">
                  <span className="skill-name">{item.skill}</span>
                  <span className={`severity-tag ${severityClass[item.severity]}`}>
                    {item.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="report-panel">
          <h2>Preparation plan</h2>
          <div className="timeline-list">
            {report.preparationPlan.map((plan) => (
              <article key={plan.day} className="timeline-card">
                <div className="timeline-marker">
                  <span>Day {plan.day}</span>
                </div>
                <div className="timeline-content">
                  <h3>{plan.focus}</h3>
                  <ul>
                    {plan.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default InterviewReportPopup;
