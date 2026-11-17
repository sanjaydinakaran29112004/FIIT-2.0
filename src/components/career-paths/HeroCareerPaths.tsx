"use client";

import React from "react";
import Link from "next/link";
import { Search, Compass, Target, TrendingUp, CheckCircle2 } from "lucide-react";

interface HeroCareerPathsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedDiscipline: string;
  setSelectedDiscipline: (d: string) => void;
  totalCount: number;
  filteredCount: number;
}

const DISCIPLINES = [
  "All Tracks",
  "Software Engineering",
  "Cloud & DevOps",
  "Data & Analytics",
  "Artificial Intelligence",
  "Cybersecurity",
];

export default function HeroCareerPaths({
  searchQuery,
  setSearchQuery,
  selectedDiscipline,
  setSelectedDiscipline,
  totalCount,
  filteredCount,
}: HeroCareerPathsProps) {
  return (
    <section className="bg-gradient-to-b from-[#F2F6FC] via-[#F6F9FD] to-white pt-6 pb-10 border-b border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-5 font-medium">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-900 font-semibold">Career Paths</span>
        </div>

        {/* Hero Top Grid */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
          {/* Left Text */}
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EEFF] text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb]" />
              <span>5-YEAR SALARY TRAJECTORY &amp; PROMOTION BLUEPRINTS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0B1528] tracking-tight leading-[1.15] mb-4">
              CALIBRATED CAREER TRAJECTORIES &amp; PROMOTION TRACKS
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed max-w-2xl">
              Don&apos;t settle for dead-end 3.5 LPA mass recruiter service desks. Select a calibrated 12-16 week
              engineering track engineered with Tier-1 GCC hiring managers. Map your exact journey
              from Associate Engineer to Senior Architect commanding ₹20 LPA+ within 4 years.
            </p>
          </div>

          {/* Right Stat Cards */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4 self-start lg:self-center">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <TrendingUp className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  3.2x Velocity
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Average 3-Year Salary Multiplier
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-5 border border-blue-100/80 shadow-[0_4px_20px_-4px_rgba(0,98,235,0.06)] flex items-center gap-4 min-w-[240px]">
              <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0062eb]">
                <Target className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <div className="text-2xl font-black text-[#0B1528] tracking-tight">
                  ₹6.5 - 18.4 LPA
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Verified Entry Placement Packages
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Discipline Filter Bar */}
        <div className="bg-white rounded-xl border border-gray-200/90 p-2 shadow-xs flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="flex items-center gap-3 w-full px-3 py-1">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by target role, tech stack, or persona (e.g. Java, SRE, Non-CS, PowerBI, GenAI, SOC)..."
              className="w-full text-xs sm:text-sm text-gray-800 placeholder:text-gray-400 bg-transparent outline-none py-1.5"
            />
          </div>

          {/* Discipline Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto px-1 py-1 shrink-0">
            {DISCIPLINES.map((discipline) => (
              <button
                key={discipline}
                onClick={() => setSelectedDiscipline(discipline)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                  selectedDiscipline === discipline
                    ? "bg-[#0062eb] text-white shadow-xs"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600 border border-transparent"
                }`}
              >
                {discipline}
              </button>
            ))}
          </div>
        </div>

        {/* Sub Info Line */}
        <div className="flex items-center justify-between text-xs font-medium text-gray-500 mt-4">
          <div>
            Showing <span className="text-gray-900 font-semibold">{filteredCount}</span> of{" "}
            <span className="text-gray-900 font-semibold">{totalCount}</span> Calibrated Engineering Career Trajectories
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0062eb]" />
              <span>Full Workstation Access Included</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>1:1 Weekly Code &amp; PR Mentorship</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
