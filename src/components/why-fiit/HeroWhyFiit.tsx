"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Building2, CheckCircle2, ArrowRight } from "lucide-react";

interface HeroWhyFiitProps {
  onScheduleVisit: () => void;
  onTakeDiagnostic: () => void;
}

export default function HeroWhyFiit({
  onScheduleVisit,
  onTakeDiagnostic,
}: HeroWhyFiitProps) {
  return (
    <section className="bg-gradient-to-b from-[#F2F6FC] via-[#F6F9FD] to-white pt-6 pb-12 border-b border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-900 font-semibold">Why FIIT</span>
        </div>

        {/* Hero Top Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
          {/* Left Text Block */}
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EEFF] text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb]" />
              <span>ENTERPRISE ENGINEERING RIGOR &amp; OUTCOMES</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B1528] tracking-tight leading-[1.15] mb-4">
              WHY FIIT 2.0 IS REDEFINING TECHNICAL EDUCATION IN TAMIL NADU
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed max-w-2xl mb-8">
              Moving beyond passive video tutorials and outdated theory. Discover our
              zero-isolation methodology: unlimited access to 9 high-speed physical developer hubs,
              daily 1-on-1 code reviews by senior mentors, and production capstones verified by 140+ hiring partners across Chennai, Vellore, and Bengaluru tech corridors.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onScheduleVisit}
                className="bg-[#0062eb] hover:bg-[#0052cc] text-white px-6 py-3 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-xs transition active:scale-[0.98]"
              >
                <span>Book a Workstation Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onTakeDiagnostic}
                className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-6 py-3 rounded-lg text-xs font-semibold transition active:scale-[0.98]"
              >
                Take Career Diagnostic Free
              </button>
            </div>
          </div>

          {/* Right Stat Cards */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4 self-start lg:self-center">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[260px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  94.6%
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Lab Code Review Pass Rate
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[260px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <Building2 className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  140+
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Active Hiring Partners in TN &amp; BLR
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Quick Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200/80">
          <div className="flex items-center gap-2.5 text-xs text-gray-700 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0" />
            <span>9 Regional Physical Tech Hubs</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-gray-700 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0" />
            <span>1:1 Weekly Code Mentoring</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-gray-700 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0" />
            <span>Real Production Capstones</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-gray-700 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-[#0062eb] shrink-0" />
            <span>ISO 9001:2015 Accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
}
