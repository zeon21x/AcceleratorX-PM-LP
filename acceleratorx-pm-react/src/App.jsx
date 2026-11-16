import { useCallback, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBand from './components/LogoBand';
import TestimonialsSection from './components/TestimonialsSection';
import OverviewSection from './components/OverviewSection';
import BenefitsSection from './components/BenefitsSection';
import ApproachSection from './components/ApproachSection';
import CurriculumSection from './components/CurriculumSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceVideoSection from './components/ExperienceVideoSection';
import ToolsSection from './components/ToolsSection';
import LiveLearningSection from './components/LiveLearningSection';
import MentorsSection from './components/MentorsSection';
import MentorshipSection from './components/MentorshipSection';
import CareerSection from './components/CareerSection';
import CertificationSection from './components/CertificationSection';
import InvestmentSection from './components/InvestmentSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import ScholarshipBar from './components/ScholarshipBar';
import EnquiryModal from './components/EnquiryModal';
import ThankYouModal from './components/ThankYouModal';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [pendingBrochureUrl, setPendingBrochureUrl] = useState(null);
  const lastTriggerRef = useRef(null);

  const openEnquiryModal = useCallback((triggerEl) => {
    lastTriggerRef.current = triggerEl || document.activeElement;
    setPendingBrochureUrl(null);
    setIsEnquiryOpen(true);
  }, []);

  const openBrochureModal = useCallback((brochureUrl, triggerEl) => {
    lastTriggerRef.current = triggerEl || document.activeElement;
    setPendingBrochureUrl(brochureUrl);
    setIsEnquiryOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsEnquiryOpen(false);
    setPendingBrochureUrl(null);
    if (lastTriggerRef.current && typeof lastTriggerRef.current.focus === 'function') {
      lastTriggerRef.current.focus();
    }
  }, []);

  const handleFormSuccess = useCallback(() => {
    setIsEnquiryOpen(false);

    if (pendingBrochureUrl) {
      const url = pendingBrochureUrl;
      setPendingBrochureUrl(null);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'AcceleratorX_AI_Product_Management_Brochure.pdf');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.setTimeout(() => {
        setIsThankYouOpen(true);
      }, 350);
    } else {
      setIsThankYouOpen(true);
    }
  }, [pendingBrochureUrl]);

  const closeThankYou = useCallback(() => {
    setIsThankYouOpen(false);
  }, []);

  const handleBackToProgram = useCallback(() => {
    setIsThankYouOpen(false);
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <ScholarshipBar onOpenEnquiry={openEnquiryModal} />
      <Navbar onOpenEnquiry={openEnquiryModal} />

      <main id="top">
        <Hero onFormSuccess={handleFormSuccess} />
        <LogoBand />
        <TestimonialsSection title="What Our Learners Say" early />
        <OverviewSection onOpenEnquiry={openEnquiryModal} />
        <BenefitsSection onOpenEnquiry={openEnquiryModal} />
        <ApproachSection onOpenEnquiry={openEnquiryModal} />
        <CurriculumSection onOpenBrochureModal={openBrochureModal} />
        <ProjectsSection onOpenEnquiry={openEnquiryModal} />
        <ExperienceVideoSection onOpenEnquiry={openEnquiryModal} />
        <ToolsSection onOpenEnquiry={openEnquiryModal} />
        <LiveLearningSection onOpenEnquiry={openEnquiryModal} />
        <MentorsSection onOpenEnquiry={openEnquiryModal} />
        <MentorshipSection onOpenEnquiry={openEnquiryModal} />
        <CareerSection onOpenEnquiry={openEnquiryModal} />
        <CertificationSection onOpenEnquiry={openEnquiryModal} />
        <TestimonialsSection title="Success Stories" onOpenEnquiry={openEnquiryModal} />
        <InvestmentSection onOpenEnquiry={openEnquiryModal} />
        <FaqSection onOpenEnquiry={openEnquiryModal} />
        <FinalCtaSection onOpenEnquiry={openEnquiryModal} />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={closeEnquiryModal}
        onSubmitSuccess={handleFormSuccess}
      />

      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={closeThankYou}
        onBackToProgram={handleBackToProgram}
      />
    </>
  );
}
