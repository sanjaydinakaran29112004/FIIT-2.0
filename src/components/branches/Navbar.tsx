"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top micro bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between text-[11px] sm:text-xs">
          {/* Audience Tabs */}
          <div className="flex items-center space-x-6">
            <span className="text-[#0062eb] font-semibold cursor-pointer">
              For Individuals
            </span>
            <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
              For Schools
            </span>
            <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
              For Colleges
            </span>
            <span className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors">
              For Companies
            </span>
          </div>

          {/* Contact Top */}
          <div className="hidden sm:flex items-center space-x-6 text-gray-600">
            <a
              href="tel:+9198480XXXXX"
              className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gray-500" />
              <span>+91 98480 XXXXX</span>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-gray-500" />
              <span>WhatsApp Connect</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5">
            {/* Square icon with letter F */}
            <div className="w-9 h-9 rounded-lg bg-[#0b132b] flex items-center justify-center text-white font-extrabold text-lg shadow-xs select-none">
              F
            </div>
            {/* FIIT Logo badge */}
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-gray-900">
                FIIT
              </span>
              <span className="text-[10px] bg-blue-50 text-[#0062eb] font-bold px-1 py-0.5 rounded border border-blue-100">
                2.0
              </span>
            </div>
            {/* Stacked Tech Education text */}
            <div className="hidden md:flex flex-col border-l border-gray-200 pl-2.5 ml-1 leading-none">
              <span className="text-xs font-black tracking-tight text-gray-900">
                FIIT 2.0
              </span>
              <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mt-0.5">
                TECH
              </span>
              <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
                EDUCATION
              </span>
            </div>
          </Link>
        </div>

        {/* Center Nav Links - "Branches" is ACTIVE */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium text-gray-600">
          <Link
            href="/"
            className="hover:text-gray-900 transition-colors py-1"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="hover:text-gray-900 transition-colors py-1"
          >
            Courses
          </Link>
          <Link
            href="/career-paths"
            className="hover:text-gray-900 transition-colors py-1"
          >
            Career Paths
          </Link>
          <Link
            href="/why-fiit"
            className="hover:text-gray-900 transition-colors py-1"
          >
            Why FIIT
          </Link>
          <Link
            href="/placement"
            className="hover:text-gray-900 transition-colors py-1"
          >
            Placement
          </Link>
          <Link
            href="/branches"
            className="text-gray-950 font-bold hover:text-black transition-colors py-1 relative border-b-2 border-[#0062eb]"
          >
            Branches
          </Link>
          <Link
            href="/resources"
            className="hover:text-gray-900 transition-colors py-1"
          >
            Resources
          </Link>
        </nav>

        {/* Right CTA / Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Call pill */}
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-gray-700 text-xs font-medium transition">
            <Phone className="w-3.5 h-3.5 text-gray-600" />
            <span>Call</span>
          </button>

          {/* WhatsApp pill */}
          <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50/70 hover:bg-gray-100 text-gray-700 text-xs font-medium transition">
            <MessageCircle className="w-3.5 h-3.5 text-gray-600" />
            <span>WhatsApp</span>
          </button>

          {/* Find My Career Path */}
          <button className="bg-[#0062eb] hover:bg-[#0052cc] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition active:scale-[0.98]">
            Find My Career Path
          </button>

          {/* User Icon Circle */}
          <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
            <User className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-600 rounded-md hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-gray-700">
            <Link href="/" className="py-1.5 px-2 hover:bg-gray-50 rounded">
              Home
            </Link>
            <Link href="/courses" className="py-1.5 px-2 hover:bg-gray-50 rounded">
              Courses
            </Link>
            <Link href="/career-paths" className="py-1.5 px-2 hover:bg-gray-50 rounded">
              Career Paths
            </Link>
            <Link href="/why-fiit" className="py-1.5 px-2 hover:bg-gray-50 rounded">
              Why FIIT
            </Link>
            <Link href="/placement" className="py-1.5 px-2 hover:bg-gray-50 rounded">
              Placement
            </Link>
            <Link
              href="/branches"
              className="py-1.5 px-2 bg-blue-50 text-[#0062eb] font-semibold rounded"
            >
              Branches
            </Link>
            <Link href="/resources" className="py-1.5 px-2 hover:bg-gray-50 rounded">
              Resources
            </Link>
          </div>
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button className="w-full bg-[#0062eb] text-white py-2 rounded-lg text-xs font-semibold">
              Find My Career Path
            </button>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-gray-200 rounded-lg text-xs font-medium">
                <Phone className="w-3.5 h-3.5" /> Call
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-gray-200 rounded-lg text-xs font-medium">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
