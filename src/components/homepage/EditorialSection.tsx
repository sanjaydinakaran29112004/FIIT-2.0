import React from "react";
import { ArrowRight, BookOpen } from "lucide-react";

export default function EditorialSection() {
  const articles = [
    {
      badge: "CAREER GUIDE • 8 MIN READ",
      title: "How to choose between Data Science and Full Stack in 2025",
      desc: "A direct comparison of day-to-day work, compensation curves, and screening difficulty across Indian software hubs.",
    },
    {
      badge: "PORTFOLIO TACTICS • 6 MIN READ",
      title: "Building an ATS-friendly developer portfolio that gets interviews",
      desc: "The 5 structural flaws that cause recruiter automated screening systems to discard junior GitHub links before review.",
    },
    {
      badge: "SWITCH BLUEPRINT • 10 MIN READ",
      title: "Non-IT to IT career switch: A realistic timeline & step-by-step roadmap",
      desc: "What non-technical graduates need to master, what they should ignore, and how to frame non-coding past experience.",
    },
  ];

  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            EDITORIAL INTELLIGENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            MAKE BETTER CAREER DECISIONS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            In-depth guides authored by our curriculum architects to help you
            navigate tech industry market dynamics.
          </p>
        </div>

        {/* 3 Guide Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">
                  {art.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-3 mb-2.5 leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-8">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    const target = document.getElementById("career-advisor");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 text-xs hover:underline"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
