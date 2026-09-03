import { useState } from 'react';
import { useNavigate } from 'react-router';
import InterviewPlanUI from './interviewform';
import { useInterview } from '../hooks/useInterview';

/**
 * Container Component - Interview Plan Page
 * 
 * This component manages the state and handlers for the Interview Plan form.
 * It acts as a bridge between the UI layer and the application logic.
 * Later, this will connect to hooks, API services, and state management.
 */
const InterviewPlanContainer = () => {
    const navigate = useNavigate();
    const { loading, generateReport } = useInterview();
    const [jobDescription, setJobDescription] = useState('');
    const [selfDescription, setSelfDescription] = useState('');
    const [resumeFile, setResumeFile] = useState(null);

    // Handle job description input change
    const handleJobDescriptionChange = (e) => {
        const value = e.target.value;
        if (value.length <= 5000) {
            setJobDescription(value);
        }
    };

    // Handle self description input change
    const handleSelfDescriptionChange = (e) => {
        const value = e.target.value;
        setSelfDescription(value);
    };

    // Handle resume file selection
    const handleResumeChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            // Validate file size (5MB max)
            if (file.size <= 5 * 1024 * 1024) {
                setResumeFile(file);
            } else {
                alert('File size must be less than 5MB');
            }
        }
    };

    // Handle generate strategy button click
    const handleGenerateStrategy = async () => {
        // Validate form
        if (!jobDescription.trim()) {
            alert('Please enter a job description');
            return;
        }

        if (!resumeFile && !selfDescription.trim()) {
            alert('Please upload a resume or provide a self description');
            return;
        }

        const report = await generateReport({ resumeFile, selfDescription, jobDescription });
        navigate(`/interview/report/${report._id}`);
    };

    return (
        <InterviewPlanUI
            jobDescription={jobDescription}
            onJobDescriptionChange={handleJobDescriptionChange}
            jobDescCharCount={jobDescription.length}
            selfDescription={selfDescription}
            onSelfDescriptionChange={handleSelfDescriptionChange}
            resumeFile={resumeFile}
            onResumeChange={handleResumeChange}
            isLoading={loading}
            onGenerateStrategy={handleGenerateStrategy}
        />
    );
};

export default InterviewPlanContainer;
