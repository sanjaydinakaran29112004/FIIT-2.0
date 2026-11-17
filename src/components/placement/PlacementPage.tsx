"use client";

import React, { useState } from "react";
import TopBar from "@/components/homepage/TopBar";
import Navbar from "@/components/homepage/Navbar";
import HeroPlacement from "./HeroPlacement";
import PlacementStats from "./PlacementStats";
import HiringPartnersGrid from "./HiringPartnersGrid";
import StudentStories from "./StudentStories";
import PlacementPipeline from "./PlacementPipeline";
import CareerDiagnosticSection from "./CareerDiagnosticSection";
import Footer from "@/components/homepage/Footer";
import Modal from "./Modal";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function PlacementPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"report" | "recruiter" | "diagnostic" | null>(null);

  const handleOpenReport = () => {
    setModalType("report");
    setModalOpen(true);
  };

  const handleOpenRecruiter = () => {
    setModalType("recruiter");
    setModalOpen(true);
  };

  const handleOpenDiagnostic = () => {
    setModalType("diagnostic");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Navbar with "Placement" Active */}
      <TopBar />
      <Navbar />

      {/* 2. Hero Section with Key Verification Stats & Action CTAs */}
      <HeroPlacement
        onDownloadReport={handleOpenReport}
        onRecruiterConnect={handleOpenRecruiter}
      />

      {/* 3. Salary Distribution by Track & Company Tier Split */}
      <PlacementStats />

      {/* 4. Active Corporate Hiring Partners Network (140+ Companies) */}
      <HiringPartnersGrid />

      {/* 5. Recent Verified Graduate Stories & Salary Letters */}
      <StudentStories />

      {/* 6. The 4-Phase Intensive Placement Protocol (IPP) */}
      <PlacementPipeline />

      {/* 7. Algorithmic Path Finder Career Diagnostic Section (Dark Navy) */}
      <CareerDiagnosticSection onTakeDiagnostic={handleOpenDiagnostic} />

      {/* 8. Pre-Footer Call to Action Banner */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFD] rounded-2xl border border-blue-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062eb] shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1528] mb-1">
                  Are You a Hiring Manager or Technical Recruiter?
                </h3>
                <p className="text-xs text-gray-600 max-w-xl">
                  Hire rigorously assessed software engineers, cloud architects, and data analysts with audited GitHub repositories and zero notice period.
                </p>
              </div>
            </div>
            <button
              onClick={handleOpenRecruiter}
              className="bg-[#0B132B] hover:bg-black text-white px-6 py-3 rounded-lg text-xs font-semibold shadow-xs transition active:scale-[0.98] whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Schedule Recruitment Drive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. Global 5-Column Dark Navy Footer */}
      <Footer />

      {/* Interactive Modal (Report Download / Recruiter Drive / Diagnostic Quiz) */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </div>
  );
}
