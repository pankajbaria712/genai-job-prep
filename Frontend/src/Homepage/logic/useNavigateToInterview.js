import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Features/Authentication/auth.context';

/**
 * Custom hook to handle navigation for CTA buttons
 * If user is logged in, redirects to /interview (interview form)
 * Otherwise redirects to /register (sign up page)
 * 
 * @returns {Function} Function to call on CTA button click
 */
export const useNavigateToInterview = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleNavigate = () => {
        if (user) {
            // User is logged in, go to interview form
            navigate('/interview');
        } else {
            // User not logged in, go to register
            navigate('/register');
        }
    };

    return handleNavigate;
};
