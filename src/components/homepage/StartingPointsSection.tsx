import React from "react";
import { GraduationCap, Award, Briefcase, TrendingUp, ArrowRight } from "lucide-react";

export default function StartingPointsSection() {
  const profiles = [
    {
      icon: GraduationCap,
      target: "College Student",
      desc: "Build foundational coding prowess, master final-year engineering projects, and enter final placements confident.",
      cta: "Explore Student Pathway →",
    },
    {
      icon: Award,
      target: "Recent Graduate",
      desc: "The practical bridge between your degree and your first engineering appointment. Fast-track portfolio building.",
      cta: "Launch Your Career →",
    },
    {
      icon: Briefcase,
      target: "Job Seeker",
      desc: "Upskill in high-demand stacks (Full Stack, Cloud, Analytics), pass ATS screenings, and nail technical rounds.",
      cta: "Fast-Track Employment →",
    },
    {
      icon: TrendingUp,
      target: "Working Professional",
      desc: "Switch from Non-IT to IT, or upgrade from legacy maintenance to high-paying AI, Cloud & Architect roles.",
      cta: "Advance Your Role →",
    },
  ];

  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            Let&apos;s find the right direction for your career.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Select your current starting point to unlock curated pathways, skill
            benchmarks, and recruitment timelines.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    TARGET PROFILE
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.target}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => {
                      const target = document.getElementById("career-advisor");
                      target?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-50/80 hover:bg-blue-100/90 text-blue-600 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{item.cta}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
