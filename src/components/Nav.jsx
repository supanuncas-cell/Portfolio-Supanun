import { NavLink } from "react-router-dom"

const links = [
  { to: "/", label: "Home" },
  { to: "/publications", label: "Publications" },
  { to: "/projects", label: "Projects" },
  { to: "/experience",  label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 h-[52px] bg-white/85 backdrop-blur-md border-b border-border flex items-center justify-between px-9">
      <NavLink to="/" className="w-7 h-7 rounded-md bg-neutral-900 flex items-center justify-center text-white font-mono text-[11px] font-semibold">
        YN
      </NavLink>
      <div className="flex gap-1">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md text-[13px] transition-colors ${
                isActive
                  ? "text-neutral-900 font-medium bg-[#f1efe8]"
                  : "text-neutral-400 hover:text-neutral-700 hover:bg-[#f9f9f7]"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}