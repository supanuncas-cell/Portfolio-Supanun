import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';

const recentExperiences = [
  {
    category: "work",
    type: "Teaching Assistant",
    org: "Srinakharinwirot university — Signal Processing Lab",
    role: "Laboratory Teaching Assistant",
    period: "Mar2026 - Apr2026",
    tags: ["Teaching", "Signal Processing", "Laboratory", "Biopac Student Lab"],
  },

  {
    category: "work",
    type: "Work",
    org: "HRH Princess Maha Chakri Sirindhorn Medical Center",
    role: "Air Quality Assessment Assistant",
    period: "Feb 2026",
    tags: ["Air quality monitoring", "Hospital engineering"],
  },
  
  {
    category: "work",
    type: "Internship",
    org: "Xovic Company Limited (Thailand)",
    role: "Quality Control Engineer",
    period: "Jun – Jul 2024",
    tags: ["Acceptance testing", "Medical devices", "infusion pump", "Electrical safety testing"],
  },


]

const skillGroups = [
  {
    category: "Programming Languages",
    items: ["Python", "C"]
  },
  {
    category: "Engineering & Analysis",
    items: ["Signal Processing", "Statistical Analysis","Dual-Core Processing", "FreeRTOS"]
  },
  {
    category: "Software Tools",
    items: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Altium Designer"]
  },

]

const categoryColor = {
  work:     "text-emerald-700 bg-emerald-50",
  research: "text-blue-700 bg-blue-50",
}

const stats = [
  { num: "2", label: "Publications", link: "#publications" },
  { num: "6", label: "Projects", link: "/projects" },
  { num: "3", label: "Years Research", link: "#research" },
  { num: "6", label: "Experience", link: "/experience" },
]

const interests = [
  "Biomedical Signal Processing", "Biopotential Signals", "Embedded Systems",
  "PCB Design", "Rehabilitation", "Medical Devices", "Data Analysis"
]

const education = [
  { deg: "B.Eng Biomedical Engineering", school: "Srinakharinwirot University (GPAX: 4.00)", year: "2021 – 2025" },
  { deg: "M.Eng Biomedical Engineering", school: "Srinakharinwirot University (GPAX: 3.65)", year: "2025 - 2026" },
]

const recentPubs = [
  {
    venue: "2026-International Conference on Knowledge and Smart Technologys (KST2026)",
    title: "Evaluation of Mother Wavelets for ECG Artifacts Suppression in Diaphragmatic EMG Using Singlelevel Discrete Wavelet Transform",
    authors: "Supanun Chitmeta, Sauwaluk Dacha, Weerayot Aramphianlert",
    link: "https://ieeexplore.ieee.org/document/11432363",
  },
  {
    venue: "2024-Biomedical Engineering International Conference (BMEiCON2024)",
    title: "A Development of an Embedded System Software for IMU Sensor Data Logging During Clinical Assessment by Using 6-Minute Walk Test",
    authors: "Supanun Chitmeta, Phusanisa Premying, Chamaiporn Sukjamsri, Weerayot Aramphianlert",
    link: "https://ieeexplore.ieee.org/document/10896272", // ใส่ URL สำหรับ Publication ที่สองของคุณ
  },
]

const recentProjects = [
  {
    type: "Master thesis",
    name: "Wavelet-Based ECG Artifact Removal from Non-Invasive Diaphragmatic EMG during Breathing Exercise",
    desc: "Developes Algorithms for ECG artifact removal from diaphragmatic EMG signals ",
    tags: ["Noise removal", "Wavelet Transform", "EMG", "ECG", "Statistical Analysis"],
  },
  {
    type: "Senior Thesis",
    name: "A Comparative Study of Mother Wavelets for ECG Removal in Non-invasive Diaphragm EMG during Breathing Exercise",
    desc: "Developes Algorithms for ECG artifact removal from diaphragmatic EMG signals ",
    tags: ["diaphragmatic EMG", "ECG Artifact removal", "Wavelet Transform", "Statistical Analysis"],
  },
  {
    type: "Mini-Senior Thesis",
    name: "A development of an embedded system software for IMU sensor data logging during clinical assessment by using 6-minute walk test",
    desc: "Developed embedded control software for a custom motion-tracking device to record movement data during the 6-Minute Walk Test (6MWT)",
    tags: ["Duo Core CPU", "IMU", "Data Logging", "FreeRTOS"],
  },


]

function Tag({ children }) {
  return (
    <span className="bg-bg border border-border rounded-[5px] px-2 py-1 text-[11.5px] text-neutral-500">
      {children}
    </span>
  )
}

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border border-border rounded-2xl p-5 ${className}`}>
      {children}
    </div>
  )
}

function MonoLabel({ children }) {
  return (
    <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest mb-2">
      {children}
    </p>
  )
}

export default function Home() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // แสดงปุ่มเมื่อเลื่อนลงมามากกว่า 300px
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // เลื่อนขึ้นนุ่มนวลแบบไม่กระตุก
    });
  };

  return (
    <>
    {/* Hero */}
    <section className="pt-14 pb-9 border-b border-[#ece9e2] mb-7">

      {/* ใช้ flex เพื่อแบ่งซ้าย-ขวา */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* ฝั่งซ้าย: ข้อมูลตัวอักษรและปุ่ม */}
        <div className="flex-1 min-w-0">

          <p className="font-mono text-[12px] text-neutral-500 uppercase tracking-widest mb-4">
            Biomedical Engineering | Data Analysis | Signal Processing  | Researcher 
          </p>

          <h1 className="text-[40px] md:text-[52px] font-light tracking-[-0.04em] leading-tight text-neutral-900 mb-4">
            Supanun Chitmeta
          </h1>

          {/* รูปภาพ: โผล่เฉพาะมือถือ อยู่ตรงนี้ */}
          <div className="flex justify-center mb-6 md:hidden">
            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
              <img 
                src="/Profile_pic.jpg"
                alt="Supanun Chitmeta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-[14.5px] text-neutral-500 max-w-[500px] leading-relaxed mb-6">
            Hi, I'm Cream. I'm currently seeking opportunities in Data Analysis, Biomedical Signal Processing, Research, 
            and Medical Device-related roles.
          </p>
          
          {/* กลุ่มปุ่มกด */}
          <div className="flex gap-2.5 flex-wrap">
            <Link to="/projects" className="bg-neutral-900 text-white px-4 py-2 rounded-lg text-[13px] font-medium hover:bg-neutral-700 transition-colors">
              View Projects
            </Link>
            <a
              href="#publications"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("publications");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border border-border text-neutral-600 px-4 py-2 rounded-lg text-[13px] hover:bg-[#f9f9f7] transition-colors cursor-pointer"
            >
              Publications
            </a>
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-border text-neutral-600 px-4 py-2 rounded-lg text-[13px] hover:bg-[#f9f9f7] transition-colors"
            >
              Download CV
            </a>
            <Link to="/contact" className="border border-border text-neutral-600 px-4 py-2 rounded-lg text-[13px] hover:bg-[#f9f9f7] transition-colors">
              Contact Me
            </Link>
          </div>
        </div>

        {/* ฝั่งขวา: รูปภาพ */}
        <div className="hidden md:block flex-shrink-0">
          <div className="w-48 h-48 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
            <img 
              src="/Profile_pic.jpg"
              alt="Supanun Chitmeta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        {stats.map(({ num, label, link }) => {
          const content = (
            <Card className={link ? "hover:-translate-y-0.5 hover:border-neutral-300 transition-all cursor-pointer" : ""}>
              <p className="text-[28px] font-light tracking-tight leading-none text-neutral-900">{num}</p>
              <p className="text-[11px] text-neutral-300 mt-1">{label}</p>
            </Card>
          );

          if (!link) return <div key={label}>{content}</div>

          if (link.startsWith("#")) {
            return (
              <a
                key={label}
                href={link}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(link.slice(1))?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {content}
              </a>
            )
          }

          return (
            <Link key={label} to={link}>
              {content}
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-7">
        
        {/* คอลัมน์ซ้าย: About */}
        <div className="flex flex-col gap-2.5">
          {/* About Section */}
          <Card className="h-full">
            <MonoLabel>About</MonoLabel>
            <p className="text-[13px] font-medium mb-2 mt-2">Background</p>
            <p className="text-[12.5px] text-neutral-500 leading-[1.75] text-justify whitespace-pre-line">
              Hello, my name is Cream. I graduated with a Master's degree 
              in Biomedical Engineering from Srinakharinwirot University.
            </p>
            <p className="text-[12.5px] text-neutral-500 leading-[1.75] mt-1 text-justify whitespace-pre-line">
              During my studies, I conducted research in biomedical signal processing, 
              which involved data collection, algorithm development, data analysis, and statistical evaluation. 
              Through this experience, I developed strong skills in signal processing, data analysis, and systematic problem-solving.
            </p>
            <p className="text-[12.5px] text-neutral-500 leading-[1.75] mt-1 text-justify whitespace-pre-line">
              I enjoy learning new things, paying attention to detail, and working with data to find 
              meaningful insights and solutions. I am also motivated to continuously improve my knowledge and skills through 
              both learning and hands-on experience.
            </p>
            <p className="text-[12.5px] text-neutral-500 leading-[1.75] mt-1 text-justify whitespace-pre-line">
              I am interested in opportunities related to Data Analysis, Signal Processing, 
              and medical technology or medical devices. I look forward to applying my engineering background, analytical skills, 
              and research experience to contribute to an organization while continuing to grow professionally.
            </p>
          </Card>
        </div>

        {/* คอลัมน์ขวา: Technical Skills (กล่องเดียว) */}
        <div className="flex flex-col gap-2.5">
          {/* Card ที่ 1: Technical Skills */}
          <Card>
            <MonoLabel>Technical Skills</MonoLabel>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {skillGroups.map((group) => (
                <div key={group.category} className="w-full mb-3 last:mb-0">
                  <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-tighter mb-1.5">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span key={skill} className="text-[12.5px] text-neutral-600 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card ที่ 2: Research Interests (ย้ายมาไว้ข้างล่าง Skills) */}
          <Card>
            <MonoLabel>Interests</MonoLabel>
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {interests.map((i) => <Tag key={i}>{i}</Tag>)}
            </div>
          </Card>
        </div>

      </div>


      {/* Education */}
      <Card className="mb-7">
        <MonoLabel>Education</MonoLabel>
        {education.map((e, idx) => (
          <div key={idx} className={`flex justify-between items-start ${idx < education.length - 1 ? "pb-3 mb-3 border-b border-[#f0ece4]" : ""}`}>
            <div>
              <p className="text-[13px] font-medium">{e.deg}</p>
              <p className="text-[12px] text-neutral-400 mt-0.5">{e.school}</p>
            </div>
            <p className="font-mono text-[11px] text-neutral-300 whitespace-nowrap">{e.year}</p>
          </div>
        ))}
      </Card>

      {/* Publications preview */}
      <section id="publications" className="mb-7">
        <div className="flex justify-between items-baseline pb-2.5 border-b border-[#ece9e2] mb-4">
          <p className="text-[13px] font-medium">Recent publications</p>
        </div>
        {recentPubs.map((p, i) => (
          <div 
            key={i} 
            className={`py-3.5 ${i < recentPubs.length - 1 ? "border-b border-[#f3f0ea]" : ""}`}
          >
            <p className="font-mono text-[10px] text-blue-600 uppercase tracking-widest mb-1">
              {p.venue}
            </p>
            <p className="text-[13px] font-medium leading-snug mb-1">
              {p.title}
            </p>
            <p className="text-[11.5px] text-neutral-400 mb-2">
              {p.authors}
            </p>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11.5px] font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Read more &rarr;
            </a>
          </div>
        ))}
      </section>

      {/* Projects preview */}
      <section>
        <div className="flex justify-between items-baseline pb-2.5 border-b border-[#ece9e2] mb-3">
          <p className="text-[13px] font-medium">Selected projects</p>
          <Link to="/projects" className="text-[12px] text-neutral-300 hover:text-blue-600 transition-colors">See all →</Link>
        </div>
        <div className="flex md:grid md:grid-cols-3 gap-2.5 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible scrollbar-hide">
          {recentProjects.map((p) => (
            <Link key={p.name} to="/projects" className="flex-shrink-0 w-[80%] sm:w-[280px] md:w-auto">
              <Card className="hover:-translate-y-0.5 hover:border-neutral-300 transition-all cursor-pointer h-full">
                <p className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest mb-1.5">{p.type}</p>
                <p className="text-[12.5px] font-medium leading-snug mb-1.5">{p.name}</p>
                <p className="text-[11.5px] text-neutral-400 leading-relaxed mb-2.5">{p.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <span key={t} className="bg-bg border border-border rounded px-1.5 py-0.5 text-[10.5px] text-neutral-300">{t}</span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Experience preview */}
      <section className="mt-7">
        <div className="flex justify-between items-baseline pb-2.5 border-b border-[#ece9e2] mb-3">
          <p className="text-[13px] font-medium">Experience</p>
        <Link to="/experience" className="text-[12px] text-neutral-300 hover:text-blue-600 transition-colors">
        See all →
        </Link>
      </div>
      <div className="flex md:grid md:grid-cols-3 gap-2.5 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible scrollbar-hide">
        {recentExperiences.map((e) => (
          <Link key={e.role} to="/experience" className="flex-shrink-0 w-[80%] sm:w-[280px] md:w-auto">
            <Card className="hover:-translate-y-0.5 hover:border-neutral-300 transition-all cursor-pointer h-full">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-medium ${categoryColor[e.category]}`}>
                  {e.type}
                </span>
                <span className="font-mono text-[11px] text-neutral-300 whitespace-nowrap">{e.period}</span>
              </div>
              <p className="text-[12.5px] font-medium leading-snug mb-1">{e.role}</p>
              <p className="text-[11.5px] text-neutral-400 mb-2.5">{e.org}</p>
              <div className="flex flex-wrap gap-1">
                {e.tags.map((t) => (
                  <span key={t} className="bg-bg border border-border rounded px-1.5 py-0.5 text-[10.5px] text-neutral-300">
                    {t}
                </span>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
    {/* ========================================================= */}
      {/* ส่วนปุ่มกด Scroll To Top ลอยตัว (แสดงผลตามเงื่อนไข State) */}
      {/* ========================================================= */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-neutral-900 text-white rounded-full shadow-lg hover:bg-neutral-800 transition-all duration-300 hover:scale-110 active:scale-95 group animate-fade-in"
          aria-label="Scroll to top"
        >
          {/* ไอคอนลูกศร SVG ชี้ขึ้น */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </>
  )
}

