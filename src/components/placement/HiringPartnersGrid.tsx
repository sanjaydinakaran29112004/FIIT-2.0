"use client";

import React, { useState } from "react";
import { HIRING_PARTNERS, HiringPartner } from "@/data/placements";
import { Building, MapPin, Briefcase } from "lucide-react";

export default function HiringPartnersGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Partners");

  const categories = [
    "All Partners",
    "Tier-1 Product GCC",
    "SaaS Unicorn",
    "Enterprise Consulting",
    "Global IT Services",
  ];

  const filteredPartners = HIRING_PARTNERS.filter((partner) => {
    return (
      selectedCategory === "All Partners" || partner.category === selectedCategory
    );
  });

  return (
    <section className="py-14 bg-[#F8FAFD] border-y border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-2">
              <Building className="w-3.5 h-3.5" />
              <span>ACTIVE RECRUITMENT NETWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
              140+ Corporate Hiring Partners
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mt-1">
              Recruiters who regularly interview and hire directly from our 9 Tamil Nadu campus hubs.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? "bg-[#0062eb] text-white shadow-xs"
                    : "bg-white hover:bg-gray-100 text-gray-600 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl p-5 border border-gray-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0062eb] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {partner.name}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-3">
                  <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                  <span>{partner.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1 flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  <span>Active Roles</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {partner.activeHiringRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-50 text-gray-700 border border-gray-200/60"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
