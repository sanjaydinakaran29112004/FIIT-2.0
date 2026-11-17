"use client";

import React from "react";
import { IPP_PHASES } from "@/data/placements";
import { Compass, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function PlacementPipeline() {
  return (
    <section className="py-14 bg-[#F8FAFD] border-y border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>THE 4-PHASE PLACEMENT ENGINE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
            How FIIT Prepares You for Tier-1 Technical Rounds
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Our intensive placement protocol (IPP) bridges the massive gap between academic theory and high-bar engineering interviews.
          </p>
        </div>

        {/* 4 Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IPP_PHASES.map((p) => (
            <div
              key={p.phase}
              className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-[#0062eb] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    0{p.phase}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400">
                    {p.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {p.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 space-y-1.5 text-xs text-gray-700">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                  KEY DELIVERABLES
                </div>
                {p.keyOutcomes.map((k, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-snug">{k}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
