"use client";

import React from "react";
import { MessageSquareQuote, Star, CheckCircle, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const stories = [
    {
      name: "Karthikeyan S.",
      background: "Mechanical Engineering (2023 Batch)",
      currentRole: "Java Full Stack Engineer at Kaar Technologies",
      hub: "Avadi Campus Hub",
      quote:
        "I tried learning Java and Spring Boot from Udemy for 6 months, but I kept getting stuck on database connection errors and Git merge conflicts. At FIIT Avadi, having a senior mentor sit next to my workstation and inspect my IntelliJ terminal solved in 5 minutes what took me weeks alone. I built 4 production capstones and cracked a 6.8 LPA offer.",
      rating: 5,
    },
    {
      name: "Priya Sundaram",
      background: "B.Com Graduate (Zero Coding)",
      currentRole: "BI Analyst at LatentView Analytics",
      hub: "West Tambaram Regional Studio",
      quote:
        "As a non-IT student, coding seemed terrifying. FIIT's PowerBI and SQL curriculum started from pure foundational logic. The daily physical lab sessions in Tambaram forced me to practice 4 hours every single day. The portfolio review sessions gave me the confidence to ace technical SQL round with live datasets.",
      rating: 5,
    },
    {
      name: "Dinesh V.",
      background: "Career Gap of 2 Years",
      currentRole: "Cloud & DevOps Engineer at Cognizant",
      hub: "Ambattur Industrial Hub",
      quote:
        "Most bootcamps won't touch candidates with a career gap. FIIT's mentors focused entirely on my GitHub commit history and Docker/Kubernetes capstones. During my interviews, the manager was shocked by how deep my Terraform knowledge was because we actually configured real AWS sandboxes in the lab.",
      rating: 5,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F8FAFD] border-b border-gray-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#0062eb]" />
            <span>AUTHENTIC STUDENT OUTCOMES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-4">
            Hear from Students Who Made the Leap from Zero to Deployed Engineers
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Real stories from mechanical graduates, non-IT degree holders, and career transitioners
            across Chennai and Vellore hubs.
          </p>
        </div>

        {/* Testimonials 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs text-gray-700 leading-relaxed italic mb-6">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-sm font-bold text-gray-900 mb-0.5">
                  {story.name}
                </div>
                <div className="text-xs text-gray-500 mb-1">
                  {story.background}
                </div>
                <div className="text-xs font-semibold text-[#0062eb] mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{story.currentRole}</span>
                </div>
                <div className="text-[11px] text-gray-400 bg-gray-50 px-2 py-1 rounded inline-block">
                  Trained at: {story.hub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
