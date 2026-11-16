import React from "react";
import { UserCheck, RefreshCw, Award, ArrowRight } from "lucide-react";

export default function ProofOfWorkSection() {
  const points = [
    {
      icon: UserCheck,
      title: "Assigned Senior Mentor",
      desc: "Daily standups and direct code architecture guidance from practitioners with 8+ years experience.",
    },
    {
      icon: RefreshCw,
      title: "Bi-Weekly Sprint Cycles",
      desc: "Manage backlog tickets on Jira, commit daily pull requests, and resolve merge conflicts properly.",
    },
    {
      icon: Award,
      title: "Verified Experience Credential",
      desc: "Accredited internship certificate and reference letter verifying direct code contributions.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-blue-600 tracking-wider uppercase">
              PROOF OF WORK
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 leading-[1.12] tracking-tight">
              WORK EXPERIENCE FIRST. <br />
              CERTIFICATE SECOND.
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Hiring managers don&apos;t ask what you memorized; they ask what you
              delivered. Our built-in internship module replicates genuine software
              development agency sprints.
            </p>

            <div className="space-y-6 pt-2">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {pt.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  const target = document.getElementById("career-advisor");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>EXPLORE INTERNSHIPS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Lab Photo Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white p-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                {/* Visual tech workspace representation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950">
                  {/* Subtle code/terminal pattern */}
                  <div className="absolute inset-0 opacity-20 p-6 font-mono text-[11px] text-emerald-400 overflow-hidden leading-5">
                    <div>git checkout -b feature/payment-gateway-v2</div>
                    <div>npm run test:e2e -- --reporter=spec</div>
                    <div>✔ 28 specs passed in 4.2s (100% test coverage)</div>
                    <div>Deploying container to AWS ECS cluster: prod-useast-1</div>
                    <div>Healthcheck: HTTP 200 OK across 6 microservices</div>
                    <div>Status: Ready for mentor architecture review</div>
                  </div>
                  
                  {/* Modern Team Lab UI Graphic */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center text-white">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600/30 border border-blue-400/50 flex items-center justify-center mb-4 backdrop-blur-md">
                      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-bold text-white text-lg">
                        F
                      </div>
                    </div>
                    <div className="text-xl font-bold tracking-tight mb-2">
                      Full-Stack Dev Sprints &amp; Live PRs
                    </div>
                    <p className="text-xs text-slate-300 max-w-sm">
                      Students collaborating with Staff Engineers, debugging production microservices in daily agile standups.
                    </p>
                  </div>
                </div>

                {/* Bottom Image Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 px-5 py-3 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">
                    FIIT Cloud &amp; Code Lab
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    Sprint Review #14 • Ambattur Branch
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
