"use client";

import React, { useState } from "react";
import { X, Check, Download, Building, Sparkles, Clock, ArrowRight, ShieldCheck } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "report" | "recruiter" | "diagnostic" | null;
}

export default function Modal({ isOpen, onClose, type }: ModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [diagnosticStep, setDiagnosticStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    rolesLookingFor: "Java Full Stack Developers",
    expectedHires: "5 - 15 Engineers",
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

        {/* 1. PLACEMENT REPORT DOWNLOAD */}
        {type === "report" && (
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Placement Report Sent!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  The complete audited 2024-2025 Placement &amp; Salary Benchmark Report has been emailed to {formData.email || "your address"}.
                </p>
                <div className="space-y-3 max-w-xs mx-auto">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Downloading audited placement report PDF...");
                    }}
                    className="w-full bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Now (6.4 MB)</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="w-full border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl text-xs font-semibold hover:bg-gray-50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[10px] font-bold tracking-wider uppercase mb-3">
                  <Download className="w-3.5 h-3.5" />
                  <span>Audited Salary Transparency</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Download Full Placement Audit Report
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  Includes complete batch breakdown, company-wise offers, tier-wise salary curves, and verified offer letter proofs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vignesh R"
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
                        placeholder="vignesh@gmail.com"
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

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 rounded-lg font-bold text-xs shadow-xs transition active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Unlock Verified Report</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 2. RECRUITER CONNECT */}
        {type === "recruiter" && (
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Recruiter Request Submitted!
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto mb-6">
                  Thank you, {formData.name}. Our Head of Corporate Partnerships will reach out within 2 business hours with candidate portfolios matching {formData.rolesLookingFor}.
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
                  <Building className="w-3.5 h-3.5" />
                  <span>Hire Production-Ready Talent</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Connect with FIIT Placement Cell
                </h3>
                <p className="text-xs text-gray-500 mb-5">
                  Pre-screened candidates with audited GitHub repositories, zero notice periods, and immediate onboarding readiness.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Malathi S (HR Lead)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zoho / Freshworks / Tech Startup"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Official Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="malathi@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Contact Number *
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
                        Target Skillset
                      </label>
                      <select
                        value={formData.rolesLookingFor}
                        onChange={(e) => setFormData({ ...formData, rolesLookingFor: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs bg-white"
                      >
                        <option>Java Full Stack Developers</option>
                        <option>Cloud &amp; DevOps Engineers</option>
                        <option>Data Analysts &amp; PowerBI</option>
                        <option>MERN Stack Engineers</option>
                        <option>AI / GenAI Engineers</option>
                        <option>Cyber Defense &amp; SOC Analysts</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1">
                        Expected Hiring Volume
                      </label>
                      <select
                        value={formData.expectedHires}
                        onChange={(e) => setFormData({ ...formData, expectedHires: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#0062eb] text-xs bg-white"
                      >
                        <option>1 - 5 Engineers</option>
                        <option>5 - 15 Engineers</option>
                        <option>15 - 30+ Engineers (Campus Drive)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0062eb] hover:bg-[#0052cc] text-white py-3 rounded-lg font-bold text-xs shadow-xs transition active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <Building className="w-4 h-4" />
                      <span>Schedule Campus Recruitment Drive</span>
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
                  2. What is your target placement compensation goal?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    "Entry Professional (₹4.5 - 6.5 LPA)",
                    "High Velocity Growth (₹6.5 - 9.5 LPA)",
                    "Premium Product Tier (₹10.0 - 18.0 LPA)",
                    "Remote / Global Contract (Flexible)",
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
