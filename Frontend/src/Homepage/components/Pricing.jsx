import React, { useState } from 'react';
import '../styles/pricing.scss';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const plans = [
        {
            id: 1,
            name: 'Free',
            price: 0,
            monthlyPrice: 0,
            annualPrice: 0,
            badge: null,
            description: 'Perfect for getting started',
            features: [
                '✓ 1 Interview Strategy',
                '✓ 5 Mock Questions',
                '✓ Basic Feedback',
                '✓ 1 Company Profile',
                '✗ Recording Feature',
                '✗ Priority Support',
            ],
            cta: 'Start Free',
            highlighted: false,
        },
        {
            id: 2,
            name: 'Professional',
            monthlyPrice: 29,
            annualPrice: 24,
            badge: 'BEST VALUE',
            description: 'Most popular for professionals',
            features: [
                '✓ Unlimited Interview Strategies',
                '✓ Unlimited Mock Questions',
                '✓ Advanced Feedback with AI Coaching',
                '✓ 50+ Company Profiles',
                '✓ Recording & Playback',
                '✓ Performance Analytics',
                '✓ Email Support',
            ],
            cta: 'Start 7-Day Free Trial',
            highlighted: true,
        },
        {
            id: 3,
            name: 'Enterprise',
            price: 'Custom',
            monthlyPrice: null,
            annualPrice: null,
            badge: 'CUSTOM',
            description: 'For teams and organizations',
            features: [
                '✓ Everything in Professional',
                '✓ Team Collaboration',
                '✓ Custom Company Training',
                '✓ Dedicated Success Manager',
                '✓ API Access',
                '✓ Advanced Analytics',
                '✓ Priority 24/7 Support',
            ],
            cta: 'Contact Sales',
            highlighted: false,
        },
    ];

    const getPrice = (plan) => {
        if (plan.monthlyPrice === null) return 'Custom';
        if (plan.monthlyPrice === 0) return 'Free';
        const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
        return `$${price}`;
    };

    return (
        <section className="pricing-section" id="pricing">
            <div className="pricing-container">
                <div className="section-header">
                    <h2>Choose Your Plan</h2>
                    <p>Flexible pricing for everyone. Start free, upgrade anytime.</p>
                </div>

                {/* Billing Toggle */}
                <div className="billing-toggle">
                    <button
                        className={billingCycle === 'monthly' ? 'active' : ''}
                        onClick={() => setBillingCycle('monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={billingCycle === 'annual' ? 'active' : ''}
                        onClick={() => setBillingCycle('annual')}
                    >
                        Annual <span className="save-badge">Save 20%</span>
                    </button>
                </div>

                {/* Pricing Cards */}
                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                        >
                            {plan.badge && <div className="badge">{plan.badge}</div>}

                            <h3 className="plan-name">{plan.name}</h3>
                            <p className="plan-description">{plan.description}</p>

                            <div className="plan-price">
                                <span className="price">{getPrice(plan)}</span>
                                {plan.monthlyPrice !== null && plan.monthlyPrice !== 0 && (
                                    <span className="period">/month</span>
                                )}
                            </div>

                            <button className={`cta-btn ${plan.highlighted ? 'primary' : 'secondary'}`}>
                                {plan.cta}
                            </button>

                            <div className="features-list">
                                {plan.features.map((feature, index) => (
                                    <div key={index} className="feature">
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
