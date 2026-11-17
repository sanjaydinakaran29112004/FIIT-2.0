"use client";

import React, { useState, useMemo } from "react";
import TopBar from "@/components/homepage/TopBar";
import Navbar from "@/components/homepage/Navbar";
import HeroResources from "./HeroResources";
import FeaturedResourceBanner from "./FeaturedResourceBanner";
import ResourceCard from "./ResourceCard";
import CareerDiagnosticSection from "./CareerDiagnosticSection";
import Footer from "@/components/homepage/Footer";
import Modal from "./Modal";
import { RESOURCES_DATA, ResourceItem } from "@/data/resources";
import { ShieldCheck, ArrowRight, RotateCcw } from "lucide-react";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Resources");

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"download" | "preview" | "diagnostic" | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  // Filter resources based on query and category
  const filteredResources = useMemo(() => {
    return RESOURCES_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Resources" || item.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q)) ||
        item.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const featuredResource = useMemo(() => {
    return RESOURCES_DATA.find((r) => r.featured) || RESOURCES_DATA[0];
  }, []);

  const handleDownload = (resource: ResourceItem) => {
    setSelectedResource(resource);
    setModalType("download");
    setModalOpen(true);
  };

  const handlePreview = (resource: ResourceItem) => {
    setSelectedResource(resource);
    setModalType("preview");
    setModalOpen(true);
  };

  const handleDiagnostic = () => {
    setSelectedResource(null);
    setModalType("diagnostic");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Navbar with "Resources" Active */}
      <TopBar />
      <Navbar />

      {/* 2. Hero Section with Search, Stats, and Category Tabs */}
      <HeroResources
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        totalCount={RESOURCES_DATA.length}
        filteredCount={filteredResources.length}
      />

      {/* 3. Featured Flagship Resource Banner (e.g. TN Tech Salary Benchmark 2025) */}
      {selectedCategory === "All Resources" && !searchQuery && (
        <FeaturedResourceBanner
          featuredResource={featuredResource}
          onDownload={handleDownload}
        />
      )}

      {/* 4. Verified Technical Resources Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-[#0B1528] tracking-tight">
              {selectedCategory === "All Resources"
                ? "All Engineering Blueprints & Handbooks"
                : selectedCategory}
            </h2>
            <span className="text-xs font-semibold text-gray-500">
              Showing {filteredResources.length} items
            </span>
          </div>

          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onDownload={handleDownload}
                  onPreview={handlePreview}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#F8FAFD] rounded-2xl border border-gray-200">
              <p className="text-sm font-semibold text-gray-800 mb-1">
                No developer resources found matching your search
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Try searching with different keywords like &apos;Java&apos;, &apos;Docker&apos;, &apos;System Design&apos;, or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Resources");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0062eb] text-white text-xs font-semibold hover:bg-[#0052cc] transition shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Algorithmic Path Finder Career Diagnostic Section (Dark Navy) */}
      <CareerDiagnosticSection onTakeDiagnostic={handleDiagnostic} />

      {/* 6. Pre-Footer Call to Action Banner */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFD] rounded-2xl border border-blue-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062eb] shrink-0">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1528] mb-1">
                  Want In-Person Guidance on These Blueprints?
                </h3>
                <p className="text-xs text-gray-600 max-w-xl">
                  Walk into any of our 9 developer hubs across Chennai, Vellore, or Chengalpattu. Sit with a mentor to review your implementation code and architecture designs.
                </p>
              </div>
            </div>
            <button
              onClick={handleDiagnostic}
              className="bg-[#0B132B] hover:bg-black text-white px-6 py-3 rounded-lg text-xs font-semibold shadow-xs transition active:scale-[0.98] whitespace-nowrap flex items-center gap-2 shrink-0"
            >
              <span>Take Career Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Global 5-Column Dark Navy Footer */}
      <Footer />

      {/* Interactive Modal (Download, Preview, Diagnostic Quiz) */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        resource={selectedResource}
      />
    </div>
  );
}
