import React from "react";
import { Link } from "react-router-dom"

const contactInfo = [
  {
    icon: "✉",
    label: "Email",
    value: "Supanun.cas@gmail.com",
    href: "Supanun.cas@gmail.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/supanun-chitmeta",
    href: "https://www.linkedin.com/in/supanun-chitmeta-2b4043403/",
  },
  {
    icon: "gh",
    label: "GitHub",
    value: "github.com/supanuncas-cell",
    href: "https://github.com/supanuncas-cell",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bangkok, Thailand · Open to relocation",
    href: null,
  },
];

const availability = [
  { label: "Full-time positions", status: "Open", color: "text-emerald-700 bg-emerald-50" },
];

const lookingFor = [
  "Signal Processing Engineer",
  "Embedded Systems Engineer",
  "Hardware Engineer",
  "R&D Engineer",
  "PCB Design",
  "Data Analysis"
];

export default function Contact() {
  return (
    <>
      {/* Page hero */}
      <div className="pt-14 pb-8 border-b border-[#ece9e2] mb-7">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-neutral-900 uppercase tracking-widest mb-4 transition-colors"
        >
          <span>←</span> Back to Home
        </Link>

        <p className="font-mono text-[11px] text-neutral-300 uppercase tracking-widest mb-3">
          Get In Touch
        </p>
        <h1 className="text-[2rem] font-light tracking-[-0.025em] text-neutral-900">
          Contact
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* ── Left: Contact info ── */}
        <div className="bg-white border border-[#e8e6e1] rounded-2xl p-5 flex flex-col gap-4">
          <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest">
            Direct Contact
          </p>

          {contactInfo.map(({ icon, label, value, href }) => (
            <div key={label} className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-md bg-[#f9f9f7] border border-[#e8e6e1] flex items-center justify-center text-[11px] text-neutral-400 shrink-0 mt-0.5">
                {icon}
              </div>
              <div>
                <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest mb-0.5">
                  {label}
                </p>
                {href ? (
                  /* แก้ไขจุดที่ 1: เพิ่มแท็ก <a> */
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-[13.5px] text-neutral-500 hover:text-blue-600 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-[13.5px] text-neutral-500">{value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Download CV */}
          {/* แก้ไขจุดที่ 2: เพิ่มแท็ก <a> */}
          <a
            href="/cv.pdf"
            className="mt-2 w-full bg-neutral-900 text-white text-[13px] font-medium py-2.5 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors"
          >
            Download CV (PDF)
          </a>
        </div>

        {/* ── Right: Availability + Looking for ── */}
        <div className="flex flex-col gap-3">
          {/* Availability */}
          <div className="bg-white border border-[#e8e6e1] rounded-2xl p-5">
            <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest mb-4">
              Availability
            </p>
            <div className="flex flex-col gap-3">
              {availability.map(({ label, status, color }) => (
                <div key={label} className="flex justify-between items-center">
                  <p className="text-[13.5px] text-neutral-500">{label}</p>
                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${color}`}>
                    {status}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 border-t border-[#f3f0ea]">
                <p className="text-[13.5px] text-neutral-500">Available from</p>
                <p className="font-mono text-[12px] text-neutral-400">August 2026</p>
              </div>
            </div>
          </div>

          {/* Looking for */}
          <div className="bg-white border border-[#e8e6e1] rounded-2xl p-5">
            <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest mb-3">
              Looking for roles in
            </p>
            <div className="flex flex-wrap gap-1.5">
              {lookingFor.map((role) => (
                <span
                  key={role}
                  className="bg-[#f9f9f7] border border-[#e8e6e1] rounded-md px-2.5 py-1 text-[12px] text-neutral-500"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}