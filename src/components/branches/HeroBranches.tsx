"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Search, Network, Monitor, Clock, ShieldCheck } from "lucide-react";

interface HeroBranchesProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  totalCount: number;
  filteredCount: number;
}

const REGIONS = [
  "All Regions",
  "Chennai West",
  "Chennai South",
  "Chennai North",
  "OMR & IT Belt",
  "Regional Districts",
];

export default function HeroBranches({
  searchQuery,
  setSearchQuery,
  selectedRegion,
  setSelectedRegion,
  totalCount,
  filteredCount,
}: HeroBranchesProps) {
  return (
    <section className="bg-gradient-to-b from-[#F2F6FC] via-[#F6F9FD] to-white pt-6 pb-10 border-b border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-900 font-semibold">Branches</span>
        </div>

        {/* Hero Top Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          {/* Left Text */}
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EEFF] text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb]" />
              <span>9 PHYSICAL TECH HUBS ACROSS TAMIL NADU</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B1528] tracking-tight leading-[1.15] mb-4">
              ENTERPRISE DEVELOPER LABS &amp; REGIONAL HUBS
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed max-w-2xl">
              Experience zero-isolation learning. Walk into any of our 9 developer hubs across Chennai,
              Chengalpattu, Tiruvannamalai, and Vellore for unlimited access to high-RAM workstations,
              physical Cisco routers, local Docker engines, and full-time senior lab mentors sitting right beside you.
            </p>
          </div>

          {/* Right Stat Cards */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4 self-start lg:self-center">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <Network className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  9 Hubs
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Open 7 Days (8 AM - 9:30 PM)
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <Monitor className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  600+ Rigs
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Dual-Monitor Developer Stations
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Region Filter Bar */}
        <div className="bg-white rounded-xl border border-gray-200/90 p-2 shadow-xs flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="flex items-center gap-3 w-full px-3 py-1">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by campus name, district, or landmark (e.g. Avadi, OMR, Katpadi, Tambaram, Railway Station)..."
              className="w-full text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 bg-transparent outline-none py-1.5"
            />
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto px-1 py-1 shrink-0">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  selectedRegion === region
                    ? "bg-[#0062eb] text-white shadow-xs"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600 border border-transparent"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Sub Info Line */}
        <div className="flex items-center justify-between text-xs font-medium text-gray-500 mt-4">
          <div>
            Showing <span className="text-gray-900 font-semibold">{filteredCount}</span> of{" "}
            <span className="text-gray-900 font-semibold">{totalCount}</span> Physical Campuses Across Tamil Nadu
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0062eb]" />
              <span>Dedicated 1-on-1 Debug Desks</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Full Workstation Tours Available</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
