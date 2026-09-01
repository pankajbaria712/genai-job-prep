import React from 'react';
import '../styles/hero.scss';
import { useNavigateToInterview } from '../logic/useNavigateToInterview';

const HeroSection = () => {
    const handleGetStarted = useNavigateToInterview();
    return (
        <section className="hero-section" id="home">
            <div className="hero-container">
                {/* Left Content */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Master Your <span>Interview with AI</span>
                    </h1>
                    <p className="hero-subtitle">
                        Get personalized interview preparation strategies powered by advanced AI. 
                        Analyze job requirements, identify skill gaps, and practice with AI-generated 
                        questions tailored to your role.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={handleGetStarted}>Get Started Free</button>
                        <button className="btn btn-secondary">
                            <span className="play-icon">▶</span> Watch Demo
                        </button>
                    </div>
                </div>

                {/* Right Illustration/Mockup */}
                <div className="hero-illustration">
                    <div className="illustration-placeholder">
                        <div className="floating-card card-1">
                            <span className="card-icon">📋</span>
                            <p>Upload Resume</p>
                        </div>
                        <div className="floating-card card-2">
                            <span className="card-icon">🎯</span>
                            <p>Analyze Job</p>
                        </div>
                        <div className="floating-card card-3">
                            <span className="card-icon">✨</span>
                            <p>AI Strategy</p>
                        </div>
                        <div className="hero-shape hero-shape-1"></div>
                        <div className="hero-shape hero-shape-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
