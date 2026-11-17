"use client";

import React, { useState } from "react";
import { X, Check, Download, Sparkles, Compass, Clock, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { CareerPath } from "@/data/careerPaths";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "roadmap" | "enroll" | "diagnostic" | null;
  careerPath: CareerPath | null;
}

export default function Modal({ isOpen, onClose, type, careerPath }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [diagnosticStep, setDiagnosticStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    campus: "Avadi Campus Hub",
    qualification: "B.E / B.Tech (Any Branch)",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        {/* 1. ROADMAP PREVIEW & DOWNLOAD */}
        {type === "roadmap" && careerPath && (
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Full Curriculum &amp; Milestones</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {careerPath.role}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              {careerPath.duration} • {careerPath.labHours} • Average CTC: {careerPath.salaryRange}
            </p>

            <div className="space-y-3 mb-6">
              {careerPath.milestones.map((m) => (
                <div key={m.step} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-gray-900">Phase {m.step}: {m.title}</span>
                    <span className="text-[10px] text-gray-400 font-semibold">{m.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-1.5">{m.focus}</p>
                  <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Project: {m.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100 mb-6 text-xs text-blue-900">
              <span className="font-bold">Prerequisite:</span> {careerPath.prerequisite}
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  alert(`Downloading complete syllabus and interview guide for ${careerPath.role}...`);
                }}
                className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <Download className="w-4 h-4" />
                <span>Download Full Syllabus PDF</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* 2. ENROLLMENT MODAL */}
        {type === "enroll" && (
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Application Received!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  {careerPath ? `Your seat for ${careerPath.role} at ${formData.campus} is reserved. ` : ""}
                  Our admissions mentor will call you within 2 working hours to confirm your lab workstation and schedule your onboarding session.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#0B1528] text-white px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-black transition"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Q2 2025 Cohort Admissions</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Enroll in {careerPath?.role || "Engineering Track"}
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  Full workstation access across all 9 Tamil Nadu developer hubs with 1-on-1 mentor guidance.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anbarasan S"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="anbarasan@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98480 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Preferred Campus Hub
                      </label>
                      <select
                        value={formData.campus}
                        onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs bg-white"
                      >
                        <option>Avadi Campus Hub</option>
                        <option>Ambattur Industrial Tech Hub</option>
                        <option>RedHills Technology Campus</option>
                        <option>West Tambaram Campus Hub</option>
                        <option>Kelambakkam OMR Tech Hub</option>
                        <option>Iyyappanthangal Campus</option>
                        <option>Chengalpattu Industrial Hub</option>
                        <option>Vellore Innovation Center</option>
                        <option>Tiruvannamalai Regional Hub</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Educational Qualification
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs bg-white"
                      >
                        <option>B.E / B.Tech (CS / IT / ECE)</option>
                        <option>B.E / B.Tech (Non-CS Branch)</option>
                        <option>B.Sc / BCA / MCA</option>
                        <option>Arts &amp; Science / Commerce</option>
                        <option>Working Professional</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 rounded-lg font-bold text-xs shadow-xs transition active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <span>Submit Application &amp; Reserve Workstation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Includes 1-Week Risk-Free Lab Trial &amp; Code Review Session.</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 3. DIAGNOSTIC MODAL */}
        {type === "diagnostic" && (
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Algorithmic Path Finder</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                7-Step Career Diagnostic
              </h3>
              <span className="text-xs font-semibold text-[#0062eb]">
                Step {diagnosticStep} of 7
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-[#0062eb] h-full transition-all duration-300 rounded-full"
                style={{ width: `${(diagnosticStep / 7) * 100}%` }}
              />
            </div>

            {diagnosticStep === 1 && (
              <div className="space-y-4">
                <p className="text-xs font-semibold text-gray-700">
                  1. What is your primary career objective?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    "Switch to High-Paying Tech Role (₹6-12 LPA)",
                    "Transition from Non-IT / Mechanical / Civil to IT",
                    "Upskill to Modern Cloud, Microservices & GenAI",
                    "Campus Placement Prep for Tier-1 Product Companies",
                  ].map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => setDiagnosticStep(2)}
                      className="p-3 text-left rounded-xl border border-gray-200 hover:border-[#0062eb] hover:bg-blue-50/50 transition font-medium text-gray-800"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {diagnosticStep === 2 && (
              <div className="space-y-4">
                <p className="text-xs font-semibold text-gray-700">
                  2. What kind of problem solving excites you the most?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    "Enterprise Business Logic & APIs (Java, Spring, SQL)",
                    "Cloud Infrastructure & Automation (Docker, Kubernetes)",
                    "Data Analytics & Business Dashboards (PowerBI, Python)",
                    "AI Models, RAG & LLMs (LangChain, PyTorch)",
                  ].map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => setDiagnosticStep(3)}
                      className="p-3 text-left rounded-xl border border-gray-200 hover:border-[#0062eb] hover:bg-blue-50/50 transition font-medium text-gray-800"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {diagnosticStep >= 3 && (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-blue-50 text-[#0062eb] rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Highest Fit Identified: Full Stack Java &amp; Cloud (98%)
                </h4>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  Based on your responses, the Enterprise Java 21 &amp; Cloud Microservices track matches current hiring demands across Chennai IT corridors with an expected entry CTC of 5.5 - 9.2 LPA.
                </p>
                <button
                  onClick={() => {
                    setDiagnosticStep(1);
                    onClose();
                  }}
                  className="bg-[#0062eb] text-white px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#0052cc] transition"
                >
                  View Tailored Curriculum
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
