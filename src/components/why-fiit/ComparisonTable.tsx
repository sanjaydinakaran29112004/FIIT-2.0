"use client";

import React from "react";
import { Check, X, Minus, Sparkles } from "lucide-react";

export default function ComparisonTable() {
  const rows = [
    {
      feature: "Physical Workstation & Lab Access",
      fiit: "Unlimited access across 9 high-speed physical hubs in Tamil Nadu with pre-configured IDEs, Docker, and Cisco racks.",
      fiitStatus: "positive",
      bootcamps: "Zero physical access. You are isolated alone at home.",
      bootcampStatus: "negative",
      college: "Shared university computer labs with restricted time slots and locked permissions.",
      collegeStatus: "neutral",
    },
    {
      feature: "1:1 Senior Engineering Mentorship",
      fiit: "Full-time mentors sit right next to you to debug exceptions, terminal errors, and architecture bottlenecks in real time.",
      fiitStatus: "positive",
      bootcamps: "Asynchronous Discord / Slack tickets with 24-48 hr delays or bot replies.",
      bootcampStatus: "negative",
      college: "Professors lecturing to 60+ students without individualized code reviews.",
      collegeStatus: "neutral",
    },
    {
      feature: "Capstone Project Rigor",
      fiit: "Client-scale multi-tier architectures: microservices, automated CI/CD pipelines, live cloud deployment, and RAG pipelines.",
      fiitStatus: "positive",
      bootcamps: "Copy-paste Todo apps, clones of Netflix/Spotify that hiring managers immediately disregard.",
      bootcampStatus: "negative",
      college: "Outdated theoretical academic projects (e.g. Hospital Management System in C++).",
      collegeStatus: "negative",
    },
    {
      feature: "Git PR Audits & Commit Standards",
      fiit: "Mandatory weekly Pull Request audits against enterprise clean-code standards, unit testing, and Dockerization.",
      fiitStatus: "positive",
      bootcamps: "Zero manual PR reviews; automated autograders that only test unit outputs.",
      bootcampStatus: "negative",
      college: "Code submitted on paper printouts or USB drives with no Git version control.",
      collegeStatus: "negative",
    },
    {
      feature: "Regional Placement Pipelines",
      fiit: "Direct recruitment drives with 140+ active corporate hiring partners across Chennai, Vellore, and Bengaluru.",
      fiitStatus: "positive",
      bootcamps: "Generic job board links and resume email blasts with no employer relationships.",
      bootcampStatus: "negative",
      college: "Mass recruiters offering generic non-technical support roles.",
      collegeStatus: "neutral",
    },
    {
      feature: "Interview Preparation (IPP Program)",
      fiit: "Mock technical rounds with actual engineering managers, system design whiteboarding, and salary negotiation coaching.",
      fiitStatus: "positive",
      bootcamps: "Generic LeetCode lists with no personalized behavioral feedback.",
      bootcampStatus: "negative",
      college: "General aptitude training without specialized tech stack interview preparation.",
      collegeStatus: "neutral",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>THE HONEST COMPARISON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-4">
            How FIIT 2.0 Compares to Online Bootcamps &amp; Traditional Degrees
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            See exactly why self-paced video courses have an 85% drop-out rate, and how
            our in-lab physical engineering model ensures verified job readiness.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200/90 shadow-xs bg-white">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="border-b border-gray-200 bg-[#F8FAFD]">
                <th className="py-4 px-6 text-xs font-bold text-gray-700 uppercase tracking-wider w-[24%]">
                  Curriculum Dimension
                </th>
                <th className="py-4 px-6 text-xs font-black text-[#0062eb] uppercase tracking-wider bg-blue-50/60 border-x border-blue-100/80 w-[30%]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0062eb]" />
                    <span>FIIT 2.0 (The Gold Standard)</span>
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-bold text-gray-600 uppercase tracking-wider w-[23%]">
                  Recorded Online Bootcamps
                </th>
                <th className="py-4 px-6 text-xs font-bold text-gray-600 uppercase tracking-wider w-[23%]">
                  Traditional College Degrees
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  {/* Feature Title */}
                  <td className="py-4 px-6 font-bold text-gray-900 leading-snug">
                    {row.feature}
                  </td>

                  {/* FIIT Column */}
                  <td className="py-4 px-6 bg-blue-50/30 border-x border-blue-100/60 text-gray-800 leading-relaxed font-medium">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{row.fiit}</span>
                    </div>
                  </td>

                  {/* Bootcamp Column */}
                  <td className="py-4 px-6 text-gray-500 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{row.bootcamps}</span>
                    </div>
                  </td>

                  {/* College Column */}
                  <td className="py-4 px-6 text-gray-500 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{row.college}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
