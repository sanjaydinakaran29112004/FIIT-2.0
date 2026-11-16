"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who is eligible to enroll in FIIT career programs?",
      a: "Our programs are open to college students (any engineering or arts/science degree), recent graduates, working professionals looking to transition to software or upskill, and non-IT career changers. We conduct an initial 45-minute aptitude assessment to customize your roadmap to your current foundational skills.",
    },
    {
      q: "How does the FIIT Placement Cell work?",
      a: "FIIT's dedicated Placement Cell works closely with over 48 active hiring partners across Chennai and Bangalore. Once you complete your core technical modules and enter the IPP (Interview Preparation Program), you are matched directly with enterprise recruitment drives based on verified sprint benchmarks and portfolio evaluations.",
    },
    {
      q: "Can I switch between branches or shift to hybrid learning?",
      a: "Yes! With 9 physical campuses across Tamil Nadu (including Avadi, Ambattur, Tambaram, Kelambakkam, and Vellore), students have the flexibility to utilize high-speed lab workstations at any branch or shift seamlessly between in-person lab hours and instructor-led live hybrid streams.",
    },
    {
      q: "Are FIIT certifications accredited and recognized?",
      a: "Yes, FIIT (Formacion Institute of Information Technology) is an ISO 9001:2015 Certified Educational Institution. Each candidate receives an accredited certificate along with a verified experience credential detailing their capstone architecture and GitHub repository contributions.",
    },
    {
      q: "What happens if I need extra help with challenging coding concepts?",
      a: "We maintain dedicated pair-programming lab slots with Staff Engineers and Senior Technical Mentors. If you struggle with algorithmic drills, database indexing, or cloud deployments, you receive 1-on-1 code reviews and customized refactoring drills until the concept is thoroughly mastered.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            Everything you need to know about FIIT 2.0
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Transparent answers about eligibility, course structure, placement
            processes, and campus facilities.
          </p>
        </div>

        {/* 5 Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
