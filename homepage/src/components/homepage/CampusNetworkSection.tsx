"use client";

import React, { useState } from "react";
import { Phone, MapPin, ExternalLink, Navigation } from "lucide-react";

export default function CampusNetworkSection() {
  const [selectedBranch, setSelectedBranch] = useState("Chennai, Tamil Nadu");

  const branches = [
    {
      name: "Avadi Branch",
      tag: "MAIN CAMPUS",
      tagColor: "bg-blue-100 text-blue-800",
      address: "Near Railway Station, New Military Road, Avadi, Chennai - 600054.",
      mapQuery: "Avadi Railway Station, Chennai, Tamil Nadu",
    },
    {
      name: "Ambattur Branch",
      tag: "TECH PARK HUB",
      tagColor: "bg-blue-100 text-blue-800",
      address: "OTI Bus Stand Opp, MTH Road, Ambattur, Chennai - 600053.",
      mapQuery: "Ambattur OT Bus Stand, Chennai, Tamil Nadu",
    },
    {
      name: "RedHills Branch",
      tag: "ACTIVE LAB",
      tagColor: "bg-blue-50 text-blue-700",
      address: "GNT Road, Near Bus Terminus, RedHills, Chennai - 600052.",
      mapQuery: "Redhills Bus Terminus, Chennai, Tamil Nadu",
    },
    {
      name: "Iyyappanthangal Branch",
      tag: "ACTIVE LAB",
      tagColor: "bg-blue-50 text-blue-700",
      address: "Mount-Poonamallee High Road, Opp Ramachandra Hospital, Chennai - 600056.",
      mapQuery: "Sri Ramachandra Hospital, Porur, Chennai, Tamil Nadu",
    },
    {
      name: "West Tambaram Branch",
      tag: "SOUTH HUB",
      tagColor: "bg-blue-100 text-blue-800",
      address: "Shanmugam Road, Near Tambaram Railway Station, Chennai - 600045.",
      mapQuery: "Tambaram Railway Station, Chennai, Tamil Nadu",
    },
    {
      name: "Kelambakkam Branch",
      tag: "OMR CORRIDOR",
      tagColor: "bg-blue-100 text-blue-800",
      address: "OMR Road, Near Kelambakkam Junction, Chennai - 603103.",
      mapQuery: "Kelambakkam Junction, OMR, Chennai, Tamil Nadu",
    },
    {
      name: "Chengalpattu Branch",
      tag: "ACTIVE LAB",
      tagColor: "bg-blue-50 text-blue-700",
      address: "GST Road, Opp New Bus Stand, Chengalpattu - 603001.",
      mapQuery: "New Bus Stand, Chengalpattu, Tamil Nadu",
    },
    {
      name: "Tiruvannamalai Branch",
      tag: "REGIONAL CENTER",
      tagColor: "bg-indigo-100 text-indigo-800",
      address: "Polur Road, Near Gandhi Statue, Tiruvannamalai - 606601.",
      mapQuery: "Gandhi Statue, Polur Road, Tiruvannamalai, Tamil Nadu",
    },
    {
      name: "Vellore Branch",
      tag: "TECH HUB",
      tagColor: "bg-blue-100 text-blue-800",
      address: "Katpadi Main Road, Near Old Bus Stand, Vellore - 632004.",
      mapQuery: "Old Bus Stand, Katpadi Main Road, Vellore, Tamil Nadu",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-aligned Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            PHYSICAL CAMPUS NETWORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 leading-tight tracking-tight">
            A career support system close to you.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Experience our high-speed hardware labs, in-person mentorship, and quiet
            study hubs across 9 locations in Tamil Nadu.
          </p>
        </div>

        {/* 9 Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {branches.map((b, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    {b.name}
                  </h3>
                  <span
                    className={`text-[9.5px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider ${b.tagColor}`}
                  >
                    {b.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-6">
                  {b.address}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href="tel:+919840000000"
                  className="flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Branch</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedBranch(b.mapQuery);
                    const target = document.getElementById("google-map-view");
                    target?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-1.5 font-medium text-slate-600 hover:text-blue-600 text-[11px] transition"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Lab Seats: Active</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Google Map & Location Section */}
        <div id="google-map-view" className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-50 shadow-lg">
          
          {/* Top Control Bar */}
          <div className="bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-sm text-slate-900">
                Live Google Map: {selectedBranch.split(",")[0]}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedBranch("Chennai, Tamil Nadu")}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition ${
                  selectedBranch === "Chennai, Tamil Nadu"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All 9 Hubs (Overview)
              </button>
              
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200 transition"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Live Google Map iframe */}
          <div className="relative w-full h-[380px] sm:h-[440px] bg-slate-100">
            <iframe
              title="FIIT 2.0 Regional Tech Hubs Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                selectedBranch
              )}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
            />

            {/* Bottom Overlay Badge matching Screenshot */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 max-w-lg bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 shadow-xl">
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md inline-block mb-1.5">
                NETWORK RADIUS
              </span>
              <p className="text-xs sm:text-[13px] font-bold text-slate-900 leading-snug">
                9 Technology Hubs across Chennai, Kanchipuram, Chengalpattu &amp; Northern Tamil Nadu.
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-medium">
                Click any branch card above to pinpoint its campus on the live map.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
