import React from 'react';
import '../styles/cta-section.scss';

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <h2>Ready to Land Your Dream Job?</h2>
                <p>Join 10,000+ professionals using GenAI Interview Prep</p>
                <button className="cta-btn primary">Start Your Free Trial Now</button>
                <p className="cta-subtitle">No credit card required • Instant access</p>
            </div>
        </section>
    );
};

export default CTASection;
