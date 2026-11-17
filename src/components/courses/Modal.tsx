"use client";

import React, { useState } from "react";
import { X, Check, Download, Calendar, Sparkles } from "lucide-react";
import { Course } from "@/data/courses";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "syllabus" | "demo" | "diagnostic" | "visit" | "instructor" | null;
  course: Course | null;
}

export default function Modal({ isOpen, onClose, type, course }: ModalProps) {
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [diagnosticStep, setDiagnosticStep] = useState(1);
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<number, string>>({});

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 1. SYLLABUS MODAL */}
        {type === "syllabus" && course && (
          <div className="p-6 sm:p-8">
            <div className="text-[11px] font-bold text-[#0062eb] uppercase tracking-wider mb-1">
              {course.category} • CURRICULUM
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {course.title}
            </h3>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              {course.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-blue-50/60 p-4 rounded-xl border border-blue-100/60 mb-6 text-xs">
              <div>
                <span className="text-gray-500 block">Duration</span>
                <strong className="text-gray-900 font-semibold">{course.duration}</strong>
              </div>
              <div>
                <span className="text-gray-500 block">Format</span>
                <strong className="text-gray-900 font-semibold">{course.format}</strong>
              </div>
              <div>
                <span className="text-gray-500 block">Placement Rate</span>
                <strong className="text-[#0062eb] font-semibold">{course.employabilityIndex}% Index</strong>
              </div>
              <div>
                <span className="text-gray-500 block">Level</span>
                <strong className="text-gray-900 font-semibold capitalize">{course.level}</strong>
              </div>
            </div>

            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
              Technologies &amp; Frameworks Covered
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {course.techTags.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
              Course Highlights &amp; Capstones
            </h4>
            <ul className="space-y-2 mb-8 text-xs text-gray-700">
              {course.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0062eb]" />
                  <span>{h.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => alert("Syllabus PDF downloaded successfully!")}
                className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Detailed Syllabus (PDF)</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* 2. BOOK DEMO MODAL */}
        {type === "demo" && (
          <div className="p-6 sm:p-8">
            {demoSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Demo Session Booked!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  Our academic advisor will call you to confirm your hands-on
                  demo lab slot at your chosen FIIT branch.
                </p>
                <button
                  onClick={() => {
                    setDemoSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#0062eb] text-white px-6 py-2.5 rounded-lg text-xs font-semibold"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="text-[11px] font-bold text-[#0062eb] uppercase tracking-wider mb-1">
                  1-ON-1 DEMO LAB
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Book a Live Lab Demo
                </h3>
                {course && (
                  <p className="text-xs text-gray-600 mb-5">
                    Course: <strong className="text-gray-900">{course.title}</strong>
                  </p>
                )}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setDemoSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sundaram"
                      className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98480 XXXXX"
                        className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Preferred Campus
                      </label>
                      <select className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb] bg-white">
                        <option>Avadi Campus</option>
                        <option>Ambattur Campus</option>
                        <option>RedHills Campus</option>
                        <option>Tambaram Campus</option>
                        <option>Kelambakkam Campus</option>
                        <option>Iyyappanthangal Campus</option>
                        <option>Chengalpattu Campus</option>
                        <option>Vellore Campus</option>
                        <option>Tiruvannamalai Campus</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        defaultValue="2026-11-20"
                        className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Time Slot
                      </label>
                      <select className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb] bg-white">
                        <option>Morning (10:00 AM - 12:00 PM)</option>
                        <option>Afternoon (02:00 PM - 04:00 PM)</option>
                        <option>Evening (06:00 PM - 08:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 rounded-lg text-xs font-bold transition shadow-xs"
                    >
                      Confirm Free Demo Booking
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 3. DIAGNOSTIC MODAL */}
        {type === "diagnostic" && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold text-[#0062eb] uppercase tracking-wider">
                7-STEP CAREER DIAGNOSTIC
              </span>
              <span className="text-xs font-semibold text-gray-500">
                Step {diagnosticStep} of 7
              </span>
            </div>

            {diagnosticStep < 7 ? (
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {diagnosticStep === 1 && "What is your highest educational background?"}
                  {diagnosticStep === 2 && "How much coding or programming experience do you have?"}
                  {diagnosticStep === 3 && "Which domain excites you the most?"}
                  {diagnosticStep === 4 && "What is your target starting compensation?"}
                  {diagnosticStep === 5 && "How many hours per week can you dedicate to physical lab coding?"}
                  {diagnosticStep === 6 && "Which Tamil Nadu branch is closest to you?"}
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Select the option that best describes your current status.
                </p>

                <div className="space-y-2.5 mb-8">
                  {diagnosticStep === 1 &&
                    ["B.E / B.Tech (CS/IT/ECE)", "B.Sc / BCA / MCA", "Non-CS Engineering", "Arts / Commerce / Diploma"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setDiagnosticAnswers({ ...diagnosticAnswers, [diagnosticStep]: opt });
                          setDiagnosticStep(diagnosticStep + 1);
                        }}
                        className="w-full text-left p-3.5 rounded-xl border border-gray-200 hover:border-[#0062eb] hover:bg-blue-50/50 text-xs font-semibold text-gray-800 transition"
                      >
                        {opt}
                      </button>
                    ))}

                  {diagnosticStep === 2 &&
                    ["Zero Coding (Absolute Beginner)", "Know Basic Syntax (C/Python/Java)", "Built 1-2 Mini Projects", "Experienced with Frameworks"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setDiagnosticAnswers({ ...diagnosticAnswers, [diagnosticStep]: opt });
                          setDiagnosticStep(diagnosticStep + 1);
                        }}
                        className="w-full text-left p-3.5 rounded-xl border border-gray-200 hover:border-[#0062eb] hover:bg-blue-50/50 text-xs font-semibold text-gray-800 transition"
                      >
                        {opt}
                      </button>
                    ))}

                  {diagnosticStep >= 3 &&
                    ["Full Stack Software Development", "Cloud & DevOps Infrastructure", "Data Analytics & Business Intelligence", "Applied AI & GenAI Systems"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setDiagnosticAnswers({ ...diagnosticAnswers, [diagnosticStep]: opt });
                          setDiagnosticStep(diagnosticStep + 1);
                        }}
                        className="w-full text-left p-3.5 rounded-xl border border-gray-200 hover:border-[#0062eb] hover:bg-blue-50/50 text-xs font-semibold text-gray-800 transition"
                      >
                        {opt}
                      </button>
                    ))}
                </div>

                <div className="flex justify-between items-center text-xs">
                  {diagnosticStep > 1 && (
                    <button
                      onClick={() => setDiagnosticStep(diagnosticStep - 1)}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      &larr; Back
                    </button>
                  )}
                  <span className="text-gray-400 ml-auto">Free evaluation • Instant match</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-blue-50 text-[#0062eb] rounded-2xl flex items-center justify-center mx-auto mb-3 border border-blue-100">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Diagnostic Result Ready!
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Based on your responses, here is your highest alignment:
                </p>

                <div className="bg-[#131F37] text-white p-5 rounded-2xl text-left mb-6 border border-blue-900/40">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">
                      Recommended Career Track
                    </span>
                    <span className="text-lg font-black text-blue-400">98% Match</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Java Full Stack Engineering &amp; Cloud Microservices
                  </h4>
                  <p className="text-xs text-gray-300">
                    Expected Placement Window: 16 Weeks • High Hiring Velocity in Chennai &amp; Vellore
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setDiagnosticStep(1);
                      onClose();
                    }}
                    className="flex-1 bg-[#0062eb] text-white py-3 rounded-lg text-xs font-bold"
                  >
                    Enroll in Recommended Program
                  </button>
                  <button
                    onClick={() => {
                      setDiagnosticStep(1);
                      onClose();
                    }}
                    className="px-5 py-3 border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. SCHEDULE VISIT / INSTRUCTOR MODAL */}
        {(type === "visit" || type === "instructor") && (
          <div className="p-6 sm:p-8">
            <div className="text-[11px] font-bold text-[#0062eb] uppercase tracking-wider mb-1">
              {type === "visit" ? "CAMPUS WORKSTATION TOUR" : "ACADEMIC ADVISORY"}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {type === "visit"
                ? "Schedule a Branch Visit & Lab Tour"
                : "Speak with a Senior Technical Instructor"}
            </h3>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Experience our high-speed coding rigs, Cisco racks, and meet mentors in person across any of our 9 Tamil Nadu developer hubs.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Your appointment has been registered! Our regional branch manager will reach out within 15 minutes.");
                onClose();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98480 XXXXX"
                    className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Select Branch
                  </label>
                  <select className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb] bg-white">
                    <option>Avadi Hub</option>
                    <option>Ambattur Hub</option>
                    <option>RedHills Hub</option>
                    <option>Tambaram Hub</option>
                    <option>Kelambakkam Hub</option>
                    <option>Iyyappanthangal Hub</option>
                    <option>Chengalpattu Hub</option>
                    <option>Vellore Hub</option>
                    <option>Tiruvannamalai Hub</option>
                  </select>
                </div>
              </div>
              <div className="pt-3 flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 rounded-lg text-xs font-bold transition shadow-xs"
                >
                  Schedule Appointment
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
