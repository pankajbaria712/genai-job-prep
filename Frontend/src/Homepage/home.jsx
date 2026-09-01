import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedIn from './components/FeaturedIn';
import HowItWorks from './components/HowItWorks';
import KeyFeatures from './components/KeyFeatures';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from '../Footer/Footer';
import './styles/home.scss';

/**
 * Homepage Component - Main Landing Page
 * 
 * Displays the complete homepage with all sections:
 * - Navbar, Hero, Featured In, How It Works, Features
 * - Testimonials, Statistics, Pricing, FAQ, CTA, Footer
 */
const Homepage = () => {
    return (
        <div className="homepage">
            <Navbar />
            <HeroSection />
            <FeaturedIn />
            <HowItWorks />
            <KeyFeatures />
            <Testimonials />
            <Statistics />
            <Pricing />
            <FAQ />
            <CTASection />
            <Footer />
        </div>
    );
};

export default Homepage;
