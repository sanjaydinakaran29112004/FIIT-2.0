"use client";

import React, { useState } from "react";
import { MapPin, Monitor, Network, Users, Clock, ShieldCheck, ArrowRight } from "lucide-react";

interface HubsShowcaseProps {
  onScheduleVisit: () => void;
}

const HUBS = [
  {
    name: "Avadi Campus Hub",
    district: "Chennai West",
    address: "Near HVF Main Road & Railway Station, Avadi, Chennai - 600054",
    capacity: "60 High-RAM Developer Workstations",
    specialty: "Java Full Stack & Cisco CCNA Hardware Racks",
    timings: "Open 7 Days • 8:00 AM - 9:00 PM",
  },
  {
    name: "Ambattur Industrial Tech Hub",
    district: "Chennai West",
    address: "Ambattur Industrial Estate, 3rd Main Road, Chennai - 600058",
    capacity: "80 High-RAM Coding Stations",
    specialty: "Cloud Architecture, Kubernetes & Docker Stacks",
    timings: "Open 7 Days • 8:00 AM - 9:30 PM",
  },
  {
    name: "RedHills Developer Campus",
    district: "Chennai North",
    address: "GNT Road, RedHills Junction, Chennai - 600052",
    capacity: "50 Dedicated Terminal Rigs",
    specialty: "Cybersecurity Blue Team & SOC Simulated Labs",
    timings: "Open 7 Days • 8:30 AM - 8:30 PM",
  },
  {
    name: "West Tambaram Regional Studio",
    district: "Chennai South",
    address: "Near Tambaram Railway Station & Bus Terminus, Chennai - 600045",
    capacity: "90 High-Performance Coding Rigs",
    specialty: "Data Analytics, PowerBI & Enterprise Microservices",
    timings: "Open 7 Days • 8:00 AM - 9:30 PM",
  },
  {
    name: "Kelambakkam IT Corridor Hub",
    district: "OMR Tech Belt",
    address: "Old Mahabalipuram Road (OMR), Kelambakkam - 603103",
    capacity: "70 Dual-Monitor Workstations",
    specialty: "Full Stack MERN, Next.js & Cloud Deployment",
    timings: "Open 7 Days • 8:30 AM - 9:00 PM",
  },
  {
    name: "Iyyappanthangal Tech Hub",
    district: "Porur IT Belt",
    address: "Mount-Poonamallee High Road, Iyyappanthangal - 600056",
    capacity: "65 Developer Rigs",
    specialty: "Python Backend, FastAPI & Redis Microservices",
    timings: "Open 7 Days • 8:00 AM - 9:00 PM",
  },
  {
    name: "Chengalpattu Regional Hub",
    district: "Chengalpattu",
    address: "GST Road, Near New Bus Stand, Chengalpattu - 603001",
    capacity: "50 Workstations",
    specialty: "Hybrid Weekend & Evening Professional Cohorts",
    timings: "Open 7 Days • 9:00 AM - 8:30 PM",
  },
  {
    name: "Vellore Innovation Center",
    district: "Vellore",
    address: "Katpadi Road, Opposite New Bus Stand, Vellore - 632004",
    capacity: "75 GPU-Enabled Rigs",
    specialty: "Applied AI, GenAI Studio & Enterprise RAG Projects",
    timings: "Open 7 Days • 8:00 AM - 9:00 PM",
  },
  {
    name: "Tiruvannamalai Campus",
    district: "Tiruvannamalai",
    address: "Polur Road, Near Anna Arch, Tiruvannamalai - 606601",
    capacity: "45 Dedicated Coding Stations",
    specialty: "Foundational Software Engineering & Web Architecture",
    timings: "Open 7 Days • 9:00 AM - 8:00 PM",
  },
];

export default function HubsShowcase({ onScheduleVisit }: HubsShowcaseProps) {
  const [selectedHub, setSelectedHub] = useState(HUBS[0]);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0062eb] text-[11px] font-bold tracking-wider uppercase mb-3.5">
              <Network className="w-3.5 h-3.5 text-[#0062eb]" />
              <span>REGIONAL PHYSICAL NETWORK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0B1528] tracking-tight leading-tight mb-4">
              9 Accessible Developer Hubs Across Tamil Nadu
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Never get stuck debugging alone at home. Every student gets unlimited physical access
              to all 9 hubs with full-time mentors, high-speed Wi-Fi, and enterprise hardware.
            </p>
          </div>
          <button
            onClick={onScheduleVisit}
            className="bg-[#0B132B] hover:bg-black text-white px-5 py-2.5 rounded-lg text-xs font-semibold shadow-xs transition active:scale-[0.98] self-start lg:self-auto flex items-center gap-2"
          >
            <span>Schedule a Branch Tour</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 9 Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HUBS.map((hub) => (
            <div
              key={hub.name}
              className="bg-[#F8FAFD] rounded-2xl border border-gray-200/80 p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* District Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white text-[#0062eb] px-2.5 py-0.5 rounded-md border border-blue-100 shadow-2xs">
                    {hub.district}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-gray-500">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>7 Days</span>
                  </div>
                </div>

                {/* Hub Name */}
                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0062eb] shrink-0" />
                  <span>{hub.name}</span>
                </h3>

                {/* Address */}
                <p className="text-xs text-gray-600 leading-relaxed mb-4 pl-6">
                  {hub.address}
                </p>

                {/* Specs Box */}
                <div className="bg-white rounded-xl p-3 mb-4 space-y-2 border border-gray-200/60 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Monitor className="w-3.5 h-3.5 text-[#0062eb] shrink-0" />
                    <span className="font-medium">{hub.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-gray-900">{hub.specialty}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={onScheduleVisit}
                className="w-full bg-white hover:bg-blue-50 text-[#0062eb] border border-blue-200 py-2 rounded-lg text-xs font-semibold text-center transition shadow-2xs"
              >
                Book Free Workstation Visit
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
