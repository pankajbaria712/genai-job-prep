import React from 'react';
import '../styles/how-it-works.scss';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: 'Upload Your Profile',
            description: 'Upload your resume or write a quick self-description. Our AI analyzes your skills and experience.',
            icon: '📄',
        },
        {
            id: 2,
            title: 'Paste Job Description',
            description: 'Paste the job description. AI extracts key requirements, skills, and responsibilities needed.',
            icon: '🎯',
        },
        {
            id: 3,
            title: 'Generate Strategy',
            description: 'AI creates a personalized interview preparation plan with mock questions and tips.',
            icon: '✨',
        },
        {
            id: 4,
            title: 'Practice & Master',
            description: 'Practice with AI-generated interviews, get real-time feedback, and improve performance.',
            icon: '🏆',
        },
    ];

    return (
        <section className="how-it-works-section" id="how-it-works">
            <div className="how-it-works-container">
                <div className="section-header">
                    <h2>How GenAI Interview Prep Works</h2>
                    <p>Simple, intelligent, and results-driven in 4 easy steps</p>
                </div>

                <div className="steps-grid">
                    {steps.map((step) => (
                        <div key={step.id} className="step-card">
                            <div className="step-number">{step.id}</div>
                            <div className="step-icon">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            {step.id < 4 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
