import React from "react";
import { ClipboardList } from "lucide-react";

export default function IPPSection() {
  const pillars = [
    {
      pillar: "PILLAR 01",
      title: "Resume Preparation",
      desc: "ATS-optimized markdown templates, bullet points engineered around quantifiable business impact, and zero fluff.",
    },
    {
      pillar: "PILLAR 02",
      title: "Aptitude Training",
      desc: "Quantitative analysis, logical reasoning speed drills, and technical pattern matching for screening exams.",
    },
    {
      pillar: "PILLAR 03",
      title: "Technical Preparation",
      desc: "Deep dive into data structures, space/time complexity, database indexing, and core runtime architectures.",
    },
    {
      pillar: "PILLAR 04",
      title: "HR Preparation",
      desc: "Behavioral frameworks (STAR method), salary negotiation benchmarks, notice period handling, and culture queries.",
    },
    {
      pillar: "PILLAR 05",
      title: "1-on-1 Mock Interviews",
      desc: "Recorded video evaluations with current Tech Leads. Receive comprehensive written scorecards after every session.",
    },
    {
      pillar: "PILLAR 06",
      title: "Communication Confidence",
      desc: "Fluency labs, neutral professional pronunciation, and technical narrative storytelling to keep interviewers engaged.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            RIGOROUS ASSESSMENT READINESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            DON&apos;T JUST APPLY. BE READY.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            The FIIT IPP (Interview Preparation Program) simulates the exact
            pressure of Tier-1 tech recruitment drives across 6 foundational
            pillars.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  {p.pillar}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2.5">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Button */}
        <div className="text-center">
          <button
            onClick={() => {
              const target = document.getElementById("career-advisor");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>GET INTERVIEW READY</span>
            <ClipboardList className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
