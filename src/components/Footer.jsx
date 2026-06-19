export default function Footer() {
  return (
    <footer className="border-t border-border bg-white px-9 py-4 flex justify-between items-center text-[12px] text-neutral-300">
      <span>© 2024 Your Name</span>
      <div className="flex gap-4">
        {["GitHub", "LinkedIn", "Google Scholar"].map((s) => (
          <a key={s} href="#" className="hover:text-neutral-500 transition-colors">{s}</a>
        ))}
      </div>
    </footer>
  )
}