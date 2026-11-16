"use client";

import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import GapSection from "./GapSection";
import StartingPointsSection from "./StartingPointsSection";
import PipelineSection from "./PipelineSection";
import CareerTracksSection from "./CareerTracksSection";
import CourseCatalogSection from "./CourseCatalogSection";
import EngineeringRealitySection from "./EngineeringRealitySection";
import ProofOfWorkSection from "./ProofOfWorkSection";
import EEPSection from "./EEPSection";
import IPPSection from "./IPPSection";
import HiringPipelinesSection from "./HiringPipelinesSection";
import MasterclassesSection from "./MasterclassesSection";
import EnterprisePartnershipsSection from "./EnterprisePartnershipsSection";
import InstitutionalDifferenceSection from "./InstitutionalDifferenceSection";
import TestimonialsSection from "./TestimonialsSection";
import CampusNetworkSection from "./CampusNetworkSection";
import EditorialSection from "./EditorialSection";
import FAQSection from "./FAQSection";
import AloneCTASection from "./AloneCTASection";
import Footer from "./Footer";

export default function HomePageView() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* 1. Sub-nav / Top Segment Header */}
      <TopBar />

      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 3. Hero Section with Live Engine Simulation */}
        <HeroSection />

        {/* 4. Engineering Education Gap (5 Friction vs Solution cards) */}
        <GapSection />

        {/* 5. Target Profile Career Starting Points */}
        <StartingPointsSection />

        {/* 6. Holistic Pipeline Ecosystem (9 Milestones) */}
        <PipelineSection />

        {/* 7. Outcome-Driven Destinations (9 Career Tracks) */}
        <CareerTracksSection />

        {/* 8. Curated Course Catalog with Interactive Filters */}
        <CourseCatalogSection />

        {/* 9. Engineering Reality (Lifecycle & 5 Project Tiers) */}
        <EngineeringRealitySection />

        {/* 10. Proof of Work (Internship Sprints & Lab Photo) */}
        <ProofOfWorkSection />

        {/* 11. The Non-Technical Edge (EEP 8 Soft Skills) */}
        <EEPSection />

        {/* 12. Rigorous Assessment Readiness (IPP 6 Pillars) */}
        <IPPSection />

        {/* 13. Direct Hiring Pipelines (Active Openings) */}
        <HiringPipelinesSection />

        {/* 14. Fast-Track Masterclasses */}
        <MasterclassesSection />

        {/* 15. Enterprise Partnerships Across Sectors */}
        <EnterprisePartnershipsSection />

        {/* 16. The Institutional Difference (6 Core Principles) */}
        <InstitutionalDifferenceSection />

        {/* 17. Verified Candidate Transformations (Real People. Real Progress.) */}
        <TestimonialsSection />

        {/* 18. Physical Campus Network (9 Regional Hubs & Map) */}
        <CampusNetworkSection />

        {/* 19. Editorial Intelligence & Career Guides */}
        <EditorialSection />

        {/* 20. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 21. Your Journey Begins with Clarity (Dark CTA Banner with Career Advisor) */}
        <AloneCTASection />
      </main>

      {/* 22. Dark Corporate Footer */}
      <Footer />
    </div>
  );
}
