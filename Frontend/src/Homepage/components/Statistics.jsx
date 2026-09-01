import React, { useState, useEffect } from 'react';
import '../styles/statistics.scss';

const Statistics = () => {
    const [counts, setCounts] = useState({
        users: 0,
        successRate: 0,
        questions: 0,
        hoursSaved: 0,
    });

    useEffect(() => {
        const targets = {
            users: 10000,
            successRate: 95,
            questions: 50000,
            hoursSaved: 2500000,
        };

        const increment = setInterval(() => {
            setCounts((prev) => ({
                users: prev.users < targets.users ? prev.users + 100 : targets.users,
                successRate: prev.successRate < targets.successRate ? prev.successRate + 1 : targets.successRate,
                questions: prev.questions < targets.questions ? prev.questions + 500 : targets.questions,
                hoursSaved: prev.hoursSaved < targets.hoursSaved ? prev.hoursSaved + 25000 : targets.hoursSaved,
            }));
        }, 30);

        return () => clearInterval(increment);
    }, []);

    const stats = [
        {
            id: 1,
            value: counts.users.toLocaleString(),
            label: 'Active Users',
            icon: '👥',
        },
        {
            id: 2,
            value: `${counts.successRate}%`,
            label: 'Success Rate',
            icon: '🎯',
        },
        {
            id: 3,
            value: counts.questions.toLocaleString(),
            label: 'Mock Questions',
            icon: '💬',
        },
        {
            id: 4,
            value: `${(counts.hoursSaved / 1000000).toFixed(1)}M`,
            label: 'Hours Saved',
            icon: '⏱️',
        },
    ];

    return (
        <section className="statistics-section">
            <div className="statistics-container">
                <div className="stats-grid">
                    {stats.map((stat) => (
                        <div key={stat.id} className="stat-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
