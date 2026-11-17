"use client";

import React, { useState } from "react";
import { X, Check, Download, Sparkles, BookOpen, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { ResourceItem } from "@/data/resources";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "download" | "preview" | "diagnostic" | null;
  resource: ResourceItem | null;
}

export default function Modal({ isOpen, onClose, type, resource }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [diagnosticStep, setDiagnosticStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Student / Fresh Graduate",
  });

  if (!isOpen) return null;

  const handleDownloadSubmit = (e: React.FormEvent) => {
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

        {/* 1. DOWNLOAD / ACCESS MODAL */}
        {type === "download" && (
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Access Granted!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  {resource ? `"${resource.title}" has been sent to ${formData.email || "your email"}.` : "Your resource link is ready."} You can also download or view it directly below.
                </p>
                <div className="space-y-3 max-w-xs mx-auto">
                  <a
                    href="#downloaded"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Starting direct download...");
                    }}
                    className="w-full bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download File Now ({resource?.fileSizeOrDuration || "PDF"})</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="w-full border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl text-xs font-semibold hover:bg-gray-50 transition"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-3">
                  <Download className="w-3.5 h-3.5" />
                  <span>Instant Resource Access</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Get Free Access to Blueprint
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  {resource ? `Downloading: ${resource.title}` : "Fill in your details for instant download link."}
                </p>

                {resource && (
                  <div className="bg-[#F8FAFD] rounded-xl p-4 mb-5 border border-gray-200/80 text-xs text-gray-700 space-y-1.5">
                    <div className="font-semibold text-gray-900">{resource.title}</div>
                    <div className="text-gray-500 text-[11px]">{resource.fileSizeOrDuration} • {resource.author}</div>
                  </div>
                )}

                <form onSubmit={handleDownloadSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Work / Academic Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ramesh@gmail.com"
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
                        placeholder="+91 98480 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Current Profile
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs bg-white"
                    >
                      <option>Student / Fresh Graduate</option>
                      <option>Working Professional (0 - 2 Years)</option>
                      <option>Experienced Engineer (2 - 5 Years)</option>
                      <option>Non-IT Career Transitioner</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 rounded-lg font-bold text-xs shadow-xs transition active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Unlock &amp; Download Blueprint</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                    <span>Instant access without verification delays.</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 2. PREVIEW MODAL */}
        {type === "preview" && resource && (
          <div className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Blueprint Preview</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {resource.title}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Curated by {resource.author} ({resource.authorRole}) • {resource.fileSizeOrDuration}
            </p>

            <div className="space-y-4 text-xs text-gray-700 mb-6">
              <div className="bg-[#F8FAFD] p-4 rounded-xl border border-gray-200/80">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0062eb] mb-1">
                  EXECUTIVE SUMMARY
                </div>
                <p className="leading-relaxed text-gray-600">
                  {resource.description}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                  MODULES &amp; CHAPTER OUTLINE
                </div>
                <div className="space-y-2">
                  {resource.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-gray-50 border border-gray-100">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0062eb] font-bold text-[10px] flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-medium text-gray-800">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {resource.tags.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-[#0062eb] font-medium border border-blue-100">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  setSubmitted(false);
                  // switch to download
                  (type as any) = "download";
                }}
                className="flex-1 bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 px-4 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <Download className="w-4 h-4" />
                <span>Get Full File ({resource.fileSizeOrDuration})</span>
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
                  1. What is your current highest educational qualification?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    "B.E / B.Tech (CSE, IT, ECE)",
                    "B.E / B.Tech (Mechanical, Civil, EEE)",
                    "B.Sc / BCA / MCA",
                    "Arts / Science / Commerce (Non-CS)",
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
                  2. How comfortable are you with terminal commands &amp; writing code?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    "Complete Beginner (Zero Coding Experience)",
                    "Basic Syntax (Know C, Java, or Python Loops)",
                    "Intermediate (Built basic projects or APIs)",
                    "Comfortable (Work with Git, SQL, & Frameworks)",
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
