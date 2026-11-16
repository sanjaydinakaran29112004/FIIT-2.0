import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b border-slate-100 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Left Segment Tabs */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2.5 pt-2.5 transition-colors"
          >
            For Individuals
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            For Schools
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            For Colleges
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-slate-500 hover:text-slate-800 transition-colors"
          >
            For Companies
          </a>
        </div>

        {/* Right Contact Details */}
        <div className="flex items-center space-x-5">
          <a
            href="tel:+919840000000"
            className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span>+91 98400 XXXXX</span>
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-600 hover:text-emerald-600 transition-colors font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>WhatsApp Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
}
