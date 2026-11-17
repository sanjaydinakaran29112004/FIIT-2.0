"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-40">
      {/* 1. Micro Top Bar */}
      <div className="border-b border-gray-100 bg-[#FAFCFF] text-[11px] text-gray-600">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-[#0062eb] font-semibold border-b-2 border-[#0062eb] py-1.5"
            >
              For Individuals
            </Link>
            <Link href="/" className="hover:text-gray-900 transition-colors py-1.5">
              For Schools
            </Link>
            <Link href="/" className="hover:text-gray-900 transition-colors py-1.5">
              For Colleges
            </Link>
            <Link href="/" className="hover:text-gray-900 transition-colors py-1.5">
              For Companies
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-5 text-gray-500 font-medium">
            <a
              href="tel:+9198480XXXXX"
              className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
            >
              <Phone className="w-3 h-3 text-gray-400" />
              <span>+91 98480 XXXXX</span>
            </a>
            <a
              href="https://wa.me/9198480XXXXX"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-800 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-gray-400" />
              <span>WhatsApp Connect</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#0B1528] flex items-center justify-center text-white font-black text-lg tracking-tight shadow-xs">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-[#0B1528] leading-none">
                FIIT <span className="text-[#0062eb] text-xs font-bold">2.0</span>
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 leading-tight">
                Tech Education
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/courses" className="hover:text-gray-900 transition-colors">
              Courses
            </Link>
            <Link href="/career-paths" className="hover:text-gray-900 transition-colors">
              Career Paths
            </Link>
            <Link href="/why-fiit" className="hover:text-gray-900 transition-colors">
              Why FIIT
            </Link>
            <Link
              href="/placement"
              className="text-[#0062eb] font-semibold border-b-2 border-[#0062eb] pb-0.5"
            >
              Placement
            </Link>
            <Link href="/branches" className="hover:text-gray-900 transition-colors">
              Branches
            </Link>
            <Link href="/resources" className="hover:text-gray-900 transition-colors">
              Resources
            </Link>
          </nav>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition active:scale-[0.98]">
            <Phone className="w-3.5 h-3.5 text-gray-500" />
            <span>Call</span>
          </button>

          <button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition active:scale-[0.98]">
            <MessageSquare className="w-3.5 h-3.5 text-gray-500" />
            <span>WhatsApp</span>
          </button>

          <button className="bg-[#0062eb] hover:bg-[#0052cc] text-white text-xs font-semibold px-4 py-2 rounded-lg transition active:scale-[0.98] shadow-xs">
            Find My Career Path
          </button>

          <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 ml-1">
            <User className="w-4 h-4" />
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2 text-xs font-medium text-gray-700">
          <Link href="/" className="block py-1.5 hover:text-[#0062eb]">Home</Link>
          <Link href="/courses" className="block py-1.5 hover:text-[#0062eb]">Courses</Link>
          <Link href="/career-paths" className="block py-1.5 hover:text-[#0062eb]">Career Paths</Link>
          <Link href="/why-fiit" className="block py-1.5 hover:text-[#0062eb]">Why FIIT</Link>
          <Link href="/placement" className="block py-1.5 text-[#0062eb] font-semibold">Placement</Link>
          <Link href="/branches" className="block py-1.5 hover:text-[#0062eb]">Branches</Link>
          <Link href="/resources" className="block py-1.5 hover:text-[#0062eb]">Resources</Link>
        </div>
      )}
    </header>
  );
}
