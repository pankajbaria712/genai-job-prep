import React, { useState } from 'react';
import '../styles/faq.scss';

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'How does the AI analyze interviews?',
            answer: 'Our AI uses advanced natural language processing to analyze your interview responses in real-time. It evaluates communication clarity, technical knowledge, behavioral fit, and provides detailed feedback with specific recommendations for improvement.',
        },
        {
            id: 2,
            question: 'Can I use this for different roles?',
            answer: 'Absolutely! GenAI Interview Prep supports all types of roles - from software engineering to product management, data science, design, and more. Simply upload different job descriptions to get role-specific preparation.',
        },
        {
            id: 3,
            question: 'Is my data secure and private?',
            answer: 'Yes, we take security seriously. All your data is encrypted end-to-end, stored securely in compliance with GDPR and other privacy regulations. We never share your personal information or interview recordings with third parties.',
        },
        {
            id: 4,
            question: 'What if I want to cancel?',
            answer: 'You can cancel your subscription anytime with no questions asked. If you cancel before your billing cycle ends, you can continue using the service until the end of that period.',
        },
        {
            id: 5,
            question: 'Do you offer team or corporate plans?',
            answer: 'Yes! We offer enterprise plans for companies and organizations. Contact our sales team to discuss custom pricing, team collaboration features, and dedicated support for your organization.',
        },
        {
            id: 6,
            question: 'How accurate are the mock questions?',
            answer: 'Our mock questions are generated using a combination of real interview questions from top companies and AI enhancement. They\'re continuously improved based on actual user feedback and interview outcomes, giving you 95% relevance accuracy.',
        },
    ];

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to common questions</p>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="faq-item">
                            <button
                                className={`faq-question ${expandedIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="toggle-icon">{expandedIndex === index ? '−' : '+'}</span>
                            </button>
                            {expandedIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
