"use client";

import React, { useState } from "react";
import TopBar from "@/components/homepage/TopBar";
import Navbar from "@/components/homepage/Navbar";
import HeroWhyFiit from "./HeroWhyFiit";
import ComparisonTable from "./ComparisonTable";
import FourPillars from "./FourPillars";
import HubsShowcase from "./HubsShowcase";
import OutcomesAndPlacement from "./OutcomesAndPlacement";
import CareerDiagnosticSection from "./CareerDiagnosticSection";
import Testimonials from "./Testimonials";
import Footer from "@/components/homepage/Footer";
import Modal from "./Modal";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function WhyFiitPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"visit" | "diagnostic" | "advisor" | null>(null);

  const handleOpenVisit = () => {
    setModalType("visit");
    setModalOpen(true);
  };

  const handleOpenDiagnostic = () => {
    setModalType("diagnostic");
    setModalOpen(true);
  };

  const handleOpenAdvisor = () => {
    setModalType("advisor");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Navbar with "Why FIIT" Active */}
      <TopBar />
      <Navbar />

      {/* 2. Hero Section */}
      <HeroWhyFiit
        onScheduleVisit={handleOpenVisit}
        onTakeDiagnostic={handleOpenDiagnostic}
      />

      {/* 3. Honest Comparison: FIIT vs Bootcamps vs College */}
      <ComparisonTable />

      {/* 4. The 4 Core Engineering Pillars */}
      <FourPillars />

      {/* 5. 9 Regional Tech Hubs Showcase */}
      <HubsShowcase onScheduleVisit={handleOpenVisit} />

      {/* 6. Verifiable Outcomes & Corporate Placement Pipeline */}
      <OutcomesAndPlacement onScheduleVisit={handleOpenVisit} />

      {/* 7. Dark Navy Career Diagnostic Section */}
      <CareerDiagnosticSection onTakeDiagnostic={handleOpenDiagnostic} />

      {/* 8. Student Case Studies & Testimonials */}
      <Testimonials />

      {/* 9. Pre-Footer Call to Action Banner */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFD] rounded-2xl border border-blue-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062eb] shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1528] mb-1">
                  Want to Experience the Difference in Person?
                </h3>
                <p className="text-xs text-gray-600 max-w-xl">
                  Walk into any of our 9 developer hubs across Chennai, Vellore, or Chengalpattu. Sit at a workstation, meet full-time mentors, and review actual student pull requests.
                </p>
              </div>
            </div>
            <button
              onClick={handleOpenVisit}
              className="bg-[#0B132B] hover:bg-black text-white px-6 py-3 rounded-lg text-xs font-semibold shadow-xs transition active:scale-[0.98] whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Schedule a Branch Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. Global 5-Column Dark Navy Footer */}
      <Footer />

      {/* Interactive Booking & Diagnostic Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </div>
  );
}
