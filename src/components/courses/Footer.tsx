"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white pt-16 pb-12 border-t border-gray-900">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800/80">
          {/* Column 1: Brand Info (span 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-base shadow-xs select-none">
                F
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                FIIT 2.0
              </span>
            </div>

            {/* Tagline */}
            <h4 className="text-sm font-black tracking-wide text-white uppercase mt-4">
              DON&apos;T JUST LEARN A SKILL. BUILD A CAREER.
            </h4>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Formacion Institute of Information Technology offers
              industry-accredited technical training, enterprise engineering
              rigor, and active placement pipelines across Tamil Nadu.
            </p>

            {/* ISO Certification Badge */}
            <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ISO 9001:2015 Certified Educational Institution</span>
            </div>
          </div>

          {/* Column 2: PROGRAMS (span 2) */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              PROGRAMS
            </h5>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <Link
                  href="/courses?discipline=Software+Engineering"
                  className="hover:text-white transition-colors"
                >
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?discipline=Data+%26+Analytics"
                  className="hover:text-white transition-colors"
                >
                  Data Analytics &amp; BI
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?discipline=AI+%26+Machine+Learning"
                  className="hover:text-white transition-colors"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?discipline=Cloud+%26+DevOps"
                  className="hover:text-white transition-colors"
                >
                  Cloud Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/courses?discipline=Cybersecurity+%26+SOC"
                  className="hover:text-white transition-colors"
                >
                  Cyber Defense &amp; SOC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: CAREER PATHS (span 2) */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              CAREER PATHS
            </h5>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <Link
                  href="/career-paths/software-developer"
                  className="hover:text-white transition-colors"
                >
                  Software Developer
                </Link>
              </li>
              <li>
                <Link
                  href="/career-paths/data-analyst"
                  className="hover:text-white transition-colors"
                >
                  Data Analyst Track
                </Link>
              </li>
              <li>
                <Link
                  href="/career-paths/ai-ml"
                  className="hover:text-white transition-colors"
                >
                  AI / ML Professional
                </Link>
              </li>
              <li>
                <Link
                  href="/career-paths/cloud-architect"
                  className="hover:text-white transition-colors"
                >
                  Cloud Architect
                </Link>
              </li>
              <li>
                <Link
                  href="/career-paths/freelance"
                  className="hover:text-white transition-colors"
                >
                  Freelance Launchpad
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: ECOSYSTEM (span 2) */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              ECOSYSTEM
            </h5>
            <ul className="space-y-2.5 text-xs text-gray-400 font-medium">
              <li>
                <Link
                  href="/capstones"
                  className="hover:text-white transition-colors"
                >
                  Real-World Capstones
                </Link>
              </li>
              <li>
                <Link
                  href="/internships"
                  className="hover:text-white transition-colors"
                >
                  Industry Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/employability"
                  className="hover:text-white transition-colors"
                >
                  EEP Employability
                </Link>
              </li>
              <li>
                <Link
                  href="/interview-prep"
                  className="hover:text-white transition-colors"
                >
                  IPP Interview Prep
                </Link>
              </li>
              <li>
                <Link
                  href="/hiring-network"
                  className="hover:text-white transition-colors"
                >
                  Hiring Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: BRANCHES (9) (span 2) */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider mb-4">
              BRANCHES (9)
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 font-medium">
              <ul className="space-y-2.5">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Avadi
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  RedHills
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Kelambakkam
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Chengalpattu
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Vellore
                </li>
              </ul>
              <ul className="space-y-2.5">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Ambattur
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  West Tambaram
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Iyyappanthangal
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Tiruvannamalai
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <div>
            © 2025 Formacion Institute of Information Technology (FIIT). All
            rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/refund"
              className="hover:text-gray-300 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
