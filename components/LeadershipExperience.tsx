"use client";

import { motion, useReducedMotion } from "framer-motion";

const leadershipRoles = [
  {
    number: "01",
    title: "Business Analyst",
    organization: "Adheesh Overseas",
    url: "https://www.adheeshoverseas.in/",
    description:
      "Built the digital identity from the ground up—from logo and brand design to full-scale web architecture and business analysis.",
  },
  {
    number: "02",
    title: "Freelance Project",
    organization: "Opportunity Career Academy",
    url: "https://www.opportunitycareeracademy.in/",
    description:
      "Designed and developed a fully functional educational platform localized for Marathi-speaking learners.",
  },
];

const internships = [
  {
    organization: "Atman Cloud Consultant",
    title: "AI/ML Intern",
  },
  {
    organization: "Intucate",
    title: "Business Analyst Intern",
  },
];

const leadershipTech = ["TypeScript", "JavaScript", "CSS"];

export default function LeadershipExperience() {
  const prefersReducedMotion = useReducedMotion() === true;

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            <span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true" />
            Leadership &amp; experience
          </p>
          <h2
            id="leadership-heading"
            className="font-serif text-4xl font-medium tracking-[-0.055em] text-slate-900 sm:text-5xl"
          >
            Building teams, products, and perspective.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A path through technical leadership, applied AI/ML, and business
            analysis—connecting thoughtful product decisions with practical
            engineering.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:gap-20">
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Leadership &amp; web architecture
            </h3>
            <ol className="relative space-y-4 before:absolute before:bottom-8 before:left-[1.1rem] before:top-8 before:w-px before:bg-slate-200 sm:space-y-5">
              {leadershipRoles.map((role, index) => (
                <motion.li
                  key={role.organization}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.5,
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-12"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white font-mono text-[10px] text-[var(--accent)] shadow-[0_2px_8px_rgba(32,38,49,0.04)]"
                  >
                    {role.number}
                  </span>
                  <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_3px_16px_rgba(32,38,49,0.035)] sm:p-7">
                    <p className="text-xs font-medium text-[var(--accent)]">
                      {role.title}
                    </p>
                    <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                      <h4 className="font-serif text-2xl font-medium tracking-[-0.035em] text-slate-900 sm:text-3xl">
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${role.organization} website (opens in a new tab)`}
                          className="rounded-sm underline decoration-transparent underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                        >
                          {role.organization}
                        </a>
                      </h4>
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${role.organization} website (opens in a new tab)`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] transition-colors hover:text-[#294f86] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                      >
                        Visit site <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      {role.description}
                    </p>
                    <ul
                      aria-label={`${role.organization} technology stack`}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {leadershipTech.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-gray-200 bg-slate-50/80 px-3 py-1.5 text-[11px] font-medium text-slate-600"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              ))}
            </ol>
          </div>

          <div id="experience" className="scroll-mt-24">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Internships
            </h3>
            <ol className="relative space-y-3 before:absolute before:bottom-7 before:left-[1.1rem] before:top-7 before:w-px before:bg-slate-200">
              {internships.map((internship, index) => (
                <motion.li
                  key={internship.organization}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: prefersReducedMotion ? 0.01 : 0.45,
                    delay: prefersReducedMotion ? 0 : index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative pl-12"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-[0.72rem] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--background)] ring-4 ring-[var(--background)]"
                  />
                  <div className="flex min-h-[4.5rem] items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-[0_2px_12px_rgba(32,38,49,0.025)] transition-shadow duration-200 hover:shadow-[0_6px_20px_rgba(32,38,49,0.06)] sm:px-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {internship.title}
                      </p>
                      <h4 className="mt-1 font-medium tracking-[-0.02em] text-slate-800">
                        {internship.organization}
                      </h4>
                    </div>
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-slate-400"
                    >
                      0{index + 1}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
