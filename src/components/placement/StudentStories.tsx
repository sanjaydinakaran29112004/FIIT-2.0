"use client";

import React from "react";
import { PLACED_STUDENTS } from "@/data/placements";
import { Award, Quote, MapPin, CheckCircle2 } from "lucide-react";

export default function StudentStories() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>AUTHENTIC ALUMNI SUCCESS STORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
            Recent Graduate Offers &amp; Salary Transitions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mt-1">
            Real engineers from mechanical, civil, arts, and CS backgrounds who transformed their careers at our physical tech hubs.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACED_STUDENTS.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-2xl border border-gray-200/90 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header with Package */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-base font-bold text-gray-900 leading-tight">
                      {student.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#0062eb]">
                      {student.role} @ {student.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-extrabold text-sm border border-emerald-200 shadow-2xs">
                      {student.package}
                    </span>
                  </div>
                </div>

                {/* Background info */}
                <div className="bg-[#F8FAFD] rounded-xl p-3 mb-4 text-xs text-gray-600 border border-gray-100">
                  <div className="text-[10px] uppercase font-bold text-gray-400 mb-0.5">
                    PRIOR BACKGROUND
                  </div>
                  <div className="font-medium text-gray-800">{student.previousBg}</div>
                </div>

                {/* Quote */}
                <p className="text-xs text-gray-600 leading-relaxed italic mb-4">
                  &ldquo;{student.quote}&rdquo;
                </p>
              </div>

              {/* Campus Hub Footer */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  <MapPin className="w-3 h-3 text-[#0062eb]" />
                  <span>{student.campus}</span>
                </span>
                <span className="text-[#0062eb] font-semibold">{student.track}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
