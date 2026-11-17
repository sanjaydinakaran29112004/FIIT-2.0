"use client";

import React, { useState } from "react";
import { CAREER_PATHS, CareerPath } from "@/data/careerPaths";
import { TrendingUp, Award, Briefcase, MapPin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function CareerProgressionLadder() {
  const [activePathId, setActivePathId] = useState(CAREER_PATHS[0].id);

  const activePath = CAREER_PATHS.find((p) => p.id === activePathId) || CAREER_PATHS[0];

  return (
    <section className="py-12 bg-[#F8FAFD] border-y border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>5-YEAR COMPENSATION &amp; PROMOTION TRAJECTORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
            How Your Career &amp; Salary Expands Over 5 Years
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mt-1">
            Don&apos;t settle for dead-end service desk stagnation. See how mastering a calibrated engineering track accelerates your promotions from junior engineer to principal architect.
          </p>
        </div>

        {/* Track Switcher Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6">
          {CAREER_PATHS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePathId(p.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-2 ${
                activePathId === p.id
                  ? "bg-[#0B1528] text-white shadow-md shadow-gray-900/10 scale-[1.02]"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span>{p.role.split("&")[0]}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                activePathId === p.id ? "bg-blue-500 text-white" : "bg-blue-50 text-[#0062eb]"
              }`}>
                {p.growthMultiplier}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Track Detailed Trajectory Card */}
        <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-xs">
          {/* Top metadata row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#0062eb] border border-blue-100">
                  {activePath.discipline}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>Velocity: {activePath.growthMultiplier}</span>
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">
                {activePath.role}
              </h3>
            </div>

            <div className="bg-[#F8FAFD] rounded-xl p-3 border border-gray-200/70 text-xs flex items-center gap-3 self-start md:self-auto">
              <MapPin className="w-4 h-4 text-[#0062eb] shrink-0" />
              <div>
                <div className="text-[10px] font-bold uppercase text-gray-400">REGIONAL TN RECRUITMENT CORRIDOR</div>
                <div className="font-bold text-gray-800 text-[11px]">{activePath.tnEcosystemDemand}</div>
              </div>
            </div>
          </div>

          {/* 4 Progression Steps (Ladder) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {activePath.progressionLadder.map((stage, idx) => (
              <div
                key={idx}
                className="bg-[#FAFCFF] rounded-2xl p-5 border border-blue-100/80 flex flex-col justify-between hover:border-[#0062eb] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#0062eb]">
                      {stage.experience}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100/60 text-blue-800">
                      Level {idx + 1}
                    </span>
                  </div>

                  <div className="text-sm font-black text-gray-900 mb-1 leading-snug">
                    {stage.designation}
                  </div>

                  <div className="text-base font-extrabold text-emerald-600 mb-3">
                    {stage.expectedCTC}
                  </div>

                  <p className="text-[11px] text-gray-600 leading-relaxed mb-3">
                    {stage.responsibilities}
                  </p>
                </div>

                <div className="pt-2 border-t border-blue-50 text-[10px] font-semibold text-gray-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>Calibrated with TN GCCs</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Day-in-the-Life Callout */}
          <div className="bg-[#0B1528] rounded-2xl p-5 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                DAY-IN-THE-LIFE AT ENTERPRISE GCCs &amp; UNICORNS
              </span>
              <p className="text-gray-300 leading-relaxed text-xs max-w-3xl">
                {activePath.dayInTheLife}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-[10px] font-bold text-gray-400 uppercase">PROGRAM DURATION</div>
              <div className="text-sm font-extrabold text-white">{activePath.duration} ({activePath.labHours})</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
