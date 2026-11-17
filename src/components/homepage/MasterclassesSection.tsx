import React from "react";
import { ArrowRight, Clock } from "lucide-react";

export default function MasterclassesSection() {
  const classes = [
    {
      timing: "SAT, 10:00 AM - 1:00 PM",
      mode: "HYBRID",
      title: "Cracking Data Structures on the Whiteboard",
      desc: "Live problem walkthroughs on arrays, trees, and hash maps with real-time feedback from our faculty heads.",
      seats: "12 Seats Left",
      seatsColor: "text-rose-600 font-bold",
    },
    {
      timing: "SUN, 2:00 PM - 5:00 PM",
      mode: "IN-BRANCH",
      title: "Building Production Resumes that Pass ATS",
      desc: "Bring your current draft. Leave with an enterprise-calibrated resume and tailored GitHub portfolio links.",
      seats: "5 Seats Left",
      seatsColor: "text-rose-600 font-bold",
    },
    {
      timing: "WED, 6:00 PM - 8:30 PM",
      mode: "LIVE STREAM",
      title: "Navigating the Cloud & AI Revolution in 2025",
      desc: "A strategic overview of emerging role titles, salary projections, and high-leverage certifications.",
      seats: "Open Registration",
      seatsColor: "text-blue-600 font-bold",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            FAST-TRACK MASTERCLASSES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            BEFORE THE CAMPUS DRIVE.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Intensive, high-impact preparatory workshops scheduled across our
            branches and live-streamed directly to students.
          </p>
        </div>

        {/* 3 Masterclass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((c, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{c.timing}</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 tracking-wider">
                    {c.mode}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-8">
                  {c.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className={c.seatsColor}>{c.seats}</span>
                <button
                  onClick={() => {
                    const target = document.getElementById("career-advisor");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Reserve Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
