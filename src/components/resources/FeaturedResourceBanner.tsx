"use client";

import React from "react";
import { ResourceItem } from "@/data/resources";
import { Sparkles, Download, CheckCircle2, TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

interface FeaturedResourceBannerProps {
  onDownload: (resource: ResourceItem) => void;
  featuredResource: ResourceItem;
}

export default function FeaturedResourceBanner({
  onDownload,
  featuredResource,
}: FeaturedResourceBannerProps) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0B1528] via-[#111C38] to-[#1C2A54] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl border border-blue-900/40 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              {/* Top Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold tracking-wider uppercase mb-4 border border-blue-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>FEATURED INDUSTRY BENCHMARK • 2025 EDITION</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                {featuredResource.title}
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 max-w-2xl">
                {featuredResource.description}
              </p>

              {/* Highlights 2-col */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs text-gray-200">
                {featuredResource.highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Author & Stats footer */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 border-t border-blue-900/60">
                <span className="font-semibold text-white">
                  Curated by: {featuredResource.author}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">
                  {featuredResource.downloadsOrViews}
                </span>
                <span>•</span>
                <span>{featuredResource.fileSizeOrDuration}</span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
              <button
                onClick={() => onDownload(featuredResource)}
                className="w-full bg-[#0062eb] hover:bg-[#0052cc] text-white py-3.5 px-6 rounded-xl text-xs font-bold transition active:scale-[0.98] shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Full Report (PDF)</span>
              </button>

              <div className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 py-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Free instant download • No spam guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
