import React from "react";

export default function InstitutionalDifferenceSection() {
  const differences = [
    {
      num: 1,
      title: "Career-Focused Learning",
      desc: "We reverse-engineer our courses from actual job requisitions in Chennai and Bangalore instead of static textbook tables.",
    },
    {
      num: 2,
      title: "Practical Training",
      desc: "Over 70% of candidate time is spent inside terminal windows, database shells, and IDEs writing code with immediate feedback.",
    },
    {
      num: 3,
      title: "Project Development",
      desc: "You complete multi-module capstones with live deployments, automated testing suites, and public architectural readmes.",
    },
    {
      num: 4,
      title: "Internship Experience",
      desc: "Get the tangible benefit of real sprint deliverables, Jira boards, and senior reviews to validate your resume claims.",
    },
    {
      num: 5,
      title: "Employability (EEP)",
      desc: "Intensive coaching on verbal presentation, stakeholder communication, and situational workplace intelligence.",
    },
    {
      num: 6,
      title: "Placement & IPP Support",
      desc: "Continuous 1-on-1 mock interviews, ATS resume reviews, and direct interview matching through our 9 branch hubs.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            THE INSTITUTIONAL DIFFERENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            A career-first approach to technology learning.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We reject memorization-based testing. Every component of our curriculum
            mirrors the tools, deadlines, and standards demanded by elite
            engineering teams.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differences.map((d) => (
            <div
              key={d.num}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 font-black text-sm flex items-center justify-center mb-6 border border-blue-100">
                  {d.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {d.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
