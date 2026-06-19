import { useState } from "react"
import { Link } from "react-router-dom"

const projects = [
  // ─── Master's Thesis ───────────────────────────────────
  {
    category: "thesis",
    type: "Master's Thesis",
    name: "Wavelet-Based ECG Artifact Removal from Non-Invasive Diaphragmatic EMG during Breathing Exercise",
    period: "2025 - 2026",
    desc: "Developed an algorithm to remove ECG artifacts from non-invasive diaphragmatic EMG signals using Discrete Wavelet Transform",
    highlights: [
      "The proposed algorithm effectively removed ECG artifacts from EMG signals and demonstrated superior performance compared with conventional high-pass filtering and gating methods.",
      "The processed EMG signals preserved both amplitude and frequency characteristics, with amplitude errors ranging from 0.006 to 0.064 mV and frequency errors ranging from 4.77 to 8.53 Hz."
    ],
    tags: ["Python", "Signal Processing", "Wavelet Transform", "Noise Removal", "Data Analysis", "Statistics Analysis"],
    links: {Readmore: "#" },
  },

    {
    category: "thesis",
    type: "Senior Thesis",
    name: "A Comparative Study of Mother Wavelets for ECG Removal in Non-invasive Diaphragm EMG during Breathing Exercise",
    period: "2024 - 2025",
    desc: "Selected the mother wavelet functions for ECG artifact removal from non-invasive diaphragmatic EMG signals using Single Level Discrete Wavelet Transform",
    highlights: [
      "Daubechies 4 (db4), Symlet 5 (sym5), Coiflet 3 (coif3), Biorthogonal 3.1 (bior3.1), and Reverse Biorthogonal 1.3 (rbio1.3) were identified as the most effective mother wavelets for ECG artifact removal using the Single-Level Discrete Wavelet Transform (DWT).",
    ],
    tags: ["Python", "Signal Processing", "Wavelet Transform", "Noise Removal", "Data Analysis", "Statistics Analysis"],
    links: {Readmore: "#" },
  },

  {
    category: "course",
    type: "PCB Design Project",
    name: "Analog and Digital Circuits for EMG Signal Acquisition",
    period: "2024",
    desc: "Designed and implemented analog and digital circuits for acquiring EMG signals",
    highlights: [
      "Objective: Design a prototype of a high-resolution analog-to-digital signal conversion circuit"
    ],
    tags: ["Altium Designer", "PCB Design"],
    links: {Readmore: "#" },
  },

  {
    category: "course",
    type: "Deep Learning Project",
    name: "Brain Tumor Classification using Convolutional Neural Networks (CNNs)",
    period: "2024",
    desc: "Fine-tuning the optimal parameters for the model, including the number of epochs, activation function, and input image size",
    highlights: [
      "The model developed by Mohamed Haitham achieved an accuracy of 89.34% in classifying brain tumors using CNNs",
      "Fine-tuning achieved an accuracy of 92.00% in classifying brain tumors using CNNs"
    ],
    tags: ["Python", "Deep Learning", "Convolutional Neural Networks", "Medical Imaging"],
    links: {Readmore: "#" },
  },

  {
    category: "thesis",
    type: "mini-Senior Thesis",
    name: "A development of an embedded system software for IMU sensor data logging during clinical assessment by using 6-minute walk test",
    period: "2024",
    desc: "Develop a wearable device for recording data during the 6-minute walk test (6MWT)",
    highlights: [
      "Objective: Develop an embedded system software for logging IMU sensor data during the 6-minute walk test."
    ],
    tags: ["Embedded System", "IMU Sensor", "Data Logging", "Wearable Device", "C Programming", "Microcontroller"],
    links: {Readmore: "#" },
  },

  {
    category: "course",
    type: "Microcontroller Project",
    name: "PM 2.5 Detector For Healthy Life ",
    period: "2024",
    desc: "Development of a PM2.5 Monitoring and Alert System",
    highlights: [
      "A PM2.5 monitoring device with real-time alert notifications via the Virtuino 6 mobile application.",
      "Alerts users when cumulative PM2.5 exposure exceeds a predefined threshold."
    ],
    tags: ["Embedded System", "IMU Sensor", "Data Logging", "Wearable Device", "C Programming", "Microcontroller"],
    links: {Readmore: "#" },
  },
]

const filters = [
  { key: "all",      label: "All" },
  { key: "thesis",   label: "Thesis" },
  { key: "course",   label: "Course Project" },
]

const categoryColor = {
  thesis:   "text-blue-700 bg-blue-50",
  course:   "text-emerald-700 bg-emerald-50",
  research: "text-violet-700 bg-violet-50",
}

function ProjectCard({ item }) {
  return (
    <div className="bg-white border border-[#e8e6e1] rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-0.5 hover:border-neutral-300 transition-all">

      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-medium ${categoryColor[item.category]}`}>
          {item.type}
        </span>
        <span className="font-mono text-[11px] text-neutral-300 whitespace-nowrap">
          {item.period}
        </span>
      </div>

      {/* Name */}
      <p className="text-[14px] font-medium leading-snug">{item.name}</p>

      {/* Desc */}
      <p className="text-[12.5px] text-neutral-500 leading-relaxed">{item.desc}</p>

      {/* Highlights */}
      <ul className="flex flex-col gap-1">
        {item.highlights.map((h) => (
          <li
            key={h}
            className="text-[12px] text-neutral-400 pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-neutral-300"
          >
            {h}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-auto pt-1">
        {item.tags.map((t) => (
          <span
            key={t}
            className="bg-[#f9f9f7] border border-[#e8e6e1] rounded px-2 py-0.5 text-[10.5px] text-neutral-400"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2 pt-1 border-t border-[#f3f0ea]">
        {item.links.Readmore && (
          <a href={item.links.Readmore} className="text-[12px] text-neutral-400 hover:text-neutral-700 transition-colors">
            Read More (To be continued) ↗
          </a>
        )}
  
        {item.links.report && (
          <a href={item.links.report} className="text-[12px] text-neutral-400 hover:text-neutral-700 transition-colors">
            Report ↗
          </a>
        )}
        {item.links.github && (
          <a href={item.links.github} className="text-[12px] text-neutral-400 hover:text-neutral-700 transition-colors">
            GitHub ↗
          </a>
        )}
        {item.links.demo && (
          <a href={item.links.demo} className="text-[12px] text-neutral-400 hover:text-neutral-700 transition-colors">
            Demo ↗
          </a>
        )}
        {item.links.slides && (
          <a href={item.links.slides} className="text-[12px] text-neutral-400 hover:text-neutral-700 transition-colors">
            Slides ↗
          </a>
        )}
      </div>

    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState("all")

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      {/* Page hero */}
      <div className="pt-14 pb-8 border-b border-[#ece9e2] mb-7">
        <p className="font-mono text-[11px] text-neutral-300 uppercase tracking-widest mb-3">
          Work &amp; Projects
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-neutral-900 uppercase tracking-widest mb-4 transition-colors"
        >
          <span>←</span> Back to Home
        </Link>
        
        <h1 className="text-[2rem] font-light tracking-[-0.025em] text-neutral-900">
          Projects
        </h1>
        <p className="text-[14px] text-neutral-400 mt-2">
          Senior thesis, coursework, research prototypes.
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
      <div className="grid grid-cols-2 gap-3">
        {filtered.map((item, i) => (
          <ProjectCard key={i} item={item} />
        ))}
      </div>
    </>
  )
}