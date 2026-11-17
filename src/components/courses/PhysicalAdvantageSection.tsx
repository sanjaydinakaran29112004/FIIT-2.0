"use client";

import React from "react";
import {
  Building2,
  Monitor,
  UserCheck,
  Network,
  ShieldCheck,
} from "lucide-react";

interface PhysicalAdvantageSectionProps {
  onScheduleVisit: () => void;
}

export default function PhysicalAdvantageSection({
  onScheduleVisit,
}: PhysicalAdvantageSectionProps) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
          <Building2 className="w-3.5 h-3.5 text-[#0062eb]" />
          <span>THE FIIT PHYSICAL ADVANTAGE</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-4 max-w-3xl">
          Zero Isolation. Dedicated Developer Labs Across Tamil Nadu.
        </h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl mb-10">
          Unlike purely recorded online bootcamps where questions go
          unanswered, every FIIT student gets unlimited physical workstation
          access in our high-speed developer hubs across Chennai, Chengalpattu,
          Tiruvannamalai, and Vellore.
        </p>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-gray-200/70 hover:border-blue-200 transition-all duration-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/80 text-[#0062eb] flex items-center justify-center mb-4">
              <Monitor className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-[#0B1528] mb-2">
              Hardware &amp; Cloud Workstations
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              High-RAM coding stations with pre-configured IDEs, local Docker
              engines, Cisco routers, and dedicated GPU access for AI workloads.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-gray-200/70 hover:border-blue-200 transition-all duration-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/80 text-[#0062eb] flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-[#0B1528] mb-2">
              In-Person Technical Doubts
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Full-time lab mentors sit right next to you to debug runtime
              exceptions, inspect terminal logs, and walk through Git merge
              conflicts in real time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F8FAFD] rounded-2xl p-6 border border-gray-200/70 hover:border-blue-200 transition-all duration-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/80 text-[#0062eb] flex items-center justify-center mb-4">
              <Network className="w-5 h-5 stroke-[2.2]" />
            </div>
            <h3 className="text-base font-bold text-[#0B1528] mb-2">
              9 Accessible Regional Hubs
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Avadi, Ambattur, RedHills, Tambaram, Kelambakkam, Iyyappanthangal,
              Chengalpattu, Tiruvannamalai, and Vellore.
            </p>
          </div>
        </div>

        {/* Bottom Banner inside Physical Advantage */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2.5 text-xs font-medium text-gray-700">
            <ShieldCheck className="w-4 h-4 text-[#0062eb] shrink-0" />
            <span>
              Want to see our lab setup before enrolling? Book a zero-obligation
              workstation tour at any campus.
            </span>
          </div>
          <button
            onClick={onScheduleVisit}
            className="bg-[#0B132B] hover:bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-xs transition active:scale-[0.98] whitespace-nowrap self-start sm:self-auto"
          >
            Schedule a Branch Visit
          </button>
        </div>
      </div>
    </section>
  );
}
