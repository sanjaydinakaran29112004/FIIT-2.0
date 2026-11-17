"use client";

import React from "react";
import { Branch } from "@/data/branches";
import {
  MapPin,
  Monitor,
  Clock,
  ShieldCheck,
  Check,
  UserCheck,
  Navigation,
  Calendar,
  Phone,
} from "lucide-react";

interface BranchCardProps {
  branch: Branch;
  onBookVisit: (branch: Branch) => void;
  onCallBranch: (branch: Branch) => void;
}

export default function BranchCard({
  branch,
  onBookVisit,
  onCallBranch,
}: BranchCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-200">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap mb-3.5">
          <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase bg-blue-50 text-[#0062eb] border border-blue-100">
            {branch.region}
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md border border-emerald-200 bg-emerald-50/70 text-emerald-700 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{branch.tag}</span>
          </span>
        </div>

        {/* Title & Landmark */}
        <h3 className="text-xl font-bold text-gray-900 leading-snug mb-1 flex items-start gap-2">
          <MapPin className="w-5 h-5 text-[#0062eb] shrink-0 mt-0.5" />
          <span>{branch.name}</span>
        </h3>
        <p className="text-xs font-semibold text-[#0062eb] mb-2 pl-7">
          📍 {branch.landmark}
        </p>

        {/* Full Address */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4 pl-7">
          {branch.address}
        </p>

        {/* Quick Specs Highlight Box */}
        <div className="bg-[#F8FAFD] rounded-xl p-3.5 mb-4 grid grid-cols-2 gap-x-2 gap-y-2 border border-gray-200/60 text-xs">
          <div className="flex items-center gap-2 text-gray-700">
            <Monitor className="w-4 h-4 text-[#0062eb] shrink-0" />
            <span className="font-semibold text-gray-900">{branch.workstationsCount} Coding Rigs</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium text-gray-700">{branch.timings}</span>
          </div>
        </div>

        {/* Core Specialty Banner */}
        <div className="bg-blue-50/50 rounded-xl p-3 mb-4 border border-blue-100/70 text-xs text-gray-800">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#0062eb] mb-1">
            CAMPUS SPECIALTY &amp; FOCUS
          </div>
          <div className="font-bold text-gray-900">
            {branch.specialty}
          </div>
        </div>

        {/* Hardware & Infrastructure Checklist */}
        <div className="space-y-2 mb-4">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            INFRASTRUCTURE HIGHLIGHTS
          </div>
          {branch.hardware.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Lead Mentors */}
        <div className="pt-3 border-t border-gray-100 mb-4">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
            FULL-TIME LAB MENTORS
          </div>
          <div className="space-y-1 text-xs text-gray-700">
            {branch.mentors.map((mentor, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />
                <span className="font-medium">{mentor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transit Access */}
        <div className="bg-gray-50 rounded-lg p-2.5 text-[11px] text-gray-600 flex items-start gap-2 mb-4">
          <Navigation className="w-3.5 h-3.5 text-gray-500 shrink-0 mt-0.5" />
          <span><strong>Transit:</strong> {branch.transit}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
        <button
          onClick={() => onBookVisit(branch)}
          className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-2.5 px-3 rounded-lg text-xs font-semibold text-center transition active:scale-[0.98] shadow-xs flex items-center justify-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Workstation Visit</span>
        </button>
        <button
          onClick={() => onCallBranch(branch)}
          className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-[0.98]"
        >
          <Phone className="w-3.5 h-3.5 text-gray-500" />
          <span>Call Hub</span>
        </button>
      </div>
    </div>
  );
}
