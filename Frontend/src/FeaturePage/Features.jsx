import React, { useState } from 'react';
import './features.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Features = () => {
    const [expandedFeature, setExpandedFeature] = useState(null);

    const mainFeatures = [
        {
            id: 1,
            icon: '🤖',
            title: 'AI-Powered Analysis',
            description: 'Advanced machine learning algorithms analyze job descriptions and identify critical skills and competencies required for your target role.',
            details: 'Our AI engine parses job descriptions to extract technical skills, soft skills, experience requirements, and company culture indicators.'
        },
        {
            id: 2,
            icon: '📋',
            title: 'Resume Matching',
            description: 'Automatically compare your resume with job requirements to identify gaps and alignment opportunities.',
            details: 'Get detailed insights on how well your background matches the job, including missing skills and experience levels.'
        },
        {
            id: 3,
            icon: '❓',
            title: 'Custom Questions',
            description: 'Generate tailored interview questions based on the specific role, company, and your background.',
            details: 'Every question is personalized to test skills relevant to your target position with realistic scenarios.'
        },
        {
            id: 4,
            icon: '🎯',
            title: 'Smart Preparation Plan',
            description: 'Get a comprehensive interview strategy with prioritized focus areas and recommended study paths.',
            details: 'Receive a roadmap that focuses on your weakest areas first, maximizing your preparation efficiency.'
        },
        {
            id: 5,
            icon: '⏱️',
            title: 'Real-Time Feedback',
            description: 'Practice with AI mock interviews and receive instant feedback on your responses.',
            details: 'Get scoring on confidence, clarity, technical accuracy, and communication effectiveness.'
        },
        {
            id: 6,
            icon: '📊',
            title: 'Progress Tracking',
            description: 'Monitor your improvement over time with detailed performance metrics and analytics.',
            details: 'Track your progress across different interview types, topics, and skill categories.'
        },
        {
            id: 7,
            icon: '🏆',
            title: 'Success Metrics',
            description: 'View detailed reports showing your readiness level and estimated success probability.',
            details: 'Get insights on interview readiness with data-driven predictions based on similar candidates.'
        },
        {
            id: 8,
            icon: '🔒',
            title: 'Secure & Private',
            description: 'Your data is encrypted and stored securely. We never share your information with third parties.',
            details: 'Enterprise-grade security with end-to-end encryption for all your personal and interview data.'
        }
    ];

    const benefitCategories = [
        {
            title: 'For Job Seekers',
            benefits: [
                'Land your dream job with confidence',
                'Reduce interview anxiety through preparation',
                'Stand out from other candidates',
                'Understand employer expectations better',
                'Practice unlimited mock interviews'
            ]
        },
        {
            title: 'For Career Changers',
            benefits: [
                'Bridge skill gaps with targeted preparation',
                'Learn industry-specific interview patterns',
                'Translate existing skills to new roles',
                'Build confidence in new domain',
                'Accelerate career transition success'
            ]
        },
        {
            title: 'For Professionals',
            benefits: [
                'Stay ahead in competitive job market',
                'Negotiate better with data-backed insights',
                'Upskill for senior positions',
                'Prepare for technical deep dives',
                'Master behavioral interview techniques'
            ]
        }
    ];

    const toggleFeature = (id) => {
        setExpandedFeature(expandedFeature === id ? null : id);
    };

    return (
        <>
            <Navbar />
            <main className="features-page">
                {/* Hero Section */}
                <section className="features-hero">
                    <div className="features-hero-content">
                        <h1>
                            Comprehensive Interview <span>Preparation</span>
                        </h1>
                        <p>
                            Everything you need to succeed in any interview. From AI-powered analysis to real-time feedback,
                            we've got you covered.
                        </p>
                    </div>
                </section>

                {/* Main Features Grid */}
                <section className="features-section">
                    <div className="section-container">
                        <h2>Our Core Features</h2>
                        <p className="section-subtitle">Powerful tools designed to make you interview-ready</p>

                        <div className="features-grid">
                            {mainFeatures.map((feature) => (
                                <div
                                    key={feature.id}
                                    className={`feature-card ${expandedFeature === feature.id ? 'expanded' : ''}`}
                                    onClick={() => toggleFeature(feature.id)}
                                >
                                    <div className="feature-card-inner">
                                        <div className="feature-icon">{feature.icon}</div>
                                        <h3>{feature.title}</h3>
                                        <p className="feature-description">{feature.description}</p>
                                        {expandedFeature === feature.id && (
                                            <p className="feature-details">{feature.details}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <div className="section-container">
                        <h2>Who Benefits</h2>
                        <p className="section-subtitle">Designed for everyone on their career journey</p>

                        <div className="benefits-grid">
                            {benefitCategories.map((category, index) => (
                                <div key={index} className="benefit-card">
                                    <h3>{category.title}</h3>
                                    <ul className="benefit-list">
                                        {category.benefits.map((benefit, idx) => (
                                            <li key={idx}>
                                                <span className="check-icon">✓</span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="comparison-section">
                    <div className="section-container">
                        <h2>Why Choose GenAI Interview Prep?</h2>

                        <div className="comparison-table">
                            <div className="comparison-row">
                                <div className="comparison-cell">
                                    <strong>Traditional Prep</strong>
                                </div>
                                <div className="comparison-cell">
                                    <strong>GenAI Prep</strong>
                                </div>
                            </div>
                            <div className="comparison-row">
                                <div className="comparison-cell">Generic study materials</div>
                                <div className="comparison-cell">
                                    <span className="highlight">AI-personalized content</span>
                                </div>
                            </div>
                            <div className="comparison-row">
                                <div className="comparison-cell">Manual practice tracking</div>
                                <div className="comparison-cell">
                                    <span className="highlight">Automatic analytics & insights</span>
                                </div>
                            </div>
                            <div className="comparison-row">
                                <div className="comparison-cell">Limited feedback</div>
                                <div className="comparison-cell">
                                    <span className="highlight">Real-time AI feedback</span>
                                </div>
                            </div>
                            <div className="comparison-row">
                                <div className="comparison-cell">Time-consuming research</div>
                                <div className="comparison-cell">
                                    <span className="highlight">Instant customized strategy</span>
                                </div>
                            </div>
                            <div className="comparison-row">
                                <div className="comparison-cell">One-size-fits-all approach</div>
                                <div className="comparison-cell">
                                    <span className="highlight">Role-specific preparation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               
            </main>
            <Footer />
        </>
    );
};

export default Features;
