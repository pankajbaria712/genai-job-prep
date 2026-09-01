import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './navbar.scss';
import { useNavigateToInterview } from '../Homepage/logic/useNavigateToInterview';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleGetStarted = useNavigateToInterview();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleInterviewReportClick = () => {
        navigate('/interview');
        setIsMenuOpen(false);
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleHomeClick = () => {
        navigate('/');
        setIsMenuOpen(false);
    };

    const handleFeaturesClick = () => {
        navigate('/features');
        setIsMenuOpen(false);
    }

    const handleAboutClick = () => {
        navigate('/about');
        setIsMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="navbar-logo">
                    <img src="/logo.png" alt="GenAI Interview Prep" className="logo-image" />
                </div>

                {/* Hamburger Menu */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span className={isMenuOpen ? 'active' : ''}></span>
                    <span className={isMenuOpen ? 'active' : ''}></span>
                    <span className={isMenuOpen ? 'active' : ''}></span>
                </div>

                {/* Nav Links */}
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a  className="nav-link" onClick={handleHomeClick}>Home</a>
                    <button className="nav-link" onClick={handleInterviewReportClick}>Interview Report</button>
                    <a className="nav-link" onClick={handleFeaturesClick}>Features</a>
                    <a className="nav-link" onClick={handleAboutClick}>About</a>
                </div>

                {/* CTA Buttons */}
                <div className="nav-buttons">
                    <button className="btn btn-secondary" onClick={handleLoginClick}>Login</button>
                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
