"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CodeXml, ExternalLink, Play } from "lucide-react";
import Image from "next/image";

type ProjectLink = {
  label: string;
  href: string;
  kind: "code" | "live" | "video";
};

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  illustration: string;
  featured?: boolean;
  metric?: string;
  metricLabel?: string;
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Wind Mill Detection",
    category: "Computer vision · production MLOps",
    description:
      "An end-to-end computer vision pipeline deployed on Microsoft Azure to detect and classify wind turbines in aerial imagery.",
    tags: ["Azure", "Docker", "PyTorch / TensorFlow", "CI/CD", "FastAPI"],
    illustration:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 200' fill='none' stroke='%23345f9d' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 174h202M64 174V70m-21 104L64 70l21 104M64 70 40 52m24 18 3-35m-3 35 31-14M140 174V44m-27 130 27-130 28 130m-55-2h55M140 44 110 23m30 21 4-39m-4 39 35-16'/%3E%3Ccircle cx='64' cy='70' r='4' fill='%23345f9d'/%3E%3Ccircle cx='140' cy='44' r='4' fill='%23345f9d'/%3E%3Cpath d='M30 186c42-14 78 5 118-7s53-4 76 2' stroke='%2386a58e'/%3E%3C/svg%3E",
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kedarlimbalkar/wind-mill-detection",
        kind: "code",
      },
      {
        label: "Live App",
        href: "https://wind-mill-app.thankfulwater-ae14f235.westus2.azurecontainerapps.io/",
        kind: "live",
      },
    ],
  },
  {
    number: "02",
    title: "Tata Steel Failure Prediction",
    category: "Predictive analytics",
    description:
      "Prepared and modeled more than 10,000 records with XGBoost and LightGBM, improving dataset reliability by 30%.",
    tags: ["XGBoost", "LightGBM", "10K+ records", "+30% reliability"],
    illustration:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 200' fill='none' stroke='%238c6d52' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M24 176h194M39 176V86h45v90M47 86V60h29v26m19 90V43h48v133m-38 0v-36h28v36m43 0V75h32v101m-26-79h20m-20 19h20m-20 19h20'/%3E%3Cpath d='M31 55l32-19 31 14 41-27 38 18 35-21' stroke='%23345f9d'/%3E%3Ccircle cx='31' cy='55' r='4' fill='%23345f9d'/%3E%3Ccircle cx='63' cy='36' r='4' fill='%23345f9d'/%3E%3Ccircle cx='94' cy='50' r='4' fill='%23345f9d'/%3E%3Ccircle cx='135' cy='23' r='4' fill='%23345f9d'/%3E%3Ccircle cx='173' cy='41' r='4' fill='%23345f9d'/%3E%3Ccircle cx='208' cy='20' r='4' fill='%23345f9d'/%3E%3C/svg%3E",
    metric: "30%",
    metricLabel: "reliability gain",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kedarlimbalkar/tata-failure-prediction",
        kind: "code",
      },
      {
        label: "Video",
        href: "https://youtu.be/e14_ByN2KuU",
        kind: "video",
      },
    ],
  },
  {
    number: "03",
    title: "Bengaluru House Prices",
    category: "Applied machine learning",
    description:
      "A Ridge Regression pipeline estimating property prices across more than 240 Bengaluru locations, reaching 82% accuracy.",
    tags: ["Ridge Regression", "240+ locations", "82% accuracy"],
    illustration:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 200' fill='none' stroke='%2386a58e' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M7 31c31-23 58-10 80 4s43 19 73-1 53-25 73-7M2 55c30-20 58-8 81 7s44 16 73-4 53-23 78-5M0 83c30-20 58-8 82 7s44 16 73-4 55-22 82-2M2 114c30-20 58-8 81 7s44 16 74-4 53-23 80-5M0 146c31-22 60-8 83 7s44 16 74-4 53-23 81-4M3 177c30-18 56-6 80 8s45 15 74-5 53-21 80-2'/%3E%3Cpath d='M158 143V99h38v44m-30 0v-24h22v24m-52-43h58M166 99V79h21v20m-65 64V119h25v44m-19 0v-16h13v16' stroke='%23345f9d' stroke-width='3'/%3E%3C/svg%3E",
    metric: "240+",
    metricLabel: "locations modeled",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kedarlimbalkar/HousePricePrediction",
        kind: "code",
      },
      {
        label: "Video",
        href: "https://youtu.be/TwQctnQoF3k",
        kind: "video",
      },
    ],
  },
  {
    number: "04",
    title: "Retail Conversational AI",
    category: "Conversational AI · e-commerce",
    description:
      "A production-grade support agent built to resolve e-commerce customer questions, achieving 92% resolution accuracy.",
    tags: ["LangGraph", "LangChain", "Groq API", "92% resolution"],
    illustration:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 200' fill='none' stroke='%23345f9d' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M28 42h98a14 14 0 0 1 14 14v47a14 14 0 0 1-14 14H79l-24 22v-22H28a14 14 0 0 1-14-14V56a14 14 0 0 1 14-14Z'/%3E%3Cpath d='M106 93h89a14 14 0 0 1 14 14v39a14 14 0 0 1-14 14h-49l-21 18v-18h-19a14 14 0 0 1-14-14v-10' stroke='%238c6d52'/%3E%3Ccircle cx='48' cy='80' r='4' fill='%23345f9d'/%3E%3Ccircle cx='70' cy='80' r='4' fill='%23345f9d'/%3E%3Ccircle cx='92' cy='80' r='4' fill='%23345f9d'/%3E%3Cpath d='M130 126h55m-55 15h36' stroke='%238c6d52'/%3E%3C/svg%3E",
    metric: "92%",
    metricLabel: "resolution accuracy",
    links: [
      {
        label: "Video",
        href: "https://youtu.be/YncluBKHu7Q",
        kind: "video",
      },
    ],
  },
  {
    number: "05",
    title: "Facial Emotion Recognition",
    category: "Deep learning · real-time",
    description:
      "A CNN-based application that recognizes facial emotion in real time, presented through an interactive Streamlit interface.",
    tags: ["CNN", "Real-time", "Streamlit"],
    illustration:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 200' fill='none' stroke='%23345f9d' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M120 22 72 38 42 72l13 54 35 36 30 16 30-16 35-36 13-54-30-34-48-16Z'/%3E%3Cpath d='m72 38 20 24 28-11 28 11 20-24M42 72l32 8 18-18m53 0 18 18 32-8M55 126l27-8 10 44m83-44-27-8-10 44m-31-81v94m-28-43 28 14 28-14M92 62l-10 46 38 14 38-14-10-46M77 92h9m68 0h9'/%3E%3Ccircle cx='86' cy='92' r='4' fill='%23345f9d'/%3E%3Ccircle cx='154' cy='92' r='4' fill='%23345f9d'/%3E%3Cpath d='M105 139c9 7 21 7 30 0' stroke='%238c6d52'/%3E%3C/svg%3E",
    metric: "Live",
    metricLabel: "emotion recognition",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Kedarlimbalkar/facialRecog",
        kind: "code",
      },
      {
        label: "Video",
        href: "https://youtu.be/BErcoP1AWvw",
        kind: "video",
      },
    ],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion() === true;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.55,
        delay: prefersReducedMotion ? 0 : index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.012, y: -3 }}
      className={`group relative flex flex-col overflow-hidden rounded-[1.4rem] border border-gray-200 bg-[#f9f8f6] p-4 shadow-[0_3px_16px_rgba(32,38,49,0.035)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(32,38,49,0.075)] ${
        project.featured
          ? "lg:col-span-2"
          : ""
      }`}
    >
      <Image
        src={project.illustration}
        alt=""
        aria-hidden="true"
        width={240}
        height={200}
        unoptimized
        className="absolute bottom-0 right-0 z-0 h-2/3 w-1/2 object-contain object-right-bottom opacity-40 mix-blend-multiply"
        style={{ objectPosition: "right bottom" }}
      />

      <div className="relative z-10 flex w-full flex-col md:w-2/3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-slate-400">
              / {project.number}
            </span>
            <span className="h-px w-7 bg-slate-200" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-[11px]">
              {project.category}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="text-lg text-slate-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
          >
            ↗
          </span>
        </div>

        <div className="relative mt-2">
          <h3
            className={`max-w-xl font-serif font-medium leading-tight tracking-[-0.04em] text-slate-900 ${
              project.featured ? "text-lg sm:text-xl" : "text-base sm:text-lg"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-1.5 max-w-xl text-sm leading-5 text-slate-600">
            {project.description}
          </p>

          {project.metric && (
            <p className="mt-1 flex items-baseline gap-2 text-xs text-slate-500">
              <span className="font-serif text-lg tracking-[-0.05em] text-[var(--accent)]">
                {project.metric}
              </span>
              <span>{project.metricLabel}</span>
            </p>
          )}

          <div className="mt-2 flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-200 bg-slate-50/80 px-2 py-1 text-[10px] font-medium text-slate-600 transition-colors duration-200 group-hover:border-blue-100 group-hover:bg-blue-50/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} for ${project.title} (opens in a new tab)`}
                  className="inline-flex min-h-7 items-center gap-1 rounded-full border border-slate-300/90 bg-white/90 px-2.5 text-[10px] font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  {link.kind === "code" ? (
                    <CodeXml aria-hidden="true" className="h-3.5 w-3.5" />
                  ) : link.kind === "video" ? (
                    <Play aria-hidden="true" className="h-3.5 w-3.5" />
                  ) : (
                    <ExternalLink
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                    />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </motion.article>
  );
}

export default function ProjectsBentoGrid() {
  const prefersReducedMotion = useReducedMotion() === true;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-24 py-16 sm:py-20 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              <span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true" />
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="font-serif text-4xl font-medium tracking-[-0.055em] text-slate-900 sm:text-5xl"
            >
              Models built for the real world.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            A selection of machine learning and data science work—from
            predictive insights to deployed AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
