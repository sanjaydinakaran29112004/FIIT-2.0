import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function EngineeringRealitySection() {
  const lifecycle = [
    { num: "01", phase: "UNDERSTAND", title: "PRD & Specs" },
    { num: "02", phase: "DESIGN", title: "ERD & Architecture" },
    { num: "03", phase: "BUILD", title: "Sprint Codebases" },
    { num: "04", phase: "REVIEW", title: "Mentor PR Reviews" },
    { num: "05", phase: "TEST", title: "Unit & E2E Testing" },
    { num: "06", phase: "PRESENT", title: "Live Demo Day" },
  ];

  const tiers = [
    {
      tier: "TIER 1",
      title: "Academic Projects",
      desc: "Curriculum-aligned implementations that guarantee solid foundational grades.",
    },
    {
      tier: "TIER 2",
      title: "Final-Year Projects",
      desc: "Rigorous full-stack implementations suitable for university panel reviews.",
    },
    {
      tier: "TIER 3",
      title: "Guided Projects",
      desc: "Pair-programming with staff engineers through real debugging scenarios.",
    },
    {
      tier: "TIER 4",
      title: "Portfolio Projects",
      desc: "Interactive personal projects engineered to impress technical recruiters.",
    },
    {
      tier: "TIER 5",
      title: "Industry-Oriented",
      desc: "Microservice systems solving actual business logistics, fintech, and healthcare gaps.",
    },
  ];

  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            ENGINEERING REALITY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            Knowing is not enough. Build something.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Software engineering is evaluated on deployed software, not on multiple
            choice quizzes. At FIIT, you build production repos that pass code
            review.
          </p>
        </div>

        {/* Lifecycle Box */}
        <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-7 mb-10 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-6">
            Our Engineering Lifecycle
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {lifecycle.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/80 p-4 text-center hover:border-blue-400 transition"
              >
                <div className="text-xl font-black text-blue-600 mb-1">
                  {item.num}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-0.5">
                  {item.phase}
                </div>
                <div className="text-xs font-bold text-slate-900">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Project Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  {t.tier}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-1 mb-2">
                  {t.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              const target = document.getElementById("career-advisor");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>EXPLORE PROJECTS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
