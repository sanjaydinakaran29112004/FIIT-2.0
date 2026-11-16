"use client";

import React, { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

export default function CourseCatalogSection() {
  const [activeTab, setActiveTab] = useState("All Courses");

  const tabs = [
    "All Courses",
    "Full Stack Dev",
    "Data Analytics",
    "Artificial Intelligence",
    "Networking",
    "Cloud & DevOps",
  ];

  const courses = [
    {
      level: "BEGINNER TO ADVANCED",
      hours: "120 Lab Hours",
      category: "Full Stack Dev",
      title: "Java Full Stack Development",
      desc: "Enterprise Java, Spring Boot, Microservices, Hibernate, Angular/React frontend integration, and PostgreSQL.",
      tags: ["Java 21", "Spring Boot", "React", "Postgres"],
      mode: "Offline & Hybrid",
    },
    {
      level: "INTERMEDIATE",
      hours: "90 Lab Hours",
      category: "Data Analytics",
      title: "Data Science & Business Intelligence",
      desc: "PowerBI dashboard engineering, complex SQL queries, Python data extraction, and predictive business regression.",
      tags: ["Python", "PowerBI", "SQL Server", "Pandas"],
      mode: "Offline & Hybrid",
    },
    {
      level: "ADVANCED",
      hours: "110 Lab Hours",
      category: "Cloud & DevOps",
      title: "AWS Cloud & Kubernetes DevOps",
      desc: "AWS infrastructure automation, Docker containers, Kubernetes clusters, Jenkins pipelines, and Terraform IaC.",
      tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
      mode: "Offline & Hybrid",
    },
  ];

  const filteredCourses =
    activeTab === "All Courses"
      ? courses
      : courses.filter((c) => c.category === activeTab);

  return (
    <section id="courses-catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            CURATED COURSE CATALOG
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            Learn the skills your career needs.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Master focused technical toolsets through structured lab hours,
            industry certification, and personal mentorship.
          </p>
        </div>

        {/* Centered Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 3 Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filteredCourses.length > 0 ? filteredCourses : courses).map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Level & Hours */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {course.level}
                  </span>
                  <span className="text-xs font-bold text-blue-600">
                    {course.hours}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-6">
                  {course.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {course.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mode & Explore Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{course.mode}</span>
                </div>
                <button
                  onClick={() => {
                    const target = document.getElementById("career-advisor");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Explore Course</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
