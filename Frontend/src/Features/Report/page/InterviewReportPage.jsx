import { useState } from "react";
import { useNavigate } from "react-router";
import "./report.scss";

const mockReport = {
  matchScore: 85,
  technicalQuestions: [
    {
      question:
        "In your internship at Creart Solutions, you developed StockScope using React.js. How did you structure reusable UI components and handle state management across that platform?",
      intention:
        "Evaluates component-based architecture skills in React.js as required by the JD and tests actual implementation knowledge from the candidate's internship.",
      answer:
        "Focus on explaining how components were broken down into modular, reusable elements (e.g., stock cards, charts, navigation bars). Discuss using React hooks (useState, useEffect) or context API for state management, highlighting performance efficiency and clean code structure.",
    },
    {
      question:
        "During your internship at BrainyBeam Technologies, you worked with REST APIs, MongoDB, and JWT authentication. Can you walk us through how you securely generate, send, and verify JWT tokens in a Node.js/Express backend?",
      intention:
        "Assesses backend skills using Node.js, Express, and JWT security practices, directly matching core job responsibilities.",
      answer:
        "Explain the authentication flow: user submits credentials -> server validates against MongoDB -> server signs a JWT with a secret key -> token sent to client -> client attaches token in HTTP Authorization header -> Express middleware verifies token before granting access to protected routes.",
    },
    {
      question:
        "You have built full-stack projects like GTUStudentHub and Skill Tracker using Node.js and MongoDB. How do you design database schemas for such applications and ensure efficient data querying?",
      intention:
        "Verifies data modeling capabilities and backend knowledge using MongoDB.",
      answer:
        "Describe schema design in Mongoose/MongoDB (embedding vs. referencing), creating indexing for frequently queried fields, and using Mongoose middleware or aggregate pipelines to fetch data efficiently.",
    },
    {
      question:
        "You mentioned experimenting with Generative AI and the Google Gemini API. How did you handle API requests, error handling, and response processing when integrating this API into your JavaScript applications?",
      intention:
        "Validates candidate's experience with third-party APIs and nice-to-have Generative AI skills mentioned in both the candidate description and JD.",
      answer:
        "Detail using asynchronous functions (async/await) or Axios/Fetch to send prompts to the Gemini API endpoint, managing API keys securely using environment variables, and handling potential rate limits or API errors gracefully.",
    },
  ],
  behavioralQuestions: [
    {
      question:
        "In your self-description, you stated that you prefer understanding the root cause of a bug rather than copying solutions. Can you describe a challenging technical issue you faced while building one of your projects (e.g., Skill Tracker or GTUStudentHub) and how you debugged it?",
      intention:
        "Assesses problem-solving mindset, debugging methodologies, and ownership.",
      answer:
        "Use the STAR method: Describe the specific problem/bug (Situation/Task), detail your debugging strategy such as console logging, checking network tabs, inspecting database logs (Action), and explain how the fix stabilized the project (Result).",
    },
    {
      question:
        "At BrainyBeam Technologies, you worked collaboratively in a software development environment. How did you handle feedback on your code during team discussions or code reviews?",
      intention:
        "Tests team collaboration, openness to feedback, and communication skills required by TechNova Solutions.",
      answer:
        "Provide a concrete instance where a senior developer provided code review feedback (e.g., refactoring React components or API error handling), explain how you adapted, implemented the changes, and learned from the advice.",
    },
    {
      question:
        "How do you balance your final-year Computer Engineering academic workload (7th semester at GTU) while actively learning new technologies like Google Gemini API and building real-world projects?",
      intention:
        "Evaluates time management, adaptability, and commitment to continuous learning.",
      answer:
        "Explain your approach to prioritizing tasks, breaking projects into manageable milestones, and dedicating consistent weekly time to hands-on practical development alongside university coursework.",
    },
  ],
  skillGaps: [
    {
      skill: "Automated Testing Frameworks (Jest / React Testing Library / Supertest)",
      severity: "high",
    },
    {
      skill: "TypeScript & Next.js",
      severity: "medium",
    },
    {
      skill: "Docker & Containerization",
      severity: "low",
    },
    {
      skill: "CI/CD Pipelines",
      severity: "low",
    },
  ],
  preparationPlan: [
    {
      day: 1,
      focus: "Frontend Architecture & React Deep Dive",
      tasks: [
        "Review React component lifecycle, custom hooks, and state management practices used in StockScope.",
        "Practice building reusable UI components and optimizing React rendering performance.",
        "Prepare code walk-through explanations for frontend projects (Typing Platform, StockScope).",
      ],
    },
    {
      day: 2,
      focus: "Node.js, Express & Authentication",
      tasks: [
        "Review JWT authentication middleware implementation in Express.",
        "Practice writing clean RESTful route handlers, request validation, and global error handling middleware.",
        "Refactor database queries using Mongoose for MongoDB optimization.",
      ],
    },
    {
      day: 3,
      focus: "Automated Testing & Integration Basics",
      tasks: [
        "Learn basic concepts of Jest and React Testing Library for component testing.",
        "Write basic unit tests for utility functions and API endpoints using Jest/Supertest.",
        "Review third-party API integration patterns (Google Gemini API, REST APIs).",
      ],
    },
    {
      day: 4,
      focus: "System Fundamentals & Deployment",
      tasks: [
        "Review Git workflow practices (branching, pull requests, resolving merge conflicts).",
        "Review deployment steps on Vercel and Render for full-stack apps.",
        "Read basic introductory concepts of TypeScript, Next.js, and Docker to address nice-to-have gaps.",
      ],
    },
    {
      day: 5,
      focus: "Behavioral Preparation & Mock Interview",
      tasks: [
        "Prepare STAR stories for internship experiences at BrainyBeam and Creart Solutions.",
        "Practice explaining problem-solving approaches to technical bugs clearly.",
        "Conduct a full mock interview focusing on explaining project choices and career goals.",
      ],
    },
  ],
};

const severityClass = {
  low: "low",
  medium: "medium",
  high: "high",
};

const sections = [
  { id: "technical", label: "Technical Question" },
  { id: "behavioral", label: "Behavioral Question" },
  { id: "skill-gaps", label: "Skill Gaps" },
  { id: "roadmap", label: "Roadmap" },
];

const saveAsPdf = () => {
  window.print();
};

const InterviewReportPage = ({ report = mockReport }) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("technical");

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderActiveSection = () => {
    if (activeSection === "technical") {
      return (
        <section id="technical" className="section-surface report-panel">
          <div className="section-heading">
            <span className="section-kicker">Technical</span>
            <h2>Technical Questions</h2>
          </div>

          <div className="question-list">
            {report.technicalQuestions.map((item, index) => (
              <article key={index} className="question-card animated-card">
                <div className="question-topline">
                  <span className="question-index">Q{index + 1}</span>
                </div>
                <h3>{item.question}</h3>
                <div className="intention-block">
                  <strong>Intention :</strong>
                  <p>{item.intention}</p>
                </div>
                <div className="answer-block">
                  <strong>Expected answer focus</strong>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      );
    }

    if (activeSection === "behavioral") {
      return (
        <section id="behavioral" className="section-surface report-panel">
          <div className="section-heading">
            <span className="section-kicker">Behavioral</span>
            <h2>Behavioral Questions</h2>
          </div>

          <div className="question-list">
            {report.behavioralQuestions.map((item, index) => (
              <article key={index} className="question-card animated-card">
                <div className="question-topline">
                  <span className="question-index">B{index + 1}</span>
                </div>
                <h3>{item.question}</h3>
                <div className="intention-block">
                  <strong>Intention :</strong>
                  <p>{item.intention}</p>
                </div>
                <div className="answer-block">
                  <strong>What to highlight</strong>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      );
    }

    if (activeSection === "skill-gaps") {
      return (
        <section id="skill-gaps" className="section-surface report-panel">
          <div className="section-heading">
            <span className="section-kicker">Focus</span>
            <h2>Skill Gaps</h2>
          </div>

          <div className="gap-grid">
            {report.skillGaps.map((item, index) => (
              <div key={index} className="gap-item animated-card">
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
      );
    }

    return (
      <section id="roadmap" className="section-surface report-panel">
        <div className="section-heading">
          <span className="section-kicker">Roadmap</span>
          <h2>Preparation Plan</h2>
        </div>

        <div className="timeline-list">
          {report.preparationPlan.map((plan) => (
            <article key={plan.day} className="timeline-card animated-card">
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
    );
  };

  return (
    <main className="report-page-shell">
      <div className="report-page">
        <header className="report-header">
          <div className="report-brand">
            <div className="brand-mark-wrap">
              <img src="/logo.png" alt="GNAI logo" className="brand-logo" />
            </div>
            <span>GNAI</span>
          </div>

          <nav className="section-nav" aria-label="Report sections">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`section-tab ${activeSection === section.id ? "active" : ""}`}
                onClick={() => handleSectionClick(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button type="button" className="secondary-action-button" onClick={() => navigate("/")}>
              Back to home
            </button>
            <button type="button" className="pdf-button" onClick={saveAsPdf}>
              Save as PDF
            </button>
          </div>
        </header>

        <div className="report-body">
          <section className="report-summary section-surface">
            <div className="summary-copy">
              <p className="eyebrow">Interview strategy report</p>
              <h1>AI Interview Performance Review</h1>
              <p className="summary-text">
                Personalized recommendations based on your profile, role fit, and key interview
                gaps for the next hiring round.
              </p>
            </div>

            <div className="score-card">
              <span>Match score</span>
              <strong>{report.matchScore}%</strong>
              <small>Strong fit</small>
            </div>
          </section>

          {renderActiveSection()}
        </div>
      </div>
    </main>
  );
};

export default InterviewReportPage;
