"use client";

import React, { useState, useMemo } from "react";
import TopBar from "@/components/homepage/TopBar";
import Navbar from "@/components/homepage/Navbar";
import HeroCareerPaths from "./HeroCareerPaths";
import CareerProgressionLadder from "./CareerProgressionLadder";
import CareerPathCard from "./CareerPathCard";
import CareerDiagnosticSection from "./CareerDiagnosticSection";
import Footer from "@/components/homepage/Footer";
import Modal from "./Modal";
import { CAREER_PATHS, CareerPath } from "@/data/careerPaths";
import { ShieldCheck, ArrowRight, RotateCcw } from "lucide-react";

export default function CareerPathsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("All Tracks");

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"roadmap" | "enroll" | "diagnostic" | null>(null);
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);

  // Filter career paths based on query and discipline
  const filteredPaths = useMemo(() => {
    return CAREER_PATHS.filter((path) => {
      const matchesDiscipline =
        selectedDiscipline === "All Tracks" || path.discipline === selectedDiscipline;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        path.role.toLowerCase().includes(q) ||
        path.description.toLowerCase().includes(q) ||
        path.candidatePersona.toLowerCase().includes(q) ||
        path.techStack.some((t) => t.toLowerCase().includes(q)) ||
        path.hiringPartners.some((p) => p.toLowerCase().includes(q));

      return matchesDiscipline && matchesQuery;
    });
  }, [searchQuery, selectedDiscipline]);

  const handleSelectRoadmap = (path: CareerPath) => {
    setSelectedPath(path);
    setModalType("roadmap");
    setModalOpen(true);
  };

  const handleApplyTrack = (path: CareerPath) => {
    setSelectedPath(path);
    setModalType("enroll");
    setModalOpen(true);
  };

  const handleDiagnostic = () => {
    setSelectedPath(null);
    setModalType("diagnostic");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Navbar with "Career Paths" Active */}
      <TopBar />
      <Navbar />

      {/* 2. Hero Section with Search, Stats, and Discipline Tabs */}
      <HeroCareerPaths
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedDiscipline={selectedDiscipline}
        setSelectedDiscipline={setSelectedDiscipline}
        totalCount={CAREER_PATHS.length}
        filteredCount={filteredPaths.length}
      />

      {/* 3. Interactive 5-Year Compensation & Promotion Curve Visualizer */}
      <CareerProgressionLadder />

      {/* 4. Career Paths Tracks Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0B1528] tracking-tight">
                {selectedDiscipline === "All Tracks"
                  ? "Calibrated Engineering Roadmaps (Q2 2025 Intake)"
                  : `${selectedDiscipline} Specialization Paths`}
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Each track includes physical lab workstation access, live mentor code reviews, and direct interview routing.
              </p>
            </div>
            <span className="text-xs font-semibold text-gray-500 hidden sm:inline-block">
              Showing {filteredPaths.length} of {CAREER_PATHS.length} Tracks
            </span>
          </div>

          {filteredPaths.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPaths.map((path) => (
                <CareerPathCard
                  key={path.id}
                  careerPath={path}
                  onSelectRoadmap={handleSelectRoadmap}
                  onApplyTrack={handleApplyTrack}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#F8FAFD] rounded-2xl border border-gray-200">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                No career tracks found matching your query
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Try searching for &apos;Java&apos;, &apos;Cloud&apos;, &apos;SRE&apos;, &apos;AI&apos;, &apos;Non-CS&apos;, or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDiscipline("All Tracks");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0062eb] text-white text-xs font-semibold hover:bg-[#0052cc] transition shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Algorithmic Path Finder Career Diagnostic Section (Dark Navy) */}
      <CareerDiagnosticSection onTakeDiagnostic={handleDiagnostic} />

      {/* 6. Pre-Footer Call to Action Banner */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFD] rounded-2xl border border-blue-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062eb] shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1528] mb-1">
                  Need Help Deciding on the Right Tech Track?
                </h3>
                <p className="text-xs text-gray-600 max-w-xl">
                  Schedule a 1-on-1 career mapping session with a principal engineer at any of our 9 Tamil Nadu developer hubs.
                </p>
              </div>
            </div>
            <button
              onClick={handleDiagnostic}
              className="bg-[#0B132B] hover:bg-black text-white px-6 py-3 rounded-lg text-xs font-semibold shadow-xs transition active:scale-[0.98] whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Take Career Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Global 5-Column Dark Navy Footer */}
      <Footer />

      {/* Interactive Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        careerPath={selectedPath}
      />
    </div>
  );
}
