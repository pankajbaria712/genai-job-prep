import React from 'react';
import '../styles/home.scss';

/**
 * UI Layer Component - Interview Plan Page
 * 
 * Pure presentational component that displays the interview plan form.
 * This component only renders UI and delegates all state management,
 * hooks logic, and API calls to parent components/hooks/context.
 * 
 * @param {Object} props - Component props
 * @param {string} props.jobDescription - Current job description value
 * @param {Function} props.onJobDescriptionChange - Handler for job description input
 * @param {number} props.jobDescCharCount - Current character count for job description
 * @param {string} props.selfDescription - Current self description value
 * @param {Function} props.onSelfDescriptionChange - Handler for self description input
 * @param {File|null} props.resumeFile - Selected resume file
 * @param {Function} props.onResumeChange - Handler for resume file input
 * @param {boolean} props.isLoading - Loading state for generate button
 * @param {Function} props.onGenerateStrategy - Handler for generate button click
 * @param {string} props.selectedProfileType - 'resume' or 'description'
 */
const InterviewPlanUI = ({
    jobDescription = '',
    onJobDescriptionChange = () => {},
    jobDescCharCount = 0,
    selfDescription = '',
    onSelfDescriptionChange = () => {},
    resumeFile = null,
    onResumeChange = () => {},
    isLoading = false,
    onGenerateStrategy = () => {},
    selectedProfileType = null,
}) => {
    return (
        <main className="interview-plan-page">
            <div className="plan-panel">
                {/* Header Section */}
                <header className="panel-header">
                    <h1>
                        Create Your Custom <span>Interview Plan</span>
                    </h1>
                    <p>
                        Let our AI analyze the job requirements and your unique profile to
                        build a winning strategy.
                    </p>
                </header>

                {/* Form Grid Section */}
                <div className="form-grid">
                    {/* Job Description Card */}
                    <section className="field-card job-card">
                        <div className="field-card__header">
                            <div className="field-title">
                                <span className="field-icon">✎</span>
                                <h2>Target Job Description</h2>
                            </div>
                            <span className="required-badge">REQUIRED</span>
                        </div>

                        <textarea
                            name="jobDescription"
                            id="jobDescription"
                            value={jobDescription}
                            onChange={onJobDescriptionChange}
                            placeholder="Paste the full job description here... e.g. 'Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...'"
                            maxLength={5000}
                        />

                        <div className="char-counter">
                            {jobDescCharCount} / 5000 chars
                        </div>
                    </section>

                    {/* Profile Section */}
                    <aside className="side-panel">
                        <section className="field-card profile-card">
                            <div className="field-card__header">
                                <div className="field-title">
                                    <span className="field-icon">◔</span>
                                    <h2>Your Profile</h2>
                                </div>
                                <span className="best-results-badge">BEST RESULTS</span>
                            </div>

                            {/* Resume Upload Section */}
                            <label htmlFor="resume" className="upload-box">
                                <span className="upload-icon">⇪</span>
                                <span className="upload-text">
                                    {resumeFile ? `📄 ${resumeFile.name}` : 'Click to upload or drag & drop'}
                                </span>
                                <small>{resumeFile ? 'File selected' : 'PDF or DOCX (Max 5MB)'}</small>
                            </label>

                            <input
                                hidden
                                type="file"
                                name="resume"
                                id="resume"
                                accept=".pdf,.doc,.docx"
                                onChange={onResumeChange}
                            />

                            {/* Divider */}
                            <div className="or-divider">OR</div>

                            {/* Self Description Section */}
                            <div className="quick-description-wrap">
                                <label htmlFor="selfDescription" className="quick-description-label">
                                    Quick Self-Description
                                </label>
                                <textarea
                                    name="selfDescription"
                                    id="selfDescription"
                                    value={selfDescription}
                                    onChange={onSelfDescriptionChange}
                                    placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                                />
                            </div>

                            {/* Info Banner */}
                            <div className="info-banner">
                                <span className="info-dot">•</span>
                                <span>
                                    Either a <strong>Resume</strong> or a <strong>Self Description</strong> is required to
                                    generate a personalized plan.
                                </span>
                            </div>
                        </section>
                    </aside>
                </div>
                {/* Generate Button Section */}
                <div className="generate-bar">
                    <span className="generate-meta">AI-Powered Strategy Generation • Approx 30s</span>

                    <button
                        type="button"
                        className="button primary-button"
                        onClick={onGenerateStrategy}
                        disabled={isLoading}
                    >
                        <span className="button-star">✦</span>
                        {isLoading ? 'Generating...' : 'Generate My Interview Strategy'}
                    </button>
                </div>
            </div>

        </main>
    );
};

export default InterviewPlanUI;