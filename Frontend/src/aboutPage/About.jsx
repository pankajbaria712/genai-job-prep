import React from 'react';
import './about.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
    const stats = [
        { value: '10k+', label: 'Job seekers empowered' },
        { value: '95%', label: 'Interview readiness rate' },
        { value: '50k+', label: 'Practice questions generated' },
        { value: '2.5M+', label: 'Minutes of AI prep' }
    ];

    const values = [
        {
            icon: '🎯',
            title: 'Purpose-driven',
            description: 'We believe every candidate deserves a fair shot at their dream role with the right preparation and confidence.'
        },
        {
            icon: '🤖',
            title: 'AI with Human Insight',
            description: 'Our platform combines advanced AI with practical interview strategies so people can perform at their best.'
        },
        {
            icon: '🔒',
            title: 'Privacy First',
            description: 'Your data and career information remain secure, protected, and never shared without consent.'
        },
        {
            icon: '📈',
            title: 'Results Focused',
            description: 'We are built around measurable outcomes, improvement, and confident job transitions.'
        }
    ];

    const teamHighlights = [
        'AI-powered behavioral interview coaching',
        'Role-specific strategy planning for every candidate',
        'Clear insights into skill gaps and interview readiness',
        'A supportive platform designed to reduce interview anxiety'
    ];

    const journeySteps = [
        {
            number: '01',
            title: 'We built for real hiring challenges',
            description: 'We noticed that talented people often lose opportunities because they are underprepared, not underqualified.'
        },
        {
            number: '02',
            title: 'We combined AI with human expertise',
            description: 'We designed a preparation system that understands specific job requirements and candidate strengths.'
        },
        {
            number: '03',
            title: 'We help candidates perform with confidence',
            description: 'From resume analysis to mock interviews, our platform turns uncertainty into strategy and confidence.'
        }
    ];

    return (
        <>
            <Navbar />
            <main className="about-page">
                <section className="about-hero">
                    <div className="about-hero-content">
                        <p className="eyebrow">About GenAI Interview Prep</p>
                        <h1>
                            We help people <span>turn preparation into confidence</span>
                        </h1>
                        <p className="hero-text">
                            GenAI Interview Prep was built to make interview success more accessible,
                            structured, and personal. We combine AI-powered analysis with career-focused preparation
                            so candidates can walk into interviews ready to perform at their best.
                        </p>
                    </div>
                </section>

                <section className="stats-section">
                    <div className="section-container">
                        <div className="stats-grid">
                            {stats.map((item, index) => (
                                <div key={index} className="stat-card">
                                    <h3>{item.value}</h3>
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mission-section">
                    <div className="section-container mission-grid">
                        <div className="mission-copy">
                            <p className="section-tag">Our Mission</p>
                            <h2>Make interview preparation smarter, simpler, and more personal.</h2>
                            <p>
                                We know interviews can be stressful, especially when candidates are balancing job search,
                                role changes, or career growth. Our mission is to remove uncertainty and help people identify
                                exactly what to focus on before they walk into the room.
                            </p>
                            <p>
                                By combining AI-driven analysis with practical coaching guidance, we turn vague preparation into
                                focused action and measurable improvement.
                            </p>
                        </div>

                        <div className="mission-panel">
                            {teamHighlights.map((item, index) => (
                                <div key={index} className="check-item">
                                    <span className="check-icon">✓</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="values-section">
                    <div className="section-container">
                        <p className="section-tag center">Our Values</p>
                        <h2>What guides everything we build</h2>

                        <div className="values-grid">
                            {values.map((value, index) => (
                                <div key={index} className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="journey-section">
                    <div className="section-container">
                        <p className="section-tag center">Our Journey</p>
                        <h2>Built from real career challenges</h2>

                        <div className="journey-grid">
                            {journeySteps.map((step) => (
                                <div key={step.number} className="journey-card">
                                    <span className="journey-number">{step.number}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to prepare with confidence?</h2>
                        <p>Let AI guide your next interview strategy and help you move forward with clarity.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;
