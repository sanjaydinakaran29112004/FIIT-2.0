"use client";

import React, { useState } from "react";
import { Shield, ArrowRight, Users, X, CheckCircle2 } from "lucide-react";

export default function AloneCTASection() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", branch: "Avadi" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({ name: "", phone: "", branch: "Avadi" });
    }, 2500);
  };

  return (
    <section id="career-advisor" className="py-24 bg-[#0a1120] text-white relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 px-4 py-1.5 rounded-full mb-6">
          <Shield className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[11px] font-bold text-slate-200 tracking-wider uppercase">
            YOUR JOURNEY BEGINS WITH CLARITY
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-tight mb-5">
          You don&apos;t have to figure out <br className="hidden sm:inline" />
          your career alone.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          Take the first deliberate step towards building a career with clear
          direction, hands-on production skills, and verified placement support.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all transform active:scale-95"
          >
            <span>FIND MY CAREER PATH</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all"
          >
            <Users className="w-4 h-4 text-slate-400" />
            <span>TALK TO A CAREER ADVISOR</span>
          </button>
        </div>

        {/* 3 Value Pillars */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>Free 45-Min Assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>In-Person &amp; Online Options</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>9 Regional Hubs</span>
          </div>
        </div>

      </div>

      {/* Interactive Career Advisor Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Request Received!
                </h3>
                <p className="text-xs text-slate-600">
                  Our Senior Career Counselor will reach out to you within 30 minutes.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Book Free Career Consultation
                </h3>
                <p className="text-xs text-slate-600 mb-5">
                  Get a tailored career roadmap and evaluate placement readiness.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senthil Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Mobile Number (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Preferred Branch
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
                    >
                      <option value="Avadi">Avadi (Main Campus)</option>
                      <option value="Ambattur">Ambattur (Tech Park)</option>
                      <option value="West Tambaram">West Tambaram</option>
                      <option value="RedHills">RedHills</option>
                      <option value="Iyyappanthangal">Iyyappanthangal</option>
                      <option value="Kelambakkam">Kelambakkam (OMR)</option>
                      <option value="Chengalpattu">Chengalpattu</option>
                      <option value="Tiruvannamalai">Tiruvannamalai</option>
                      <option value="Vellore">Vellore</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition"
                  >
                    CONFIRM FREE APPOINTMENT
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
