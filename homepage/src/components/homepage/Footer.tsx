import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080e1d] text-slate-300 border-t border-slate-800">
      
      {/* Top 3 Value Badges Bar */}
      <div className="border-b border-slate-800/80 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-medium text-slate-400">
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

      {/* Main 5 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-sm">
                F
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                FIIT 2.0
              </span>
            </div>

            <div className="text-[11px] font-bold text-white tracking-wider uppercase">
              DON&apos;T JUST LEARN A SKILL. BUILD A CAREER.
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
              Formacion Institute of Information Technology offers
              industry-accredited technical training, enterprise engineering
              rigor, and active placement pipelines across Tamil Nadu.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>ISO 9001:2015 Certified Educational Institution</span>
            </div>
          </div>

          {/* Col 2: Programs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              PROGRAMS
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Software Engineering</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Data Analytics &amp; BI</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Artificial Intelligence</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Cloud Architecture</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Cyber Defense &amp; SOC</a></li>
            </ul>
          </div>

          {/* Col 3: Career Paths (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              CAREER PATHS
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Software Developer</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Data Analyst Track</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">AI / ML Professional</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Cloud Architect</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Freelance Launchpad</a></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              ECOSYSTEM
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Real-World Capstones</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Industry Internships</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">EEP Employability</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">IPP Interview Prep</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Hiring Network</a></li>
            </ul>
          </div>

          {/* Col 5: Branches (9) (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              BRANCHES (9)
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Avadi</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">RedHills</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Kelambakkam</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Chengalpattu</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Vellore</a></li>
              </ul>
              <ul className="space-y-2">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Ambattur</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">West Tambaram</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Iyyappanthangal</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Tiruvannamalai</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-slate-800/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2025 Formacion Institute of Information Technology (FIIT). All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition">Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-slate-300 transition">Refund Policy</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
