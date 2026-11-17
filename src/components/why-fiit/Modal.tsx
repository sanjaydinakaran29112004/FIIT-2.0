"use client";

import React, { useState } from "react";
import { X, Check, Calendar, Sparkles } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "visit" | "diagnostic" | "advisor" | null;
}

export default function Modal({ isOpen, onClose, type }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [diagnosticStep, setDiagnosticStep] = useState(1);

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

        {/* 1. VISIT / ADVISOR MODAL */}
        {(type === "visit" || type === "advisor") && (
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Appointment Confirmed!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  Our regional branch mentor will reach out within 15 minutes to
                  confirm your campus workstation tour and lab pass.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
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
                  {type === "visit" ? "CAMPUS WORKSTATION TOUR" : "1-ON-1 TECHNICAL ADVISOR"}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {type === "visit"
                    ? "Schedule a Zero-Obligation Branch Tour"
                    : "Connect with a Technical Lab Mentor"}
                </h3>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  Experience our high-RAM coding workstations, enterprise Cisco
                  racks, local Docker setups, and dedicated GPU AI rigs in person
                  across any of our 9 Tamil Nadu branches.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
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
                      placeholder="e.g. Anand Kumar"
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
                        <option>Avadi Campus Hub</option>
                        <option>Ambattur Industrial Hub</option>
                        <option>RedHills Tech Campus</option>
                        <option>Tambaram Tech Studio</option>
                        <option>Kelambakkam IT Corridor</option>
                        <option>Iyyappanthangal Campus</option>
                        <option>Chengalpattu Regional Hub</option>
                        <option>Vellore Innovation Center</option>
                        <option>Tiruvannamalai Hub</option>
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
                        Preferred Slot
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
                      Book Free Workstation Visit
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

        {/* 2. DIAGNOSTIC MODAL */}
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
                  {diagnosticStep === 1 && "What is your current educational background?"}
                  {diagnosticStep === 2 && "How much coding or programming experience do you have?"}
                  {diagnosticStep === 3 && "Which specialization aligns with your career target?"}
                  {diagnosticStep === 4 && "What is your target starting salary bracket?"}
                  {diagnosticStep === 5 && "How many hours per week can you code inside our physical hubs?"}
                  {diagnosticStep === 6 && "Which Tamil Nadu hub is easiest for your daily commute?"}
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Select the option that best fits your current situation.
                </p>

                <div className="space-y-2.5 mb-8">
                  {diagnosticStep === 1 &&
                    ["B.E / B.Tech (CS / IT / ECE)", "B.Sc / BCA / MCA", "Non-CS Engineering Branch", "Arts / Commerce / Diploma"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setDiagnosticStep(diagnosticStep + 1)}
                        className="w-full text-left p-3.5 rounded-xl border border-gray-200 hover:border-[#0062eb] hover:bg-blue-50/50 text-xs font-semibold text-gray-800 transition"
                      >
                        {opt}
                      </button>
                    ))}

                  {diagnosticStep === 2 &&
                    ["Zero Coding (Absolute Beginner)", "Know Basic Syntax (Python / C / Java)", "Built 1-2 Mini Academic Projects", "Frameworks & Backend Intermediate"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setDiagnosticStep(diagnosticStep + 1)}
                        className="w-full text-left p-3.5 rounded-xl border border-gray-200 hover:border-[#0062eb] hover:bg-blue-50/50 text-xs font-semibold text-gray-800 transition"
                      >
                        {opt}
                      </button>
                    ))}

                  {diagnosticStep >= 3 &&
                    ["Enterprise Java & Microservices", "Cloud Architecture & Kubernetes", "Applied AI & GenAI Systems", "Data Analytics & PowerBI"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setDiagnosticStep(diagnosticStep + 1)}
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
                    View Recommended Curriculum
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
      </div>
    </div>
  );
}
