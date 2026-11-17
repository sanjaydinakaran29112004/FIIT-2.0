"use client";

import React, { useState, useMemo } from "react";
import TopBar from "@/components/homepage/TopBar";
import Navbar from "@/components/homepage/Navbar";
import HeroSection from "./HeroSection";
import FilterSidebar from "./FilterSidebar";
import CourseCard from "./CourseCard";
import CareerDiagnosticSection from "./CareerDiagnosticSection";
import PhysicalAdvantageSection from "./PhysicalAdvantageSection";
import Footer from "@/components/homepage/Footer";
import Modal from "./Modal";
import { COURSES, Course } from "@/data/courses";
import { SlidersHorizontal, LayoutGrid, List } from "lucide-react";

type SortOption = "demand" | "employability" | "duration";

export default function CoursesPage() {
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDiscipline, setSelectedDiscipline] = useState("All Disciplines");
  const [selectedCareerPaths, setSelectedCareerPaths] = useState<string[]>([
    "Full Stack Developer",
    "Data Analyst & BI Specialist",
    "Cloud & Infrastructure Architect",
    "AI/ML Systems Engineer",
  ]);
  const [selectedDeliveryFormats, setSelectedDeliveryFormats] = useState<string[]>([
    "hybrid",
  ]);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState("beginner");
  const [selectedCampuses, setSelectedCampuses] = useState<string[]>([
    "Avadi",
    "Ambattur",
    "RedHills",
    "Tambaram",
    "Kelambakkam",
    "Iyyappanthangal",
    "Chengalpattu",
    "Vellore",
  ]);
  const [sortBy, setSortBy] = useState<SortOption>("demand");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Modal States
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "syllabus" | "demo" | "diagnostic" | "visit" | "instructor" | null
  >(null);
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  // Toggle helpers
  const toggleCareerPath = (path: string) => {
    setSelectedCareerPaths((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  const toggleDeliveryFormat = (fmt: string) => {
    setSelectedDeliveryFormats((prev) =>
      prev.includes(fmt) ? prev.filter((f) => f !== fmt) : [...prev, fmt]
    );
  };

  const toggleCampus = (campus: string) => {
    setSelectedCampuses((prev) =>
      prev.includes(campus)
        ? prev.filter((c) => c !== campus)
        : [...prev, campus]
    );
  };

  const resetAllFilters = () => {
    setSearchQuery("");
    setSelectedDiscipline("All Disciplines");
    setSelectedCareerPaths([
      "Full Stack Developer",
      "Data Analyst & BI Specialist",
      "Cloud & Infrastructure Architect",
      "AI/ML Systems Engineer",
    ]);
    setSelectedDeliveryFormats(["hybrid"]);
    setSelectedSkillLevel("beginner");
    setSelectedCampuses([
      "Avadi",
      "Ambattur",
      "RedHills",
      "Tambaram",
      "Kelambakkam",
      "Iyyappanthangal",
      "Chengalpattu",
      "Vellore",
    ]);
    setSortBy("demand");
  };

  // Filtered & Sorted Courses
  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesDesc = course.description.toLowerCase().includes(q);
        const matchesTech = course.techTags.some((t) =>
          t.toLowerCase().includes(q)
        );
        const matchesCat = course.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesTech && !matchesCat) {
          return false;
        }
      }

      // Discipline filter
      if (
        selectedDiscipline !== "All Disciplines" &&
        course.discipline !== selectedDiscipline
      ) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "demand") return b.demandScore - a.demandScore;
      if (sortBy === "employability")
        return b.employabilityIndex - a.employabilityIndex;
      if (sortBy === "duration") return a.durationWeeks - b.durationWeeks;
      return 0;
    });
  }, [searchQuery, selectedDiscipline, sortBy]);

  // Modal open handlers
  const handleViewSyllabus = (course: Course) => {
    setActiveCourse(course);
    setModalType("syllabus");
    setModalOpen(true);
  };

  const handleBookDemo = (course: Course) => {
    setActiveCourse(course);
    setModalType("demo");
    setModalOpen(true);
  };

  const handleOpenDiagnostic = () => {
    setActiveCourse(null);
    setModalType("diagnostic");
    setModalOpen(true);
  };

  const handleScheduleVisit = () => {
    setActiveCourse(null);
    setModalType("visit");
    setModalOpen(true);
  };

  const handleInstructorClick = () => {
    setActiveCourse(null);
    setModalType("instructor");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* 1. Global Navbar */}
      <TopBar />
      <Navbar />

      {/* 2. Hero Section with Search */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredCount={filteredCourses.length}
        totalCount={24}
      />

      {/* 3. Main Catalog Section (Filters + Courses Grid) */}
      <main className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Filter Controls Header Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
          {/* Left: Filters label and Reset button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-base">
              <SlidersHorizontal className="w-4 h-4 text-[#0062eb]" />
              <span>Filters</span>
            </div>
            <button
              onClick={resetAllFilters}
              className="text-xs font-semibold text-[#0062eb] hover:underline transition"
            >
              Reset All
            </button>
          </div>

          {/* Right Controls: Sort & Grid/List view */}
          <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                SORT BY:
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setSortBy("demand")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    sortBy === "demand"
                      ? "bg-[#0062eb] text-white shadow-xs"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Most In-Demand
                </button>
                <button
                  onClick={() => setSortBy("employability")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    sortBy === "employability"
                      ? "bg-[#0062eb] text-white shadow-xs"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Employability Index
                </button>
                <button
                  onClick={() => setSortBy("duration")}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                    sortBy === "duration"
                      ? "bg-[#0062eb] text-white shadow-xs"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Duration (Weeks)
                </button>
              </div>
            </div>

            {/* View switcher */}
            <div className="hidden sm:flex items-center border border-gray-200 rounded-md p-0.5 bg-gray-50/50">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded transition ${
                  viewMode === "grid"
                    ? "bg-white text-[#0062eb] shadow-xs"
                    : "text-gray-400 hover:text-gray-700"
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded transition ${
                  viewMode === "list"
                    ? "bg-white text-[#0062eb] shadow-xs"
                    : "text-gray-400 hover:text-gray-700"
                }`}
                title="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Catalog Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Sidebar */}
          <FilterSidebar
            selectedDiscipline={selectedDiscipline}
            setSelectedDiscipline={setSelectedDiscipline}
            selectedCareerPaths={selectedCareerPaths}
            toggleCareerPath={toggleCareerPath}
            selectedDeliveryFormats={selectedDeliveryFormats}
            toggleDeliveryFormat={toggleDeliveryFormat}
            selectedSkillLevel={selectedSkillLevel}
            setSelectedSkillLevel={setSelectedSkillLevel}
            selectedCampuses={selectedCampuses}
            toggleCampus={toggleCampus}
            onInstructorClick={handleInstructorClick}
          />

          {/* Right Courses Grid */}
          <div className="flex-1 w-full">
            {filteredCourses.length > 0 ? (
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onViewSyllabus={handleViewSyllabus}
                    onBookDemo={handleBookDemo}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                <p className="text-sm text-gray-500 mb-3">
                  No courses found matching your current filter selections.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="bg-[#0062eb] text-white px-4 py-2 rounded-lg text-xs font-semibold"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Pagination Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 pb-4 mt-4 border-t border-gray-100">
              <div className="text-xs text-gray-500 font-medium">
                Showing{" "}
                <span className="text-gray-900 font-semibold">
                  {filteredCourses.length}
                </span>{" "}
                of <span className="text-gray-900 font-semibold">24</span> Total
                Verified Courses
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs text-gray-400 hover:text-gray-700 disabled:opacity-50 transition"
                >
                  &lt;
                </button>
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                    currentPage === 1
                      ? "bg-[#0062eb] text-white shadow-xs"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  1
                </button>
                <button
                  onClick={() => setCurrentPage(2)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                    currentPage === 2
                      ? "bg-[#0062eb] text-white shadow-xs"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  2
                </button>
                <button
                  onClick={() => setCurrentPage(3)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                    currentPage === 3
                      ? "bg-[#0062eb] text-white shadow-xs"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  3
                </button>
                <button
                  disabled={currentPage === 3}
                  onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
                  className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-xs text-gray-600 hover:text-gray-900 disabled:opacity-50 transition"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Section: Career Diagnostic Algorithmic Path Finder */}
      <CareerDiagnosticSection onTakeDiagnostic={handleOpenDiagnostic} />

      {/* 5. Section: The FIIT Physical Advantage */}
      <PhysicalAdvantageSection onScheduleVisit={handleScheduleVisit} />

      {/* 6. Footer (Zero Remix in Stitch button) */}
      <Footer />

      {/* Global Interactive Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        course={activeCourse}
      />
    </div>
  );
}
