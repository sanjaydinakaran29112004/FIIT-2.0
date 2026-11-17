"use client";

import React, { useState } from "react";
import { CareerPath } from "@/data/careerPaths";
import {
  Compass,
  Briefcase,
  TrendingUp,
  Clock,
  Laptop,
  Check,
  ChevronDown,
  ChevronUp,
  Building,
  ArrowRight,
  Sparkles,
  MapPin,
  UserCheck,
} from "lucide-react";

interface CareerPathCardProps {
  careerPath: CareerPath;
  onSelectRoadmap: (path: CareerPath) => void;
  onApplyTrack: (path: CareerPath) => void;
}

export default function CareerPathCard({
  careerPath,
  onSelectRoadmap,
  onApplyTrack,
}: CareerPathCardProps) {
  const [expandedMilestones, setExpandedMilestones] = useState(false);
  const [expandedLadder, setExpandedLadder] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-7 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap mb-3.5">
          <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase bg-blue-50 text-[#0062eb] border border-blue-100">
            {careerPath.discipline}
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md border border-emerald-200 bg-emerald-50/80 text-emerald-800 flex items-center gap-1.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{careerPath.growthMultiplier}</span>
          </span>
        </div>

        {/* Role Title */}
        <h3
          className="text-xl sm:text-2xl font-black text-gray-900 leading-tight mb-2 hover:text-[#0062eb] transition-colors cursor-pointer"
          onClick={() => onSelectRoadmap(careerPath)}
        >
          {careerPath.role}
        </h3>

        {/* Candidate Persona Callout */}
        <div className="bg-blue-50/60 rounded-xl p-3 mb-4 border border-blue-100/70 text-xs text-blue-950 flex items-start gap-2">
          <UserCheck className="w-4 h-4 text-[#0062eb] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#0062eb]">Who This Track Is For: </span>
            <span className="font-medium text-gray-700">{careerPath.candidatePersona}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
          {careerPath.description}
        </p>

        {/* Salary & Metrics Grid */}
        <div className="bg-[#F8FAFD] rounded-2xl p-4 mb-5 border border-gray-200/70 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-400">
              ENTRY PLACEMENT CTC
            </div>
            <div className="font-extrabold text-[#0062eb] text-sm mt-0.5">
              {careerPath.salaryRange}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-400">
              3-YEAR TARGET BRACKET
            </div>
            <div className="font-extrabold text-emerald-600 text-sm mt-0.5">
              {careerPath.topSalary}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-400">
              PROGRAM DURATION
            </div>
            <div className="font-bold text-gray-900 text-sm mt-0.5">
              {careerPath.duration}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-gray-400">
              LAB CODING RIGOR
            </div>
            <div className="font-bold text-gray-900 text-sm mt-0.5">
              {careerPath.labHours}
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            PRODUCTION TECH STACK MASTERED
          </div>
          <div className="flex flex-wrap gap-1.5">
            {careerPath.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4-Phase Roadmap Milestones Timeline */}
        <div className="mb-4 border border-gray-100 rounded-2xl p-4 bg-white shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#0062eb]" />
              <span>Calibrated 4-Phase Milestone Path</span>
            </span>
            <button
              onClick={() => setExpandedMilestones(!expandedMilestones)}
              className="text-[11px] font-semibold text-[#0062eb] hover:underline flex items-center gap-1"
            >
              <span>{expandedMilestones ? "Collapse" : "Show All Phases"}</span>
              {expandedMilestones ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <div className="space-y-3">
            {careerPath.milestones
              .slice(0, expandedMilestones ? 4 : 2)
              .map((milestone) => (
                <div
                  key={milestone.step}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#FAFCFF] border border-blue-50/80"
                >
                  <div className="w-6 h-6 rounded-full bg-[#0062eb] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {milestone.step}
                  </div>
                  <div className="text-xs">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-bold text-gray-900">
                        {milestone.title}
                      </span>
                      <span className="text-[10px] text-gray-400 font-semibold">
                        ({milestone.duration})
                      </span>
                    </div>
                    <p className="text-gray-600 text-[11px] mb-1 leading-relaxed">
                      {milestone.focus}
                    </p>
                    <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Deliverable: {milestone.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* 5-Year Ladder Preview Dropdown */}
        <div className="mb-4">
          <button
            onClick={() => setExpandedLadder(!expandedLadder)}
            className="w-full text-left p-3 rounded-xl bg-gray-50 hover:bg-gray-100/80 border border-gray-200/80 text-xs font-bold text-gray-700 flex items-center justify-between transition"
          >
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#0062eb]" />
              <span>View 5-Year Designation &amp; Salary Ladder ({careerPath.growthMultiplier})</span>
            </span>
            {expandedLadder ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
          </button>

          {expandedLadder && (
            <div className="mt-2 space-y-2 p-3 bg-[#F8FAFD] rounded-xl border border-gray-200/70 text-xs">
              {careerPath.progressionLadder.map((stage, idx) => (
                <div key={idx} className="flex items-start justify-between gap-3 p-2 bg-white rounded-lg border border-gray-100">
                  <div>
                    <span className="font-bold text-gray-900">{stage.experience}: {stage.designation}</span>
                    <p className="text-[11px] text-gray-500 mt-0.5">{stage.responsibilities}</p>
                  </div>
                  <span className="font-black text-[#0062eb] whitespace-nowrap text-xs">{stage.expectedCTC}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Regional Tamil Nadu Hiring Corridor */}
        <div className="bg-gray-50 rounded-xl p-3 mb-4 text-[11px] text-gray-600 flex items-start gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#0062eb] shrink-0 mt-0.5" />
          <div>
            <strong>Active Hiring Corridors: </strong> {careerPath.tnEcosystemDemand}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-2.5">
        <button
          onClick={() => onApplyTrack(careerPath)}
          className="w-full sm:flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-2.5 px-4 rounded-xl text-xs font-semibold text-center transition active:scale-[0.98] shadow-xs flex items-center justify-center gap-2"
        >
          <span>Enroll in This Track</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => onSelectRoadmap(careerPath)}
          className="w-full sm:w-auto border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-[0.98]"
        >
          <span>View Full Roadmap</span>
        </button>
      </div>
    </div>
  );
}
