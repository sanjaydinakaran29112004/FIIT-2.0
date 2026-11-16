import React from "react";
import { UserCheck } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Karthik S.",
      role: "Full Stack Developer • Zoho Partner",
      branch: "West Tambaram Branch",
      avatarBg: "from-blue-600 to-indigo-700",
      initials: "KS",
      before:
        "B.Sc Computer Science graduate with theoretical knowledge but zero live deployment experience.",
      journey:
        "6 Months Java Full Stack track + 2-month microservice internship + 8 IPP mock interviews.",
      after:
        "Placed as Associate Software Engineer at ₹6.2 LPA within 3 weeks of course completion.",
    },
    {
      name: "Priya R.",
      role: "Data Analyst • Retail Intelligence",
      branch: "Avadi Branch",
      avatarBg: "from-emerald-600 to-teal-700",
      initials: "PR",
      before:
        "Commerce graduate working in back-office documentation seeking a transition into technology.",
      journey:
        "Mastered SQL, PowerBI dashboards, and Python automation with dedicated EEP communication coaching.",
      after:
        "Transitioned to Data Analyst role at ₹5.4 LPA, doubling prior non-IT compensation.",
    },
    {
      name: "Arun Kumar",
      role: "Cloud Network Engineer • Managed IT",
      branch: "Ambattur Branch",
      avatarBg: "from-amber-600 to-orange-700",
      initials: "AK",
      before:
        "Mechanical engineering graduate uncertain about how to break into cloud infrastructure.",
      journey:
        "Completed Cisco routing labs, Linux server configuration, and AWS Solutions Architect modules.",
      after:
        "Hired by enterprise IT service provider in Chennai at ₹5.0 LPA.",
    },
  ];

  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            REAL PEOPLE. REAL PROGRESS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Genuine transitions from our classrooms to verified technical roles in
            Tamil Nadu and across India.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Person Profile */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-medium">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Before Box */}
                <div className="bg-slate-50/80 rounded-xl p-4 mb-3 border border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    BEFORE
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.before}
                  </p>
                </div>

                {/* FIIT Journey Box */}
                <div className="bg-blue-50/60 rounded-xl p-4 mb-3 border border-blue-100/70">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    FIIT JOURNEY
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    {item.journey}
                  </p>
                </div>

                {/* After Box */}
                <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-100/70">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    AFTER
                  </div>
                  <p className="text-xs font-semibold text-emerald-900 leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>

              {/* Bottom Branch info */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                {item.branch}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
