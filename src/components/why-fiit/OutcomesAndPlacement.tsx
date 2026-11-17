"use client";

import React from "react";
import { TrendingUp, Users, Building, Award, CheckCircle2, ArrowRight } from "lucide-react";

interface OutcomesAndPlacementProps {
  onScheduleVisit: () => void;
}

export default function OutcomesAndPlacement({
  onScheduleVisit,
}: OutcomesAndPlacementProps) {
  const metrics = [
    {
      value: "94.6%",
      label: "Code Review Clearance Rate",
      subtext: "First-attempt pass rate on production capstone code reviews",
    },
    {
      value: "3.8x",
      label: "Average CTC Multiplier",
      subtext: "For career pivoters, freshers, and non-CS degree holders",
    },
    {
      value: "140+",
      label: "Active Hiring Partners",
      subtext: "Direct recruitment pipelines across Chennai & Bengaluru",
    },
    {
      value: "100%",
      label: "Hands-on Lab Verification",
      subtext: "Zero automated multiple-choice tests; 100% terminal & Git commits",
    },
  ];

  const partners = [
    "Zoho Corporation",
    "Freshworks",
    "Cognizant",
    "Tata Consultancy Services",
    "Infosys",
    "Wipro Digital",
    "Kaar Technologies",
    "LatentView Analytics",
    "Thoughtworks",
    "Hexaware",
    "Mindtree",
    "Virtusa",
    "Presidio",
    "Chargebee",
  ];

  const phases = [
    {
      step: "Phase 01",
      title: "Production Git Commit Audits",
      desc: "Every feature you build is committed to GitHub with clean conventional commits, automated linting, unit test coverage, and strict branch protection.",
    },
    {
      step: "Phase 02",
      title: "Live Architectural Defense",
      desc: "Defend your microservices or cloud infrastructure in front of actual tech leads from Chennai tech corridors during live capstone presentations.",
    },
    {
      step: "Phase 03",
      title: "IPP Mock Technical Interviews",
      desc: "Three rounds of mock interviews covering Data Structures, System Design, behavioral scenarios, and live terminal debugging drills.",
    },
    {
      step: "Phase 04",
      title: "Direct Partner Drives",
      desc: "Skip generic resume black holes. We schedule direct interview slots with hiring managers who already know the caliber of FIIT graduates.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            <TrendingUp className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>VERIFIABLE CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-4">
            The Industry Placement Pipeline (IPP) Built on Verified Proof of Work
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Hiring managers don&apos;t care about certificates. They care about production-ready code.
            Here is how our structured placement ecosystem works.
          </p>
        </div>

        {/* 4 Big Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFD] rounded-2xl border border-gray-200/80 p-6 text-center hover:border-blue-200 transition shadow-xs"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#0062eb] tracking-tight mb-2">
                {m.value}
              </div>
              <div className="text-xs font-bold text-gray-900 mb-1.5">
                {m.label}
              </div>
              <div className="text-[11px] text-gray-500 leading-relaxed">
                {m.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Phases Pipeline */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-gray-900 mb-8 text-center sm:text-left">
            The 4-Stage Interview Preparation &amp; Placement Engine
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 relative hover:shadow-md transition-shadow"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062eb] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  {p.step}
                </span>
                <h4 className="text-sm font-bold text-gray-900 mt-3 mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Hiring Partners Cloud */}
        <div className="bg-[#F8FAFD] rounded-2xl border border-gray-200/90 p-8 text-center">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">
            WHERE FIIT GRADUATES WORK ACROSS CHENNAI &amp; BENGALURU
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-6">
            {partners.map((partner) => (
              <span
                key={partner}
                className="bg-white border border-gray-200/80 text-gray-800 text-xs font-semibold px-4 py-2 rounded-lg shadow-2xs hover:border-[#0062eb] transition"
              >
                {partner}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            + Over 120+ funded fast-growing startups and mid-market enterprise teams in South India.
          </p>
        </div>
      </div>
    </section>
  );
}
