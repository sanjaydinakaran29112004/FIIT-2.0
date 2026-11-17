import React from "react";
import { ShieldCheck, Search } from "lucide-react";

export default function HiringPipelinesSection() {
  const jobs = [
    {
      location: "CHENNAI / HYBRID",
      status: "Actively Hiring",
      statusColor: "bg-blue-100 text-blue-700",
      role: "Junior Full Stack Developer",
      partner: "Enterprise Partner • Fintech Domain",
      eligibility: "Eligibility: Any Tech Graduate",
      stack: "Stack: React, Node.js, PostgreSQL",
    },
    {
      location: "AMBATTUR TECH PARK",
      status: "Interviews Ongoing",
      statusColor: "bg-amber-100 text-amber-800",
      role: "Data Analyst Trainee",
      partner: "Analytics Hub • Supply Chain Intelligence",
      eligibility: "Eligibility: Any Graduate (Strong Math/Stats)",
      stack: "Stack: Python, SQL, PowerBI, Tableau",
    },
    {
      location: "CHENNAI (IN-OFFICE)",
      status: "Screening",
      statusColor: "bg-slate-100 text-slate-700",
      role: "Cloud Support Engineer",
      partner: "Infrastructure Services • Cloud Ops",
      eligibility: "Eligibility: B.E. / B.Tech / BCA / B.Sc",
      stack: "Stack: Linux CLI, AWS Basics, Networking",
    },
  ];

  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with Transparency box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-8">
            <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              DIRECT HIRING PIPELINES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
              BUILD YOUR READINESS. <br className="hidden sm:inline" />
              FIND YOUR OPPORTUNITY.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore actively recruiting roles within our regional employer
              network. We match candidates based on verified project readiness.
            </p>
          </div>

          <div className="lg:col-span-4 bg-blue-50/80 border border-blue-100/90 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>TRANSPARENCY COMMITMENT</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Real career preparation and direct placement drives. No misleading
              100% guarantees — only proven competency matching.
            </p>
          </div>
        </div>

        {/* 3 Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-blue-600">
                    {job.location}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${job.statusColor}`}
                  >
                    {job.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {job.role}
                </h3>
                <div className="text-xs text-slate-500 font-medium mb-5">
                  {job.partner}
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 font-medium mb-8">
                  <div>🎓 {job.eligibility}</div>
                  <div>⚡ {job.stack}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  const target = document.getElementById("career-advisor");
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors text-center"
              >
                Apply via FIIT Placement
              </button>
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
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs px-6 py-3 rounded-xl border border-blue-200 transition-all"
          >
            <span>VIEW ALL OPPORTUNITIES</span>
            <Search className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
