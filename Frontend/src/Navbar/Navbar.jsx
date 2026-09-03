import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import './navbar.scss';
import { useNavigateToInterview } from '../Homepage/logic/useNavigateToInterview';
import { useAuth } from '../Features/Authentication/hooks/useAuth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleGetStarted = useNavigateToInterview();
    const { user, handleLogout } = useAuth();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileMenuRef = useRef(null);

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

    const handleProfileClick = () => {
        navigate('/profile');
        setIsProfileOpen(false);
    };

    const handleLogoutClick = async () => {
        setIsProfileOpen(false);
        await handleLogout();
        navigate('/login');
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') setIsProfileOpen(false);
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleHomeClick = () => {
        navigate('/');
        setIsMenuOpen(false);
    };

    const handleFeaturesClick = () => {
        navigate('/features');
        setIsMenuOpen(false);
    }

    const handleReportsClick = () => {
        navigate('/reports');
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
                    <button className="nav-link" onClick={handleReportsClick}>Your Reports</button>
                    <a className="nav-link" onClick={handleFeaturesClick}>Features</a>
                    <a className="nav-link" onClick={handleAboutClick}>About</a>
                </div>

                {/* CTA Buttons */}
                <div className="nav-buttons">
                    {!user && <button className="btn btn-secondary" onClick={handleLoginClick}>Login</button>}
                    <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
                    {user && (
                        <div className="profile-menu" ref={profileMenuRef}>
                            <button
                                type="button"
                                className="profile-button"
                                onClick={() => setIsProfileOpen((isOpen) => !isOpen)}
                                aria-label="Open your profile menu"
                                aria-expanded={isProfileOpen}
                                aria-haspopup="menu"
                                title={`Signed in as ${user.username || user.email || 'user'}`}
                            >
                                <span className="profile-icon" aria-hidden="true" />
                            </button>
                            {isProfileOpen && (
                                <div className="profile-dropdown" role="menu">
                                    <div className="profile-summary">
                                        <span className="profile-summary-icon" aria-hidden="true">&#9786;</span>
                                        <div>
                                            <strong>{user.username || 'Your account'}</strong>
                                            <span>{user.email || ''}</span>
                                        </div>
                                    </div>
                                    <div className="profile-menu-divider" />
                                    <button type="button" className="profile-menu-item" onClick={handleProfileClick} role="menuitem">
                                        <span aria-hidden="true">&#9673;</span>
                                        View profile
                                    </button>
                                    <button type="button" className="profile-menu-item logout-item" onClick={handleLogoutClick} role="menuitem">
                                        <span aria-hidden="true">&#10140;</span>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
