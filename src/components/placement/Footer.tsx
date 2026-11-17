"use client";

import React from "react";
import Link from "next/link";
import { Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-gray-800/80">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0B1528] font-black text-base shadow-xs">
                F
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                FIIT <span className="text-[#0062eb]">2.0</span>
              </span>
            </div>

            <p className="text-xs font-bold tracking-wider text-gray-200 uppercase">
              DON&apos;T JUST LEARN A SKILL. BUILD A CAREER.
            </p>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Formacion Institute of Information Technology offers industry-accredited
              technical training, enterprise engineering rigor, and active placement pipelines
              across Tamil Nadu.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-1">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>ISO 9001:2015 Certified Educational Institution</span>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              PROGRAMS
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-normal">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Data Analytics &amp; BI
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Cloud Architecture
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Cyber Defense &amp; SOC
                </Link>
              </li>
            </ul>
          </div>

          {/* Career Paths */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              CAREER PATHS
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-normal">
              <li>
                <Link href="/career-paths" className="hover:text-white transition-colors">
                  Software Developer
                </Link>
              </li>
              <li>
                <Link href="/career-paths" className="hover:text-white transition-colors">
                  Data Analyst Track
                </Link>
              </li>
              <li>
                <Link href="/career-paths" className="hover:text-white transition-colors">
                  AI / ML Professional
                </Link>
              </li>
              <li>
                <Link href="/career-paths" className="hover:text-white transition-colors">
                  Cloud Architect
                </Link>
              </li>
              <li>
                <Link href="/career-paths" className="hover:text-white transition-colors">
                  Freelance Launchpad
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              ECOSYSTEM
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-normal">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Real-World Capstones
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Industry Internships
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  EEP Employability
                </Link>
              </li>
              <li>
                <Link href="/placement" className="hover:text-white transition-colors font-semibold text-[#3b82f6]">
                  IPP Interview Prep
                </Link>
              </li>
              <li>
                <Link href="/placement" className="hover:text-white transition-colors">
                  Hiring Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Branches (9) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              BRANCHES (9)
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-xs text-gray-400">
              <Link href="/branches" className="hover:text-white transition-colors">Avadi</Link>
              <Link href="/branches" className="hover:text-white transition-colors">Ambattur</Link>
              <Link href="/branches" className="hover:text-white transition-colors">RedHills</Link>
              <Link href="/branches" className="hover:text-white transition-colors">West Tambaram</Link>
              <Link href="/branches" className="hover:text-white transition-colors">Kelambakkam</Link>
              <Link href="/branches" className="hover:text-white transition-colors">Iyyappanthangal</Link>
              <Link href="/branches" className="hover:text-white transition-colors">Chengalpattu</Link>
              <Link href="/branches" className="hover:text-white transition-colors">Tiruvannamalai</Link>
              <Link href="/branches" className="hover:text-white transition-colors col-span-2">Vellore (Katpadi)</Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2025 Formacion Institute of Information Technology (FIIT). All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
