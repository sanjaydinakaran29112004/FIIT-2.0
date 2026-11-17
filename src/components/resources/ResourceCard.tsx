"use client";

import React from "react";
import { ResourceItem } from "@/data/resources";
import {
  FileText,
  Download,
  Code2,
  Video,
  Check,
  Eye,
  Clock,
  Sparkles,
  User,
} from "lucide-react";

interface ResourceCardProps {
  resource: ResourceItem;
  onDownload: (resource: ResourceItem) => void;
  onPreview: (resource: ResourceItem) => void;
}

export default function ResourceCard({
  resource,
  onDownload,
  onPreview,
}: ResourceCardProps) {
  const getFormatIcon = (format: string) => {
    switch (format) {
      case "GitHub Starter":
        return <Code2 className="w-3.5 h-3.5" />;
      case "4K Masterclass":
        return <Video className="w-3.5 h-3.5" />;
      default:
        return <FileText className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 p-6 flex flex-col justify-between shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)] transition-all duration-200">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap mb-3.5">
          <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-md uppercase bg-blue-50 text-[#0062eb] border border-blue-100 flex items-center gap-1.5">
            {getFormatIcon(resource.format)}
            <span>{resource.format}</span>
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md border border-emerald-200 bg-emerald-50/70 text-emerald-700 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{resource.badge}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2 hover:text-[#0062eb] transition-colors cursor-pointer" onClick={() => onPreview(resource)}>
          {resource.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4">
          {resource.description}
        </p>

        {/* Highlights List */}
        <div className="space-y-1.5 mb-4 bg-[#F8FAFD] rounded-xl p-3 border border-gray-200/60">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            KEY TAKEAWAYS &amp; COVERAGE
          </div>
          {resource.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {resource.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author info */}
        <div className="pt-3 border-t border-gray-100 mb-4 text-xs text-gray-600 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-medium text-gray-800">{resource.author}</span>
          </div>
          <span className="text-[11px] text-gray-500">{resource.fileSizeOrDuration}</span>
        </div>
      </div>

      {/* Footer Info & Actions */}
      <div className="pt-3 border-t border-gray-100 space-y-3">
        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <span className="font-semibold text-emerald-600">
            {resource.downloadsOrViews}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <span>{resource.estimatedReadTime}</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onDownload(resource)}
            className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-2.5 px-3 rounded-lg text-xs font-semibold text-center transition active:scale-[0.98] shadow-xs flex items-center justify-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{resource.format === "GitHub Starter" ? "Access Repo" : resource.format === "4K Masterclass" ? "Watch Masterclass" : "Download PDF"}</span>
          </button>
          <button
            onClick={() => onPreview(resource)}
            className="border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition active:scale-[0.98]"
          >
            <Eye className="w-3.5 h-3.5 text-gray-500" />
            <span>Preview</span>
          </button>
        </div>
      </div>
    </div>
  );
}
