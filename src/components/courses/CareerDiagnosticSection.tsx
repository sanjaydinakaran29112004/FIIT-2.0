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
    <section className="bg-[#0B132B] text-white py-14 sm:py-20 my-10 relative overflow-hidden">
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
              Can’t Decide Which Course Fits Your Educational Background?
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-8 max-w-xl">
              Stop guessing between Java, MERN, Cloud, and Data. Take our 7-Step
              Career Diagnostic. We evaluate your current academic degree, logic
              aptitude, and preferred compensation bracket against real hiring
              demands in Chennai, Bengaluru, and remote companies.
            </p>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <button
                onClick={onTakeDiagnostic}
                className="bg-[#0062eb] hover:bg-[#0052cc] text-white px-6 py-3.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition active:scale-[0.98] shadow-md shadow-blue-500/20"
              >
                <span>Take 7-Step Diagnostic Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>Takes less than 4 minutes • Instant Result</span>
              </div>
            </div>
          </div>

          {/* Right Column: Output Card */}
          <div className="w-full lg:max-w-md shrink-0">
            <div className="bg-[#131F37] border border-blue-900/40 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                  SAMPLE DIAGNOSTIC OUTPUT
                </span>
                <span className="bg-[#1C2C52] text-blue-400 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-blue-800/40">
                  Step 7 of 7 Complete
                </span>
              </div>

              {/* Match 1 */}
              <div className="flex items-end justify-between mb-4 pb-4 border-b border-gray-800/80">
                <div>
                  <div className="text-[11px] text-gray-400 font-medium mb-1">
                    Highest Fit Identified
                  </div>
                  <div className="text-base font-bold text-white">
                    Full Stack Java &amp; Cloud Track
                  </div>
                </div>
                <div className="text-2xl font-black text-white tracking-tight">
                  98%
                </div>
              </div>

              {/* Match 2 */}
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="text-[11px] text-gray-400 font-medium mb-1">
                    Secondary Track
                  </div>
                  <div className="text-base font-bold text-white">
                    PowerBI Data Analytics
                  </div>
                </div>
                <div className="text-2xl font-black text-white tracking-tight">
                  84%
                </div>
              </div>

              {/* Bottom matched partners */}
              <div className="pt-3 border-t border-gray-800/80 flex items-center gap-2 text-[11px] text-gray-400 font-medium">
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
