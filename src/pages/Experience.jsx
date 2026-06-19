import { useState } from "react"
import { Link } from "react-router-dom"  // add

const experiences = [
  // ─── Work / Internship ───────────────────────────────
  {
    category: "work",
    type: "Work",
    org: "Srinakharinwirot university — Signal Processing Lab",
    role: "Laboratory Teaching Assistant",
    period: "Mar2026 - Apr2026",
    desc: "Supported laboratory instruction by teaching undergraduate students how to use the BIOPAC Student Lab system.",
    highlights: [
    ],
    tags: ["Teaching", "Signal Processing", "Laboratory", "Biopac Student Lab"],
  },
  {
    category: "work",
    type: "Work",
    org: "HRH Princess Maha Chakri Sirindhorn Medical Center",
    role: "Air Quality Assessment Assistant",
    period: "Feb 2026",
    desc: "Monitored indoor air quality parameters, including CO₂, PM 10, PM 2.5, and humidity, in hospital environments.",
    highlights: [
    ],
    tags: ["Air quality monitoring", "Hospital engineering"],
  },

  {
    category: "work",
    type: "Work",
    org: "HRH Princess Maha Chakri Sirindhorn Medical Center",
    role: "Air Quality Assessment Assistant",
    period: "Feb 2025",
    desc: "Conducted air quality monitoring and ventilation performance assessments in hospital environments",
    highlights: [
    ],
    tags: ["Air quality monitoring", "Hospital engineering"],
  },

  {
    category: "work",
    type: "Internship",
    org: "Xovic Company Limited (Thailand)",
    role: "Quality Control Engineer",
    period: "Jun – Jul 2024",
    desc: "Performed safety inspections on infusion pumps, including initial usage checks and electrical safety assessments, prior to equipment delivery to the hospital.",
    highlights: [
      "Electrical safety testing using the Fluke ESA615 Electrical Safety Analyzer",
    ],
    tags: ["Acceptance testing", "Medical devices", "infusion pump", "Electrical safety testing"],
  },
  {
    category: "research",
    type: "Research Assistant",
    org: "Srinakharinwirot university — Embedded Intelligence Lab",
    role: "Research Assistant",
    period: "Aug2023 - Dec2023",
    desc: "Assisted Master’s degree students under the supervision of Dr. Wongwit Senavongse in gait data collection using a motion capture system.",
    highlights: [
      "Attached motion capture markers, and operated Qualisys Track Manager for gait data collection."
    ],
    tags: ["Motion capture", "gait analysis", "Qualisys"],
  },
  {
    category: "work",
    type: "Internship",
    org: "Medical Equipment Center - Police General Hospital (Thailand)",
    role: "Biomedical Equipment Engineering Intern",
    period: "Jun – Jul 2023",
    desc: "Prepared and maintained medical equipment to ensure readiness for clinical use",
    highlights: [
      "Prepared and maintained infusion pumps, high-flow oxygen devices, ECG , and ventilators"
    ],
    tags: ["Medical equipment", "Ventilator", "Hospital engineering"],
  },



  






  // ─── Research ────────────────────────────────────────


]

const filters = [
  { key: "all",      label: "All" },
  { key: "work",     label: "Work & Internship" },
  { key: "research", label: "Research" },
]

// Badge color per category
const categoryColor = {
  work:     "text-emerald-700 bg-emerald-50",
  research: "text-blue-700   bg-blue-50",
}

function ExperienceCard({ item }) {
  return (
    <div className="bg-white border border-[#e8e6e1] rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-0.5 hover:border-neutral-300 transition-all">

      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-medium ${categoryColor[item.category]}`}>
          {item.type}
        </span>
        <span className="font-mono text-[11px] text-neutral-300 whitespace-nowrap">{item.period}</span>
      </div>

      {/* Role + Org */}
      <div>
        <p className="text-[14px] font-medium leading-snug">{item.role}</p>
        <p className="text-[12px] text-neutral-400 mt-0.5">{item.org}</p>
      </div>

      {/* Description */}
      <p className="text-[12.5px] text-neutral-500 leading-relaxed">{item.desc}</p>

      {/* Highlights */}
      <ul className="flex flex-col gap-1">
        {item.highlights.map((h) => (
          <li key={h} className="text-[12px] text-neutral-400 pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-neutral-300">
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-auto pt-1">
        {item.tags.map((t) => (
          <span key={t} className="bg-[#f9f9f7] border border-[#e8e6e1] rounded px-2 py-0.5 text-[10.5px] text-neutral-400">
            {t}
          </span>
        ))}
      </div>

    </div>
  )
}

export default function Experience() {
  const [active, setActive] = useState("all")

  const filtered = active === "all"
    ? experiences
    : experiences.filter((e) => e.category === active)

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
          Background
        </p>
        <h1 className="text-[2rem] font-light tracking-[-0.025em] text-neutral-900">
          Experience
        </h1>
        <p className="text-[14px] text-neutral-400 mt-2">
          Work and research.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex gap-2 flex-wrap mb-6">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`text-[12.5px] px-3.5 py-1.5 rounded-full border transition-all ${
              active === key
                ? "bg-neutral-900 text-white border-neutral-900"
                : "border-[#e8e6e1] text-neutral-400 hover:border-neutral-300 hover:text-neutral-600"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}
      </div>
    </>
  )
}