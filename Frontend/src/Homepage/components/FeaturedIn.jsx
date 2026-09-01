import React from 'react';
import '../styles/featured-in.scss';

const FeaturedIn = () => {
    const companies = [
        { name: 'TechCrunch', icon: '📱' },
        { name: 'Product Hunt', icon: '🦆' },
        { name: 'Hacker News', icon: '⚡' },
        { name: 'Forbes', icon: '📈' },
        { name: 'Marker Noon', icon: '🎯' },
    ];

    return (
        <section className="featured-in-section">
            <div className="featured-container">
                <p className="featured-label">Featured In</p>
                <div className="companies-grid">
                    {companies.map((company, index) => (
                        <div key={index} className="company-logo">
                            <span className="company-icon">{company.icon}</span>
                            <span className="company-name">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedIn;
