import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Column 1: Brand */}
                <div className="footer-column">
                    <div className="footer-logo">
                        <span className="logo-icon">🎯</span>
                        <span className="logo-text">GenAI Interview Prep</span>
                    </div>
                    <p className="footer-tagline">Master Your Interview with AI</p>
                    <div className="social-icons">
                        <a href="#linkedin" className="social-icon">in</a>
                        <a href="#twitter" className="social-icon">𝕏</a>
                        <a href="#github" className="social-icon">gh</a>
                        <a href="#instagram" className="social-icon">ig</a>
                    </div>
                </div>

                {/* Column 2: Product */}
                <div className="footer-column">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#updates">Updates</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                    </ul>
                </div>

                {/* Column 3: Resources */}
                <div className="footer-column">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#docs">Documentation</a></li>
                        <li><a href="#interview-tips">Interview Tips</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#community">Community</a></li>
                    </ul>
                </div>

                {/* Column 4: Company */}
                <div className="footer-column">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#press">Press</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#partners">Partners</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p className="copyright">© 2025 GenAI Interview Prep. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#privacy">Privacy Policy</a>
                        <span className="divider">•</span>
                        <a href="#terms">Terms of Service</a>
                        <span className="divider">•</span>
                        <a href="#cookies">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
