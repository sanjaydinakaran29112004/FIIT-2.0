"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center shadow-sm text-white font-black text-xl tracking-tighter border border-slate-700/30">
              F
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl text-slate-950 tracking-tight">
                  FIIT
                </span>
                <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                  2.0
                </span>
              </div>
              <span className="text-[9.5px] uppercase tracking-[0.22em] font-bold text-slate-500">
                TECH EDUCATION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm">
            <Link
              href="/"
              className="font-bold text-blue-600 relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:rounded-full"
            >
              Home
            </Link>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Courses
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Career Paths
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Why FIIT
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Placement
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Branches
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Resources
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919840000000"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors px-2 py-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-emerald-600 transition-colors px-2 py-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => {
                const target = document.getElementById("career-advisor");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              Find My Career Path
            </button>
            <button
              type="button"
              className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition"
              title="User Account"
            >
              <User className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => {
                const target = document.getElementById("career-advisor");
                target?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
            >
              Find Career Path
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-bold text-blue-600 bg-blue-50"
          >
            Home
          </Link>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block px-3 py-2 rounded-lg font-medium text-slate-600"
          >
            Courses
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block px-3 py-2 rounded-lg font-medium text-slate-600"
          >
            Career Paths
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block px-3 py-2 rounded-lg font-medium text-slate-600"
          >
            Why FIIT
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block px-3 py-2 rounded-lg font-medium text-slate-600"
          >
            Placement
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block px-3 py-2 rounded-lg font-medium text-slate-600"
          >
            Branches
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="block px-3 py-2 rounded-lg font-medium text-slate-600"
          >
            Resources
          </a>
        </div>
      )}
    </header>
  );
}
