"use client";

import React from "react";
import { SALARY_BY_TRACK } from "@/data/placements";
import { TrendingUp, BarChart3, ShieldCheck } from "lucide-react";

export default function PlacementStats() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>SPECIALIZATION-WISE COMPENSATION INDEX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
            Average &amp; Peak Placement Salaries by Track
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mt-1">
            Audited salary brackets based on full-time engineering appointments secured by FIIT graduates across 2024-2025 cohorts.
          </p>
        </div>

        {/* Salary Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200/90 shadow-2xs mb-10">
          <table className="w-full text-left text-xs text-gray-700 bg-white min-w-[640px]">
            <thead className="bg-[#F8FAFD] text-gray-900 font-bold border-b border-gray-200">
              <tr>
                <th className="py-3.5 px-5">Specialization Track</th>
                <th className="py-3.5 px-5">Entry Starting CTC</th>
                <th className="py-3.5 px-5 text-[#0062eb]">Cohort Median / Average</th>
                <th className="py-3.5 px-5 text-emerald-700">Top Tier Bracket Secured</th>
                <th className="py-3.5 px-5 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {SALARY_BY_TRACK.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                  <td className="py-4 px-5 font-bold text-gray-900">
                    {row.track}
                  </td>
                  <td className="py-4 px-5 font-medium text-gray-600">
                    {row.min}
                  </td>
                  <td className="py-4 px-5 font-black text-[#0062eb] text-sm">
                    {row.avg}
                  </td>
                  <td className="py-4 px-5 font-black text-emerald-600 text-sm">
                    {row.max}
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Active Hiring
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Company Types Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#F8FAFD] border border-blue-100/70">
            <div className="text-xl font-black text-[#0B1528] mb-1">38%</div>
            <div className="text-xs font-bold text-[#0062eb] mb-1">SaaS Unicorns &amp; Product Startups</div>
            <p className="text-[11px] text-gray-500">Freshworks, Zoho, Chargebee, Kissflow, Rapido.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8FAFD] border border-blue-100/70">
            <div className="text-xl font-black text-[#0B1528] mb-1">29%</div>
            <div className="text-xs font-bold text-[#0062eb] mb-1">Tier-1 Product GCCs</div>
            <p className="text-[11px] text-gray-500">PayPal, Amazon GCC, Ford Mobility, Standard Chartered GBS.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8FAFD] border border-blue-100/70">
            <div className="text-xl font-black text-[#0B1528] mb-1">21%</div>
            <div className="text-xs font-bold text-[#0062eb] mb-1">Enterprise Tech Consulting</div>
            <p className="text-[11px] text-gray-500">Kaar Technologies, LatentView, PwC Tech, Virtusa.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8FAFD] border border-blue-100/70">
            <div className="text-xl font-black text-[#0B1528] mb-1">12%</div>
            <div className="text-xs font-bold text-[#0062eb] mb-1">Global IT &amp; Cloud Services</div>
            <p className="text-[11px] text-gray-500">TCS Digital, Cognizant, Wipro Cyber, Hexaware.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
