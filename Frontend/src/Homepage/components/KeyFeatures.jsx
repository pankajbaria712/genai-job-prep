import React from 'react';
import '../styles/features.scss';

const KeyFeatures = () => {
    const features = [
        {
            id: 1,
            title: 'AI Analysis',
            description: 'Advanced AI analyzes job requirements and identifies skill gaps',
            icon: '🧠',
            color: 'blue',
        },
        {
            id: 2,
            title: 'Personalized Questions',
            description: 'Get mock questions tailored to your specific role and company',
            icon: '💬',
            color: 'pink',
        },
        {
            id: 3,
            title: 'Real-Time Feedback',
            description: 'Receive instant feedback on your answers with improvement suggestions',
            icon: '📊',
            color: 'purple',
        },
        {
            id: 4,
            title: 'Company-Specific Prep',
            description: 'Prepare for interviews at Google, Meta, Amazon with company insights',
            icon: '🏢',
            color: 'green',
        },
        {
            id: 5,
            title: 'Interview Recording',
            description: 'Record your practice interviews and review your performance',
            icon: '🎥',
            color: 'orange',
        },
        {
            id: 6,
            title: 'Comprehensive Reports',
            description: 'Detailed reports showing your strengths and areas for improvement',
            icon: '📈',
            color: 'cyan',
        },
    ];

    return (
        <section className="key-features-section" id="features">
            <div className="features-container">
                <div className="section-header">
                    <h2>Powerful Features to Ace Your Interview</h2>
                    <p>Everything you need to succeed</p>
                </div>

                <div className="features-grid">
                    {features.map((feature) => (
                        <div key={feature.id} className={`feature-card feature-${feature.color}`}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
