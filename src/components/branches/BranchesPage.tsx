"use client";

import React, { useState, useMemo } from "react";
import TopBar from "@/components/homepage/TopBar";
import Navbar from "@/components/homepage/Navbar";
import HeroBranches from "./HeroBranches";
import BranchCard from "./BranchCard";
import LabAmenities from "./LabAmenities";
import CareerDiagnosticSection from "./CareerDiagnosticSection";
import Footer from "@/components/homepage/Footer";
import Modal from "./Modal";
import { BRANCHES, Branch } from "@/data/branches";
import { ShieldCheck, ArrowRight, RotateCcw } from "lucide-react";

export default function BranchesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"visit" | "call" | "diagnostic" | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);

  // Filter branches based on search query and selected region
  const filteredBranches = useMemo(() => {
    return BRANCHES.filter((branch) => {
      // Region match
      const matchesRegion =
        selectedRegion === "All Regions" || branch.region === selectedRegion;

      // Query match (name, landmark, specialty, address, hardware)
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        branch.name.toLowerCase().includes(q) ||
        branch.landmark.toLowerCase().includes(q) ||
        branch.address.toLowerCase().includes(q) ||
        branch.specialty.toLowerCase().includes(q) ||
        branch.hardware.some((h) => h.toLowerCase().includes(q));

      return matchesRegion && matchesQuery;
    });
  }, [searchQuery, selectedRegion]);

  const handleBookVisit = (branch: Branch) => {
    setSelectedBranch(branch);
    setModalType("visit");
    setModalOpen(true);
  };

  const handleCallBranch = (branch: Branch) => {
    setSelectedBranch(branch);
    setModalType("call");
    setModalOpen(true);
  };

  const handleTakeDiagnostic = () => {
    setSelectedBranch(null);
    setModalType("diagnostic");
    setModalOpen(true);
  };

  const handleGeneralTour = () => {
    setSelectedBranch(null);
    setModalType("visit");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Navbar with "Branches" Active */}
      <TopBar />
      <Navbar />

      {/* 2. Hero Section with Search, Stat Cards, and Region Tabs */}
      <HeroBranches
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        totalCount={BRANCHES.length}
        filteredCount={filteredBranches.length}
      />

      {/* 3. 9 Branches Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBranches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBranches.map((branch) => (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  onBookVisit={handleBookVisit}
                  onCallBranch={handleCallBranch}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#F8FAFD] rounded-2xl border border-gray-200">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                No developer hubs found matching your criteria
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Try searching for another area, district or landmark, or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedRegion("All Regions");
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

      {/* 4. Common Lab Amenities & Infrastructure Details */}
      <LabAmenities />

      {/* 5. Algorithmic Path Finder Career Diagnostic Section (Dark Navy) */}
      <CareerDiagnosticSection onTakeDiagnostic={handleTakeDiagnostic} />

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
                  Want to Experience the Difference in Person?
                </h3>
                <p className="text-xs text-gray-600 max-w-xl">
                  Walk into any of our 9 developer hubs across Chennai, Vellore, or Chengalpattu. Sit at a workstation, meet full-time mentors, and review actual student pull requests.
                </p>
              </div>
            </div>
            <button
              onClick={handleGeneralTour}
              className="bg-[#0B132B] hover:bg-black text-white px-6 py-3 rounded-lg text-xs font-semibold shadow-xs transition active:scale-[0.98] whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Schedule a Branch Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Global 5-Column Dark Navy Footer */}
      <Footer />

      {/* Interactive Modal (Visit Booking, Call Hub, Diagnostic Quiz) */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        branch={selectedBranch}
      />
    </div>
  );
}
