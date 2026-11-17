import React from "react";
import { HelpCircle, FlaskConical, Code2, Users, Network, ArrowUpRight } from "lucide-react";

export default function GapSection() {
  const cards = [
    {
      icon: HelpCircle,
      iconColor: "text-rose-500",
      iconBg: "bg-rose-50 border-rose-200",
      friction: '"Don\'t know which technology to learn"',
      solution: "Guided Career Assessment & Clear Tech Roadmaps customized to your current aptitude.",
    },
    {
      icon: FlaskConical,
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-50 border-cyan-200",
      friction: '"Have technical knowledge but no practical experience"',
      solution: "100% Hands-on Labs & Production Environments with Git, Linux & Docker from Day 1.",
    },
    {
      icon: Code2,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50 border-blue-200",
      friction: '"Struggle with projects and portfolios"',
      solution: "Mentor-Guided Capstone Projects deployed live to AWS/Vercel with public Git histories.",
    },
    {
      icon: Users,
      iconColor: "text-pink-600",
      iconBg: "bg-pink-50 border-pink-200",
      friction: '"Not confident in interviews"',
      solution: "Dedicated IPP (Interview Preparation Program) featuring weekly mock grills and algorithmic drills.",
    },
    {
      icon: Network,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50 border-amber-200",
      friction: '"Don\'t know how to approach job opportunities"',
      solution: "Active Placement Cell with direct company interview matching across 9 regional hubs in Tamil Nadu.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            THE ENGINEERING EDUCATION GAP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            Learning a course is easy. Knowing what to do next is hard.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Most tech training centers stop when the syllabus ends. At FIIT, the end
            of theory is only where your employment preparation begins.
          </p>
        </div>

        {/* 5 Problem/Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-6 ${item.iconBg}`}
                  >
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-500 mb-1">
                    THE FRICTION
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.friction}
                  </h3>
                </div>

                <div className="mt-8 bg-blue-50/70 border border-blue-100/90 rounded-xl p-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    FIIT SOLUTION
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {cards.slice(3, 5).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-6 ${item.iconBg}`}
                  >
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-500 mb-1">
                    THE FRICTION
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {item.friction}
                  </h3>
                </div>

                <div className="mt-8 bg-blue-50/70 border border-blue-100/90 rounded-xl p-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    FIIT SOLUTION
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const target = document.getElementById("career-advisor");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <span>FIND MY NEXT STEP</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
