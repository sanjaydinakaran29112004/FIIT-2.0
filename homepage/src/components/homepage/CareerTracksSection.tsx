import React from "react";
import { ArrowRight } from "lucide-react";

export default function CareerTracksSection() {
  const tracks = [
    {
      badge: "HIGH DEMAND",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      duration: "4 - 6 Months",
      title: "Software Development",
      desc: "Full cycle software engineering covering core CS algorithms, relational data structures, APIs, and responsive frontends.",
      roles: ["Frontend Dev", "Backend Engineer", "Full Stack Dev"],
      median: "Median: ₹4.8L - ₹8.5L",
    },
    {
      badge: "DATA ECOSYSTEM",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      duration: "3 - 5 Months",
      title: "Data Analytics",
      desc: "Transform raw enterprise data into strategic visualizations, executive dashboards, and statistical models.",
      roles: ["Data Analyst", "BI Specialist", "Tableau Expert"],
      median: "Median: ₹4.2L - ₹7.8L",
    },
    {
      badge: "EMERGING FRONTIER",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      duration: "4 - 6 Months",
      title: "Artificial Intelligence",
      desc: "Build and deploy machine learning models, neural networks, Generative AI pipelines, and LLM integrations.",
      roles: ["ML Associate", "Prompt Engineer", "Python AI Dev"],
      median: "Median: ₹5.5L - ₹11.0L",
    },
    {
      badge: "INFRASTRUCTURE",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      duration: "3 - 4 Months",
      title: "Networking Systems",
      desc: "Enterprise routing, switching, VLAN architectures, firewall policies, and real Cisco lab hardware configurations.",
      roles: ["Network Engineer", "System Admin", "CCNA Specialist"],
      median: "Median: ₹3.6L - ₹6.5L",
    },
    {
      badge: "DEFENSE",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
      duration: "4 - 5 Months",
      title: "Cybersecurity",
      desc: "Threat detection, incident response, vulnerability assessment, penetration testing, and SIEM security center operations.",
      roles: ["Security Analyst", "SOC Associate", "Ethical Hacker"],
      median: "Median: ₹4.5L - ₹9.0L",
    },
    {
      badge: "CORE CLOUD",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      duration: "3 - 5 Months",
      title: "Cloud Computing & DevOps",
      desc: "AWS architecture, Azure tenant management, Terraform provisioning, Docker containerization, and automated CI/CD.",
      roles: ["AWS Associate", "Cloud Architect", "DevOps Trainee"],
      median: "Median: ₹5.0L - ₹9.8L",
    },
    {
      badge: "OPERATIONS",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      duration: "2 - 3 Months",
      title: "Business & Productivity",
      desc: "ERP systems, agile sprint tracking, Advanced Microsoft 365 automations, financial modeling, and process re-engineering.",
      roles: ["IT Business Analyst", "ERP Specialist", "Operations Lead"],
      median: "Median: ₹3.8L - ₹6.5L",
    },
    {
      badge: "TRANSITION",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      duration: "6 Months",
      title: "Career Switch (Non-IT to IT)",
      desc: "Engineered specifically for non-CS graduates and working folks from BPO/Sales seeking a stable, accredited tech entry.",
      roles: ["Associate Engineer", "QA Analyst", "Junior Dev"],
      median: "Median: ₹4.0L - ₹7.0L",
    },
    {
      badge: "INDEPENDENT",
      badgeColor: "bg-slate-900 text-white border-slate-800",
      duration: "3 Months",
      title: "Tech Freelancing Accelerator",
      desc: "Turn coding and analytics into direct independent earnings: client acquisition, proposals, pricing, and global delivery.",
      roles: ["Freelance Dev", "Contractor", "Agency Founder"],
      median: "Remote USD / INR billing",
    },
  ];

  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            OUTCOME-DRIVEN DESTINATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            Where do you want your career to go?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Structured career tracks designed directly alongside Chennai and
            Bangalore tech hiring specifications.
          </p>
        </div>

        {/* 9 Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-md border tracking-wider uppercase ${track.badgeColor}`}
                  >
                    {track.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {track.duration}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {track.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-6">
                  {track.desc}
                </p>

                {/* Target Roles */}
                <div className="mb-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    TARGET ROLES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {track.roles.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="text-[11px] font-medium bg-blue-50/70 text-blue-700 px-2 py-0.5 rounded"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Median Salary & Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  {track.median}
                </span>
                <button
                  onClick={() => {
                    const target = document.getElementById("career-advisor");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Explore Career Path</span>
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
