import React from "react";
import {
  MessageSquare,
  Sparkles,
  Wrench,
  Users,
  CheckCircle,
  Presentation,
  ShieldCheck,
  GitFork,
  Shield,
} from "lucide-react";

export default function EEPSection() {
  const skills = [
    {
      icon: MessageSquare,
      title: "Communication",
      desc: "Articulating architectural decisions clearly to clients & peers.",
    },
    {
      icon: Sparkles,
      title: "Confidence",
      desc: "Overcoming imposter syndrome in senior technical interviews.",
    },
    {
      icon: Wrench,
      title: "Problem Solving",
      desc: "Deconstructing opaque bugs systematically without panicking.",
    },
    {
      icon: Users,
      title: "Teamwork",
      desc: "Asynchronous collaboration, git hygiene, and respectful feedback.",
    },
    {
      icon: CheckCircle,
      title: "Ownership",
      desc: "Taking full responsibility for deployed uptime and clean handoffs.",
    },
    {
      icon: Presentation,
      title: "Presentation",
      desc: "Structuring slide decks and live demos for non-technical stakeholders.",
    },
    {
      icon: ShieldCheck,
      title: "Workplace Behaviour",
      desc: "Corporate etiquette, email precision, and meeting accountability.",
    },
    {
      icon: GitFork,
      title: "Decision Making",
      desc: "Evaluating framework tradeoffs, latency versus memory benchmarks.",
    },
  ];

  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            THE NON-TECHNICAL EDGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            Technical skills are important. Professional readiness matters too.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            FIIT EEP (Essential Employability Program) shapes developers who
            communicate clearly, take ownership of outcomes, and flourish inside
            corporate team hierarchies.
          </p>
        </div>

        {/* 8 Cards (4x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
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
            <span>BUILD MY EMPLOYABILITY</span>
            <Shield className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
