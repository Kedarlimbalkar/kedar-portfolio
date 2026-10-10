import { BriefcaseBusiness, CodeXml, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kedar-limbalkar/",
    icon: BriefcaseBusiness,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Kedarlimbalkar",
    icon: CodeXml,
    external: true,
  },
  {
    label: "Email",
    href: "mailto:kedarlimbalkar@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    href: "tel:9284374129",
    icon: Phone,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p className="text-xs tracking-[0.01em] text-slate-500">
          © 2026 Kedar Limbalkar. All rights reserved.
        </p>

        <nav aria-label="Social and contact links">
          <ul className="flex flex-wrap items-center gap-2">
            {contactLinks.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-xs font-medium text-slate-500 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--accent)] hover:shadow-[0_3px_12px_rgba(32,38,49,0.05)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-4 w-4 transition-colors"
                    strokeWidth={1.7}
                  />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
