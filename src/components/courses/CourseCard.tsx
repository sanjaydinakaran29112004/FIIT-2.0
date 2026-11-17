"use client";

import React from "react";
import { Course } from "@/data/courses";
import {
  GitBranch,
  Flame,
  Sparkles,
  Cloud,
  Cpu,
  Shield,
  Zap,
  Server,
  Layers,
  Clock,
  CheckCircle,
  Award,
  Database,
  Users,
  Search,
  Layout,
  GitCommit,
  Activity,
  Wrench,
  MapPin,
  Calendar,
} from "lucide-react";

interface CourseCardProps {
  course: Course;
  onViewSyllabus: (course: Course) => void;
  onBookDemo: (course: Course) => void;
}

export default function CourseCard({
  course,
  onViewSyllabus,
  onBookDemo,
}: CourseCardProps) {
  // Render badge icon according to variant
  const renderBadgeIcon = () => {
    switch (course.badge.variant) {
      case "orange":
        return <Flame className="w-3 h-3 text-[#E05615]" />;
      case "sky":
        return <Sparkles className="w-3 h-3 text-[#0066CC]" />;
      case "blue":
        if (course.badge.text.includes("AWS"))
          return <Cloud className="w-3 h-3 text-[#1E40AF]" />;
        if (course.badge.text.includes("LLM"))
          return <Cpu className="w-3 h-3 text-[#1D4ED8]" />;
        return <Server className="w-3 h-3 text-[#1E40AF]" />;
      case "indigo":
        return <Shield className="w-3 h-3 text-[#3730A3]" />;
      case "cyan":
        return <Zap className="w-3 h-3 text-[#0E7490]" />;
      case "amber":
        return <Zap className="w-3 h-3 text-[#B45309]" />;
      default:
        return <Sparkles className="w-3 h-3" />;
    }
  };

  const getBadgeStyle = () => {
    switch (course.badge.variant) {
      case "orange":
        return "bg-[#FFF4ED] text-[#E05615] border-[#FFD9C3]";
      case "sky":
        return "bg-[#EBF5FF] text-[#0066CC] border-[#D0E7FF]";
      case "blue":
        return "bg-[#EEF4FF] text-[#1E40AF] border-[#DBEAFE]";
      case "indigo":
        return "bg-[#F0F2FE] text-[#3730A3] border-[#DDDDFB]";
      case "cyan":
        return "bg-[#ECFEFF] text-[#0E7490] border-[#CFFAFE]";
      case "amber":
        return "bg-[#FEF8EE] text-[#B45309] border-[#FDE68A]";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const renderHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case "layers":
        return <Layers className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "clock":
        return <Clock className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "check-circle":
        return <CheckCircle className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "award":
        return <Award className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "database":
        return <Database className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "users":
        return <Users className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "cloud":
        return <Cloud className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "shield":
      case "shield-alert":
        return <Shield className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "sparkles":
        return <Sparkles className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "monitor":
        return <Layers className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "user-check":
        return <Users className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "search":
        return <Search className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "layout":
        return <Layout className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "git-commit":
        return <GitCommit className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "cpu":
        return <Cpu className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "activity":
        return <Activity className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "server":
        return <Server className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      case "wrench":
      case "tool":
        return <Wrench className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
      default:
        return <CheckCircle className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-200">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap mb-3.5">
          <span
            className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase ${
              course.category === "DATA ANALYTICS"
                ? "bg-blue-50 text-[#0062eb]"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {course.category}
          </span>
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${getBadgeStyle()}`}
          >
            {renderBadgeIcon()}
            <span>{course.badge.text}</span>
          </span>
        </div>

        {/* Path Subtitle */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0062eb] mb-1.5">
          <GitBranch className="w-3.5 h-3.5" />
          <span>{course.path}</span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onViewSyllabus(course)}
          className="text-lg font-bold text-gray-900 leading-snug mb-2 hover:text-[#0062eb] cursor-pointer transition-colors"
        >
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-3.5">
          {course.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.techTags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 hover:bg-gray-200/80 transition-colors text-gray-700 text-[11px] font-medium px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Highlights 4-grid box */}
        <div className="bg-[#F4F7FC] rounded-xl p-3 sm:p-3.5 mb-4 grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs text-gray-700 font-medium">
          {course.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2">
              {renderHighlightIcon(h.icon)}
              <span className="truncate">{h.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Details & Actions */}
      <div>
        <div className="pt-1 pb-3 text-xs text-gray-500 font-medium space-y-1">
          <div className="flex items-center gap-3">
            <span>
              Duration:{" "}
              <strong className="text-gray-700 font-semibold">
                {course.duration}
              </strong>
            </span>
            <span>•</span>
            <span>
              Format:{" "}
              <strong className="text-gray-700 font-semibold">
                {course.format}
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{course.campusLocation}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-100">
          <button
            onClick={() => onViewSyllabus(course)}
            className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-2.5 px-3 rounded-lg text-xs font-semibold text-center transition active:scale-[0.98] shadow-xs"
          >
            View Syllabus
          </button>
          <button
            onClick={() => onBookDemo(course)}
            className="flex-1 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-[0.98]"
          >
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <span>Book Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
