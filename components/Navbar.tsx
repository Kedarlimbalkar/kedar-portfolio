const links = [
  { label: "About", href: "#about" },
  { label: "ML Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Playground", href: "#playground" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-8 px-5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="shrink-0 font-serif text-lg font-medium tracking-[-0.035em] text-slate-900 transition-colors hover:text-[var(--accent)] sm:text-xl"
          aria-label="Kedar Limbalkar, home"
        >
          Kedar Limbalkar
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-5 overflow-x-auto text-sm text-slate-600 sm:gap-7"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="shrink-0 py-2 transition-colors hover:text-slate-950"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
