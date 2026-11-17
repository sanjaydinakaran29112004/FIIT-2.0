"use client";

import React, { useState } from "react";
import { X, Check, Calendar, Sparkles, MapPin, Phone } from "lucide-react";
import { Branch } from "@/data/branches";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "visit" | "call" | "diagnostic" | null;
  branch: Branch | null;
}

export default function Modal({ isOpen, onClose, type, branch }: ModalProps) {
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

        {/* 1. VISIT MODAL */}
        {type === "visit" && (
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Workstation Tour Confirmed!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  {branch ? `Your pass for ${branch.name} has been booked. ` : ""}
                  Our campus manager will call you to confirm your arrival time and assign a dedicated mentor to guide your lab demo.
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
                  ZERO-OBLIGATION CAMPUS PASS
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Schedule a Workstation Tour
                </h3>
                {branch && (
                  <p className="text-xs text-gray-600 mb-5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0062eb]" />
                    <span>Selected Hub: <strong className="text-gray-900">{branch.name}</strong></span>
                  </p>
                )}

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
                        Campus
                      </label>
                      <select
                        defaultValue={branch?.name || "Avadi Campus Hub"}
                        className="w-full text-xs border border-gray-200 rounded-lg p-2.5 outline-none focus:border-[#0062eb] bg-white"
                      >
                        <option>Avadi Campus Hub</option>
                        <option>Ambattur Industrial Tech Hub</option>
                        <option>RedHills Developer Campus</option>
                        <option>West Tambaram Regional Studio</option>
                        <option>Kelambakkam IT Corridor Hub</option>
                        <option>Iyyappanthangal Tech Hub</option>
                        <option>Chengalpattu Regional Hub</option>
                        <option>Vellore Innovation Center</option>
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
                      className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 rounded-lg text-xs font-bold transition shadow-xs flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Free Workstation Tour</span>
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

        {/* 2. CALL BRANCH MODAL */}
        {type === "call" && branch && (
          <div className="p-6 sm:p-8">
            <div className="text-[11px] font-bold text-[#0062eb] uppercase tracking-wider mb-1">
              DIRECT DESK CONNECT
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Connect with {branch.name}
            </h3>
            <p className="text-xs text-gray-600 mb-6 leading-relaxed">
              Our campus front desk and mentor coordination desk is available 7 days a week.
            </p>

            <div className="bg-[#F8FAFD] rounded-xl p-5 border border-gray-200/80 mb-6 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Direct Helpline:</span>
                <strong className="text-sm font-black text-[#0062eb]">{branch.phone}</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Working Hours:</span>
                <span className="font-semibold text-gray-800">{branch.timings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Address:</span>
                <span className="font-medium text-gray-700 max-w-xs text-right">{branch.address}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`tel:${branch.phone}`}
                className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline Now</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
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
                  {diagnosticStep === 1 && "What is your highest educational qualification?"}
                  {diagnosticStep === 2 && "How much programming experience do you have?"}
                  {diagnosticStep === 3 && "Which technical domain interests you the most?"}
                  {diagnosticStep === 4 && "What is your target starting salary package?"}
                  {diagnosticStep === 5 && "How many hours per day can you code at our physical lab?"}
                  {diagnosticStep === 6 && "Which Tamil Nadu branch is closest to your residence?"}
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Select your current status for instant algorithmic alignment.
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
                    ["Zero Coding (Absolute Beginner)", "Know Basic Syntax (Python / C / Java)", "Built 1-2 Mini Projects", "Experienced with Frameworks"].map((opt) => (
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
                    Recommended Campus: Avadi Campus Hub • High Hiring Velocity in Chennai
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
                    View Recommended Program
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
