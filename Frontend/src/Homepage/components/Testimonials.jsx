import React, { useState } from 'react';
import '../styles/testimonials.scss';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: 'I went from anxious to confident. GenAI\'s personalized questions prepared me perfectly. I got the offer!',
            author: 'Sarah Chen',
            role: 'Senior Software Engineer',
            company: 'Google',
            avatar: '👩‍💻',
            rating: 5,
        },
        {
            id: 2,
            quote: 'The AI feedback was incredibly detailed. It caught things I would have never noticed. Highly recommend!',
            author: 'Marcus Johnson',
            role: 'Data Scientist',
            company: 'Meta',
            avatar: '👨‍💼',
            rating: 5,
        },
        {
            id: 3,
            quote: 'Best interview prep tool I\'ve used. The company-specific insights made all the difference.',
            author: 'Priya Patel',
            role: 'Product Manager',
            company: 'Amazon',
            avatar: '👩‍🔬',
            rating: 5,
        },
        {
            id: 4,
            quote: 'Went from 3 rejections to 2 offers in a month. This platform is a game-changer!',
            author: 'David Kim',
            role: 'Frontend Engineer',
            company: 'Apple',
            avatar: '👨‍💻',
            rating: 5,
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="testimonials-container">
                <div className="section-header">
                    <h2>Success Stories from Our Community</h2>
                    <p>See how professionals just like you landed their dream roles</p>
                </div>

                <div className="testimonials-carousel">
                    <div className="carousel-wrapper">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
                            >
                                <div className="testimonial-content">
                                    <div className="stars">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                    <p className="quote">"{testimonial.quote}"</p>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.avatar}</div>
                                    <div className="author-info">
                                        <h4>{testimonial.author}</h4>
                                        <p>{testimonial.role}</p>
                                        <span className="company-badge">{testimonial.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="carousel-controls">
                        <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
                        <div className="carousel-dots">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></div>
                            ))}
                        </div>
                        <button className="carousel-btn next" onClick={nextSlide}>❯</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
