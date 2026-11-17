"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [sliderPos, setSliderPos] = useState(82);

  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-24 bg-[#f0f6ff]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-blue-100/80 border border-blue-200/90 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold text-blue-700 tracking-wider uppercase">
                DON&apos;T JUST LEARN A SKILL. BUILD A CAREER.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#0f172a] leading-[1.08] tracking-tight">
              YOUR CAREER SHOULD <br />
              NOT BE A GUESS.
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Discover the right career path. Build practical skills. Work on real
              projects. Gain experience. Become career-ready with accredited
              industry engineering rigor.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const target = document.getElementById("career-advisor");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
              >
                <span>FIND MY CAREER PATH</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const target = document.getElementById("courses-catalog");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm"
              >
                EXPLORE PROGRAMS
              </button>
            </div>

            {/* Bottom 3 Stats Box */}
            <div className="pt-6">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 grid grid-cols-3 gap-4 shadow-sm">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    9 Branches
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Across Tamil Nadu
                  </div>
                </div>

                <div className="border-l border-slate-200/80 pl-4">
                  <div className="text-xl sm:text-2xl font-black text-blue-600 tracking-tight">
                    10,000+
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Graduates Placed
                  </div>
                </div>

                <div className="border-l border-slate-200/80 pl-4">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    100% Practical
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    Project-Driven Labs
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dark Live Simulation Terminal Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-3xl blur-xl opacity-70" />

            <div className="relative bg-[#0d1526] border border-slate-800/90 rounded-2xl shadow-2xl p-6 text-white">
              
              {/* Window Controls Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    career-engine-v2.fiit.in
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-semibold tracking-wider">
                  <Sparkles className="w-2.5 h-2.5" />
                  LIVE SIMULATION
                </div>
              </div>

              {/* Benchmark Summary */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    CANDIDATE BENCHMARK
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white mt-0.5">
                    Full Stack Cloud Architect
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-emerald-400 tracking-tight">
                    94.2%
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    Job-Ready Index
                  </div>
                </div>
              </div>

              {/* Verified Checklist Items */}
              <div className="space-y-2.5 my-5">
                <div className="bg-[#131e36] border border-slate-700/60 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-medium text-slate-200">
                      Core Architecture (Java &amp; Spring Boot)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    COMPLETE
                  </span>
                </div>

                <div className="bg-[#131e36] border border-slate-700/60 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-xs sm:text-[13px] font-medium text-slate-200">
                      Microservices &amp; AWS ECS Deployment
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    VALIDATED
                  </span>
                </div>

                <div className="bg-[#131e36] border border-slate-700/60 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Loader2 className="w-4 h-4 text-amber-400 animate-spin shrink-0" />
                    <span className="text-xs sm:text-[13px] font-medium text-slate-200">
                      Capstone: Distributed Payment Gateway
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                    SPRINT 3 / 4
                  </span>
                </div>
              </div>

              {/* Industry Hiring Alignment Slider */}
              <div className="border-t border-slate-800/80 pt-4">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider">
                    INDUSTRY HIRING ALIGNMENT
                  </span>
                  <span className="font-semibold text-white">
                    48 Active Hiring Partners
                  </span>
                </div>

                <div className="relative py-1">
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300"
                      style={{ width: `${sliderPos}%` }}
                    />
                  </div>
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_10px_#38bdf8] border-2 border-white cursor-pointer pointer-events-none"
                    style={{ left: `calc(${sliderPos}% - 8px)` }}
                  />
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    aria-label="Industry Alignment Slider"
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-medium text-slate-400 mt-2">
                  <span>Core Syntax</span>
                  <span>Production CI/CD</span>
                  <span>Full Autonomy</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
