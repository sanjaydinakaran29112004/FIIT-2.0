"use client";

import React from "react";
import { Check, Headphones } from "lucide-react";

interface FilterSidebarProps {
  selectedDiscipline: string;
  setSelectedDiscipline: (discipline: string) => void;
  selectedCareerPaths: string[];
  toggleCareerPath: (path: string) => void;
  selectedDeliveryFormats: string[];
  toggleDeliveryFormat: (format: string) => void;
  selectedSkillLevel: string;
  setSelectedSkillLevel: (level: string) => void;
  selectedCampuses: string[];
  toggleCampus: (campus: string) => void;
  onInstructorClick: () => void;
}

const DISCIPLINES = [
  { name: "All Disciplines", count: 24 },
  { name: "Software Engineering", count: 8 },
  { name: "Data & Analytics", count: 4 },
  { name: "AI & Machine Learning", count: 3 },
  { name: "Cloud & DevOps", count: 4 },
  { name: "Cybersecurity & SOC", count: 3 },
  { name: "Networking (CCNA/CCNP)", count: 2 },
];

const CAREER_PATHS = [
  { id: "Full Stack Developer", label: "Full Stack Developer" },
  { id: "Data Analyst & BI Specialist", label: "Data Analyst & BI Specialist" },
  { id: "Cloud & Infrastructure Architect", label: "Cloud & Infrastructure Architect" },
  { id: "AI/ML Systems Engineer", label: "AI/ML Systems Engineer" },
  { id: "Cybersecurity Analyst", label: "Cybersecurity Analyst" },
  { id: "Non-IT Career Transition", label: "Non-IT Career Transition" },
];

const DELIVERY_FORMATS = [
  { id: "hybrid", label: "Hybrid (In-Lab + Live Mentoring)" },
  { id: "fulltime", label: "Full-Time Lab Intensive" },
  { id: "weekend", label: "Weekend Professional Cohort" },
];

const SKILL_LEVELS = [
  { id: "beginner", label: "Beginner / Zero-Coding" },
  { id: "intermediate", label: "Intermediate (Logic Ready)" },
  { id: "advanced", label: "Advanced / Practitioner" },
];

const CAMPUSES = [
  "Avadi",
  "Ambattur",
  "RedHills",
  "Tambaram",
  "Kelambakkam",
  "Iyyappanthangal",
  "Chengalpattu",
  "Vellore",
];

export default function FilterSidebar({
  selectedDiscipline,
  setSelectedDiscipline,
  selectedCareerPaths,
  toggleCareerPath,
  selectedDeliveryFormats,
  toggleDeliveryFormat,
  selectedSkillLevel,
  setSelectedSkillLevel,
  selectedCampuses,
  toggleCampus,
  onInstructorClick,
}: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-[280px] shrink-0 space-y-7">
      {/* 1. SPECIALIZATION TRACK */}
      <div>
        <h3 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3.5">
          SPECIALIZATION TRACK
        </h3>
        <div className="space-y-1.5">
          {DISCIPLINES.map((d) => {
            const isSelected = selectedDiscipline === d.name;
            return (
              <button
                key={d.name}
                onClick={() => setSelectedDiscipline(d.name)}
                className={`w-full flex items-center justify-between py-2 px-2.5 rounded-lg text-xs transition-colors text-left ${
                  isSelected
                    ? "bg-blue-50/70 text-[#0062eb] font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? "border-[#0062eb] bg-white"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-[#0062eb]" />
                    )}
                  </div>
                  <span>{d.name}</span>
                </div>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded font-semibold ${
                    isSelected
                      ? "bg-blue-100/80 text-[#0062eb]"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {d.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. TARGET CAREER PATH */}
      <div>
        <h3 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3.5">
          TARGET CAREER PATH
        </h3>
        <div className="space-y-2.5">
          {CAREER_PATHS.map((item) => {
            const checked = selectedCareerPaths.includes(item.id);
            return (
              <label
                key={item.id}
                onClick={() => toggleCareerPath(item.id)}
                className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-gray-700 hover:text-gray-900 select-none"
              >
                <div
                  className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
                    checked
                      ? "bg-[#0062eb] border-[#0062eb] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{item.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 3. DELIVERY FORMAT */}
      <div>
        <h3 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3.5">
          DELIVERY FORMAT
        </h3>
        <div className="space-y-2.5">
          {DELIVERY_FORMATS.map((item) => {
            const checked = selectedDeliveryFormats.includes(item.id);
            return (
              <label
                key={item.id}
                onClick={() => toggleDeliveryFormat(item.id)}
                className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-gray-700 hover:text-gray-900 select-none"
              >
                <div
                  className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
                    checked
                      ? "bg-[#0062eb] border-[#0062eb] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{item.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. SKILL LEVEL */}
      <div>
        <h3 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3.5">
          SKILL LEVEL
        </h3>
        <div className="space-y-2">
          {SKILL_LEVELS.map((item) => {
            const active = selectedSkillLevel === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedSkillLevel(item.id)}
                className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-between text-left transition ${
                  active
                    ? "bg-[#EBF2FF] text-[#0062eb] border border-blue-200 shadow-xs"
                    : "bg-gray-50/80 text-gray-700 hover:bg-gray-100 border border-transparent"
                }`}
              >
                <span>{item.label}</span>
                {active && <Check className="w-3.5 h-3.5 text-[#0062eb] stroke-[2.5]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. CAMPUS LAB ACCESS (9) Tamil Nadu */}
      <div>
        <h3 className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mb-3.5">
          CAMPUS LAB ACCESS (9) <span className="text-[#0062eb] font-semibold">Tamil Nadu</span>
        </h3>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2.5">
          {CAMPUSES.map((campus) => {
            const checked = selectedCampuses.includes(campus);
            return (
              <label
                key={campus}
                onClick={() => toggleCampus(campus)}
                className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700 hover:text-gray-900 select-none"
              >
                <div
                  className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
                    checked
                      ? "bg-[#0062eb] border-[#0062eb] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{campus}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 6. DIRECT ADVISOR SUPPORT CARD */}
      <div className="bg-[#EBF3FF] rounded-2xl p-4 border border-blue-100/90">
        <div className="text-[10px] font-bold text-[#0062eb] tracking-wider uppercase mb-1.5">
          DIRECT ADVISOR SUPPORT
        </div>
        <p className="text-xs text-gray-700 leading-relaxed mb-3">
          Need guidance choosing between Java, MERN, or Data Analytics for regional recruitment?
        </p>
        <button
          onClick={onInstructorClick}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#0062eb] hover:text-[#0052cc] hover:underline transition"
        >
          <Headphones className="w-3.5 h-3.5" />
          <span>Speak with an Instructor</span>
        </button>
      </div>
    </aside>
  );
}
