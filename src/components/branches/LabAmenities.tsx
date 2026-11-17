"use client";

import React from "react";
import {
  Monitor,
  Network,
  Cpu,
  UserCheck,
  Wifi,
  Video,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function LabAmenities() {
  const amenities = [
    {
      icon: Monitor,
      title: "Enterprise Dual-Monitor Workstations",
      desc: "Every coding desk is fitted with high-refresh rate dual monitors, Intel Core i7 / AMD Ryzen processors, 32GB RAM, and blazing-fast NVMe storage.",
    },
    {
      icon: Network,
      title: "Physical Cisco Networking Racks",
      desc: "Actual hardware racks with Cisco Catalyst switches, 2900 series routers, and patch bays for authentic CCNA/CCNP breakout drills.",
    },
    {
      icon: Cpu,
      title: "Dedicated AI & GPU Compute Nodes",
      desc: "NVIDIA RTX series GPU-equipped workstations at our Vellore and Chennai hubs for fine-tuning open-source LLMs and RAG vector search pipelines.",
    },
    {
      icon: UserCheck,
      title: "1-on-1 In-Person Debug Desks",
      desc: "Senior engineering instructors sit right next to you to debug runtime exceptions, inspect terminal logs, and walk through Git conflicts in real time.",
    },
    {
      icon: Wifi,
      title: "Dual-ISP Gigabit Optical Fiber",
      desc: "Zero network downtime. Redundant fiber connections ensure seamless Docker image pulls, AWS deployments, and live repo commits.",
    },
    {
      icon: Video,
      title: "Soundproof Mock Interview Booths",
      desc: "Private acoustic pods equipped with HD cameras and external whiteboards for live partner interviews, tech screenings, and system design defenses.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFD] border-y border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>UNCOMPROMISING INFRASTRUCTURE STANDARDS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-4">
            Standard Amenities Across All 9 Tamil Nadu Campuses
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Whether you study in Avadi, Tambaram, or Vellore, you get the exact same tier-1
            software development setup with zero compromises.
          </p>
        </div>

        {/* 6 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0062eb] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
