import React from "react";

export default function PipelineSection() {
  const steps = [
    { num: 1, stage: "DISCOVER", label: "Assessment" },
    { num: 2, stage: "LEARN", label: "Practical Theory" },
    { num: 3, stage: "PRACTISE", label: "Hands-on Labs" },
    { num: 4, stage: "BUILD", label: "Live Projects" },
    { num: 5, stage: "EXPERIENCE", label: "Internships" },
    { num: 6, stage: "EMPLOYABILITY", label: "EEP Skills" },
    { num: 7, stage: "INTERVIEW", label: "IPP Drills" },
    { num: 8, stage: "OPPORTUNITY", label: "Placement Cell" },
    { num: 9, stage: "GROWTH", label: "Alumni Network" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            HOLISTIC PIPELINE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            One career journey. Many steps. One FIIT ecosystem.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From the day you take your evaluation to your post-placement
            promotion, every milestone is structured for momentum.
          </p>
        </div>

        {/* 9 Process Steps Box Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-blue-50/50 hover:bg-blue-50 border border-blue-100/80 rounded-2xl p-4 flex flex-col items-center text-center transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                {step.num}
              </div>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-900 mb-0.5">
                {step.stage}
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                {step.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
