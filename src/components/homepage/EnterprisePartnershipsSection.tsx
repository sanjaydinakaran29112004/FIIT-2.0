import React from "react";
import { ArrowRight } from "lucide-react";

export default function EnterprisePartnershipsSection() {
  const sectors = [
    {
      badge: "FOR LEARNERS",
      title: "For Individuals",
      desc: "Career transitions, weekend certificates, and immersive placement tracks for individual career velocity.",
      link: "Join as Individual →",
    },
    {
      badge: "STEM EDUCATION",
      title: "For Schools",
      desc: "Practical robotics, coding clubs, foundational logic, and AI literacy programs for high schools.",
      link: "School Programs →",
    },
    {
      badge: "FIIT EDGE INITIATIVE",
      title: "For Colleges",
      desc: "Campus CoEs (Center of Excellence), embedded lab credits, and integrated final placement drives.",
      link: "College Partnerships →",
    },
    {
      badge: "WORKFORCE UPSKILLING",
      title: "For Companies",
      desc: "Custom corporate training, legacy migration workshops, and hire-train-deploy engineering talent pools.",
      link: "Corporate Solutions →",
    },
  ];

  return (
    <section className="py-24 bg-[#f0f6ff]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            ENTERPRISE PARTNERSHIPS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            Ecosystem Solutions Across Sectors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are an aspiring individual engineer or an institution
            upgrading 1,000 students, FIIT delivers tailored technical curricula.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    const target = document.getElementById("career-advisor");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 text-xs"
                >
                  <span>{item.link}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
