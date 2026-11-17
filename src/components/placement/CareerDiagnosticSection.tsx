"use client";

import React from "react";
import { Compass, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

interface CareerDiagnosticSectionProps {
  onTakeDiagnostic: () => void;
}

export default function CareerDiagnosticSection({
  onTakeDiagnostic,
}: CareerDiagnosticSectionProps) {
  return (
    <section className="bg-[#0B132B] text-white py-14 sm:py-20 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column */}
          <div className="max-w-2xl">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#182647] text-blue-400 text-[11px] font-bold tracking-wider uppercase mb-5 border border-blue-800/30">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              <span>ALGORITHMIC PATH FINDER</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.2] mb-4">
              Can’t Decide Which High-Placement Course Fits You?
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8 max-w-xl">
              Stop guessing between Java, MERN, Cloud, and Data. Take our 7-Step
              Career Diagnostic. We evaluate your current academic degree, logic
              aptitude, and preferred compensation bracket against real hiring
              demands in Chennai, Bengaluru, and remote companies.
            </p>

            {/* CTA Button + Micro text */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onTakeDiagnostic}
                className="bg-[#0062eb] hover:bg-[#0052cc] text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-500/20 transition active:scale-[0.98] flex items-center gap-2"
              >
                <span>Take 7-Step Diagnostic Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Takes less than 4 minutes • Instant Result</span>
              </div>
            </div>
          </div>

          {/* Right Column (Diagnostic Card Preview) */}
          <div className="w-full lg:w-auto shrink-0 max-w-md bg-[#111C38] border border-blue-900/50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-900/40">
              <span className="text-[10px] font-bold tracking-wider uppercase text-blue-400">
                SAMPLE DIAGNOSTIC OUTPUT
              </span>
              <span className="text-[10px] font-bold text-gray-400">
                Step 7 of 7 Complete
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-[#182647] p-4 rounded-xl border border-blue-800/40">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold text-gray-300">
                    Highest Fit Identified
                  </span>
                  <span className="text-base font-black text-blue-400">98%</span>
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  Full Stack Java &amp; Cloud Track
                </div>
                <div className="w-full bg-[#0B132B] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#0062eb] h-full rounded-full w-[98%]" />
                </div>
              </div>

              <div className="bg-[#182647] p-4 rounded-xl border border-blue-800/40">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold text-gray-300">
                    Secondary Track
                  </span>
                  <span className="text-base font-black text-gray-300">84%</span>
                </div>
                <div className="text-sm font-bold text-gray-200 mb-1">
                  PowerBI Data Analytics
                </div>
                <div className="w-full bg-[#0B132B] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gray-400 h-full rounded-full w-[84%]" />
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Matched with 140+ active hiring partners in TN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
