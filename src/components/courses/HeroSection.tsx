"use client";

import React from "react";
import Link from "next/link";
import { Search, ShieldCheck, SlidersHorizontal } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredCount: number;
  totalCount: number;
}

export default function HeroSection({
  searchQuery,
  setSearchQuery,
  filteredCount,
  totalCount,
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-[#F2F6FC] via-[#F6F9FD] to-white pt-6 pb-8 border-b border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-900 font-semibold">Courses</span>
        </div>

        {/* Hero Top Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          {/* Left Text Block */}
          <div className="max-w-3xl">
            {/* Curricula Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EEFF] text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb]" />
              <span>ENTERPRISE STANDARD CURRICULA 2025</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B1528] tracking-tight leading-[1.15] mb-4">
              INDUSTRY-ALIGNED TECHNICAL COURSES &amp; SPECIALIZATIONS
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed max-w-2xl">
              Explore outcome-driven curricula engineered alongside regional
              engineering leads and hiring managers across Chennai and Vellore
              tech corridors. Backed by live capstones, mentor code reviews, and
              physical workstation access across all 9 Tamil Nadu branches.
            </p>
          </div>

          {/* Right Stat Card */}
          <div className="shrink-0 self-start lg:self-center">
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  94.6%
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Lab Code Review Pass Rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Search Box */}
        <div className="bg-white rounded-xl border border-gray-200/90 p-2 shadow-xs flex flex-col sm:flex-row items-center gap-2 max-w-full">
          <div className="flex items-center gap-3 w-full px-2">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology, framework, or role (e.g. React, Spring Boot, PyTorch, Kubernetes, SOC)..."
              className="w-full text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 bg-transparent outline-none py-2"
            />
          </div>
          <button
            onClick={() => {}}
            className="w-full sm:w-auto bg-[#0062eb] hover:bg-[#0052cc] text-white px-6 py-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 whitespace-nowrap shadow-xs transition active:scale-[0.98]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Search Catalog</span>
          </button>
        </div>

        {/* Info Line Under Search Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 text-xs font-medium text-gray-500">
          <div>
            Showing{" "}
            <span className="text-gray-900 font-semibold">{filteredCount}</span>{" "}
            of{" "}
            <span className="text-gray-900 font-semibold">{totalCount}</span>{" "}
            Verified Programs • Updated for Q2 2025 Intake
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0062eb]" />
              <span className="text-gray-700">9 Physical Tech Hubs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-gray-700">1:1 Weekly Code Mentoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
