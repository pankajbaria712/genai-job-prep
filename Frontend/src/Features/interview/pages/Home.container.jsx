import React, { useState } from 'react';
import InterviewPlanUI from './interviewform';

/**
 * Container Component - Interview Plan Page
 * 
 * This component manages the state and handlers for the Interview Plan form.
 * It acts as a bridge between the UI layer and the application logic.
 * Later, this will connect to hooks, API services, and state management.
 */
const InterviewPlanContainer = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [selfDescription, setSelfDescription] = useState('');
    const [resumeFile, setResumeFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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

        // TODO: Connect to API layer when ready
        setIsLoading(true);
        console.log('Generating interview strategy with:', {
            jobDescription,
            selfDescription,
            resumeFile,
        });

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert('Interview strategy generation initiated!');
        }, 2000);
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
            isLoading={isLoading}
            onGenerateStrategy={handleGenerateStrategy}
        />
    );
};

export default InterviewPlanContainer;
