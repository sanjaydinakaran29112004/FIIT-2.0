"use client";

import React from "react";
import { Monitor, UserCheck, Layers, Briefcase, ArrowUpRight } from "lucide-react";

export default function FourPillars() {
  const pillars = [
    {
      number: "01",
      icon: Monitor,
      title: "Zero-Isolation Developer Labs",
      tagline: "High-RAM Hardware, Dedicated Cisco Racks & Local GPU Clusters",
      description:
        "Learning to code alone in your bedroom leads to drop-outs when tricky bugs hit. In our 9 Tamil Nadu developer hubs, you write code in an authentic office environment with dual-monitor rigs, local Docker containers, and high-speed enterprise networks.",
      features: [
        "Dedicated coding workstations with pre-configured developer environments",
        "Physical Cisco CCNA/CCNP routing hardware testbenches",
        "Local and cloud GPU workstations for GenAI & LLM fine-tuning",
        "Open 7 days a week with flexible morning, evening, and weekend access",
      ],
    },
    {
      number: "02",
      icon: UserCheck,
      title: "1-on-1 In-Person Technical Mentorship",
      tagline: "Full-Time Senior Engineers Sitting Right Next to You",
      description:
        "No waiting for 2 days on an automated forum for someone to look at your broken build. Our full-time lab mentors sit beside you to inspect stack traces, trace SQL execution plans, debug Docker compose networks, and conduct rigorous code reviews.",
      features: [
        "Instant in-person doubt resolution with zero queueing",
        "Line-by-line pull request audits before merging into master",
        "Terminal log forensics and memory leak profiling guidance",
        "Architectural trade-off discussions tailored to your skill progression",
      ],
    },
    {
      number: "03",
      icon: Layers,
      title: "Enterprise Standard Curricula 2025",
      tagline: "Co-Engineered Alongside Regional Tech Leads & Hiring Managers",
      description:
        "Our syllabi are updated quarterly in direct consultation with engineering leads across Chennai and Bengaluru tech corridors. We throw out legacy textbook exercises and teach real production tech stacks used by tier-1 tech employers.",
      features: [
        "Spring Boot 3, Java 21, Microservices, and Docker container orchestration",
        "Enterprise RAG pipelines with LangChain, Pinecone, and open-source LLMs",
        "Automated CI/CD pipelines using Terraform IaC, Jenkins, and Kubernetes",
        "Splunk SIEM, MITRE ATT&CK telemetry, Wireshark, and blue-team forensics",
      ],
    },
    {
      number: "04",
      icon: Briefcase,
      title: "End-to-End Placement Pipeline (EEP + IPP)",
      tagline: "From First Commit to Final Offer Letter Across 140+ Partners",
      description:
        "We don't simply hand you a certificate and leave you to fend for yourself on LinkedIn. Our dedicated Enterprise Placement Cell runs algorithmic coding rounds, system design mock interviews, and direct recruitment drives.",
      features: [
        "Direct referrals to 140+ active hiring partners in Chennai & Bengaluru",
        "3.8x average compensation enhancement for non-IT and freshers",
        "Rigorous mock interviews conducted by practicing tech leads",
        "Lifetime alumni network and continuous senior mentorship",
      ],
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFD] border-y border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb]" />
            <span>THE 4 FOUNDATIONAL PILLARS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-4">
            The Engineering Rigor That Guarantees 94.6% Code Review Clearance
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Every aspect of the FIIT 2.0 experience has been deliberately designed to mimic
            day-one corporate engineering expectations.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-white rounded-2xl border border-gray-200/90 p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0062eb] flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-3xl font-black text-gray-200 tracking-tighter">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#0B1528] mb-1.5">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0062eb] mb-3.5">
                    {pillar.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-5 border-t border-gray-100 space-y-2.5">
                  {pillar.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb] shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
