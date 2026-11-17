"use client";

import React from "react";
import Link from "next/link";
import { Award, TrendingUp, Users, Download, Building, CheckCircle2 } from "lucide-react";
import { PLACEMENT_STATS } from "@/data/placements";

interface HeroPlacementProps {
  onDownloadReport: () => void;
  onRecruiterConnect: () => void;
}

export default function HeroPlacement({
  onDownloadReport,
  onRecruiterConnect,
}: HeroPlacementProps) {
  return (
    <section className="bg-gradient-to-b from-[#F2F6FC] via-[#F6F9FD] to-white pt-6 pb-12 border-b border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-900 font-semibold">Placement</span>
        </div>

        {/* Hero Top Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          {/* Left Text */}
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EEFF] text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb]" />
              <span>AUDITED RECRUITMENT &amp; SALARY VERIFICATION REPORT 2024-2025</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B1528] tracking-tight leading-[1.15] mb-4">
              TRANSPARENT, VERIFIABLE CAREER OUTCOMES ACROSS TAMIL NADU
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed max-w-2xl mb-6">
              No inflated claims. Review authenticated compensation packages up to 18.4 LPA, verified offer letters,
              and active hiring pipelines connecting our 9 physical developer hubs with 140+ tech companies
              across Chennai, Coimbatore, and Bengaluru.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onDownloadReport}
                className="bg-[#0062eb] hover:bg-[#0052cc] text-white px-5 py-3 rounded-xl font-bold text-xs tracking-wide shadow-xs transition active:scale-[0.98] flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Verified Placement Report</span>
              </button>
              <button
                onClick={onRecruiterConnect}
                className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-5 py-3 rounded-xl font-semibold text-xs transition active:scale-[0.98] flex items-center gap-2"
              >
                <Building className="w-4 h-4 text-gray-500" />
                <span>Hire From FIIT (Corporate Recruiter)</span>
              </button>
            </div>
          </div>

          {/* Right Stat Cards */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4 self-start lg:self-center">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <TrendingUp className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  {PLACEMENT_STATS.highestPackage}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Highest Domestic Package
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <Award className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  {PLACEMENT_STATS.placementRate}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Audited Placement Success Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quick Stat Micro Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-gray-200/70 text-xs">
          <div className="bg-white rounded-xl p-3.5 border border-gray-200/80">
            <span className="text-[10px] uppercase font-bold text-gray-400">MEDIAN SALARY</span>
            <div className="text-base font-extrabold text-gray-900 mt-0.5">{PLACEMENT_STATS.medianPackage}</div>
          </div>
          <div className="bg-white rounded-xl p-3.5 border border-gray-200/80">
            <span className="text-[10px] uppercase font-bold text-gray-400">TOTAL OFFERS EXTENDED</span>
            <div className="text-base font-extrabold text-[#0062eb] mt-0.5">{PLACEMENT_STATS.totalOffers}</div>
          </div>
          <div className="bg-white rounded-xl p-3.5 border border-gray-200/80">
            <span className="text-[10px] uppercase font-bold text-gray-400">HIRING PARTNERS</span>
            <div className="text-base font-extrabold text-gray-900 mt-0.5">{PLACEMENT_STATS.activePartners}</div>
          </div>
          <div className="bg-white rounded-xl p-3.5 border border-gray-200/80">
            <span className="text-[10px] uppercase font-bold text-gray-400">AVG POST-COHORT HIRING</span>
            <div className="text-base font-extrabold text-emerald-600 mt-0.5">{PLACEMENT_STATS.averageHiringDays}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
