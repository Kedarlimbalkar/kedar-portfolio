"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  type Transition,
} from "framer-motion";
import {
  Bike,
  BookOpen,
  BrainCircuit,
  Broom,
  Camera,
  Cloud,
  Coffee,
  Cpu,
  Database,
  Disc3,
  FlaskConical,
  Gamepad2,
  LampDesk,
  Puzzle,
  Rocket,
  Sparkles,
  StickyNote,
} from "lucide-react";
import { useRef, useState, type ReactNode } from "react";

type Position = {
  left: string;
  top: string;
  rotate: number;
};

type Sticker = {
  id: string;
  label: string;
  chaos: Position;
  clean: Position;
  className: string;
  content: ReactNode;
};

const stickers: Sticker[] = [
  {
    id: "ai",
    label: "Artificial intelligence sticker",
    chaos: { left: "39%", top: "36%", rotate: -7 },
    clean: { left: "2%", top: "4%", rotate: -4 },
    className: "bg-[#e7eef8] text-[#345f9d]",
    content: (
      <>
        <BrainCircuit aria-hidden="true" className="h-5 w-5" />
        <span className="font-serif text-base italic">AI</span>
      </>
    ),
  },
  {
    id: "ml",
    label: "Machine learning sticker",
    chaos: { left: "45%", top: "34%", rotate: 8 },
    clean: { left: "21%", top: "3%", rotate: 3 },
    className: "bg-[#f2e7b9] text-slate-800",
    content: (
      <>
        <Cpu aria-hidden="true" className="h-4 w-4 text-[#8c6d39]" />
        <span className="font-serif text-base italic">Machine learning</span>
      </>
    ),
  },
  {
    id: "mlops",
    label: "MLOps sticky note",
    chaos: { left: "48%", top: "41%", rotate: -5 },
    clean: { left: "43%", top: "3%", rotate: -3 },
    className: "bg-[#e8ead9] text-slate-800",
    content: (
      <>
        <StickyNote aria-hidden="true" className="h-4 w-4 text-[#84906b]" />
        <span className="font-serif text-base italic">MLOps</span>
      </>
    ),
  },
  {
    id: "python",
    label: "Python sticky note",
    chaos: { left: "37%", top: "43%", rotate: 6 },
    clean: { left: "66%", top: "3%", rotate: 4 },
    className: "bg-[#f2e7b9] text-slate-800",
    content: <span className="font-serif text-base italic">Python</span>,
  },
  {
    id: "azure",
    label: "Azure cloud sticker",
    chaos: { left: "43%", top: "49%", rotate: -9 },
    clean: { left: "89%", top: "5%", rotate: -4 },
    className: "bg-[#e4edf7] text-[#345f9d]",
    content: (
      <>
        <Cloud aria-hidden="true" className="h-4 w-4" />
        <span className="font-serif text-base italic">Azure</span>
      </>
    ),
  },
  {
    id: "terminal",
    label: "Terminal window with Python code",
    chaos: { left: "40%", top: "39%", rotate: 3 },
    clean: { left: "2%", top: "23%", rotate: -3 },
    className:
      "w-36 overflow-hidden rounded-lg border border-slate-300/80 bg-white/95 p-0 text-slate-700 shadow-[0_14px_34px_rgba(15,23,42,0.16)]",
    content: (
      <div className="w-full">
        <div className="flex items-center gap-1 border-b border-slate-200 px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#eaa49a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#e8c885]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#9fc9a7]" />
          <span className="ml-auto font-mono text-[7px] text-slate-400">
            model.py
          </span>
        </div>
        <pre className="px-2 py-1.5 font-mono text-[7px] leading-relaxed">
          <code>
            model = Pipeline(
            {"\n"}  deploy=True
            {"\n"}  monitor=&quot;live&quot;
            {"\n"})
          </code>
        </pre>
      </div>
    ),
  },
  {
    id: "code",
    label: "Code snippet sticker",
    chaos: { left: "49%", top: "46%", rotate: 7 },
    clean: { left: "81%", top: "22%", rotate: 4 },
    className:
      "bg-[#182331] font-mono text-[9px] leading-relaxed text-[#c8ddb6]",
    content: (
      <span>
        <span className="text-[#d9a9c7]">if</span> model.ready:
        <br />
        &nbsp;&nbsp;ship()
      </span>
    ),
  },
  {
    id: "database",
    label: "Database icon sticker",
    chaos: { left: "36%", top: "48%", rotate: -3 },
    clean: { left: "2%", top: "44%", rotate: -6 },
    className: "bg-white text-[#688d65]",
    content: (
      <>
        <Database aria-hidden="true" className="h-5 w-5" />
        <span className="font-serif text-sm italic text-slate-700">data</span>
      </>
    ),
  },
  {
    id: "bike",
    label: "Motorcycle riding sticker",
    chaos: { left: "46%", top: "48%", rotate: 5 },
    clean: { left: "83%", top: "43%", rotate: 6 },
    className: "bg-[#f0e8df] text-[#8c6d52]",
    content: (
      <>
        <Bike aria-hidden="true" className="h-5 w-5" />
        <span className="font-serif text-sm italic">ride</span>
      </>
    ),
  },
  {
    id: "camera",
    label: "Photography camera sticker",
    chaos: { left: "50%", top: "36%", rotate: -8 },
    clean: { left: "5%", top: "77%", rotate: -5 },
    className: "bg-white text-[#65758b]",
    content: (
      <>
        <Camera aria-hidden="true" className="h-5 w-5" />
        <span className="font-serif text-sm italic text-slate-700">focus</span>
      </>
    ),
  },
  {
    id: "coffee",
    label: "Coffee cup sticker",
    chaos: { left: "50%", top: "45%", rotate: 11 },
    clean: { left: "80%", top: "76%", rotate: 5 },
    className: "bg-[#f5ece4] text-[#8c6d52]",
    content: (
      <>
        <Coffee aria-hidden="true" className="h-5 w-5" />
        <span className="font-serif text-sm italic">coffee</span>
      </>
    ),
  },
  {
    id: "journal",
    label: "Journal sticker",
    chaos: { left: "40%", top: "50%", rotate: -6 },
    clean: { left: "25%", top: "80%", rotate: 3 },
    className: "bg-[#f2e7b9] text-[#8c6d39]",
    content: (
      <>
        <BookOpen aria-hidden="true" className="h-5 w-5" />
        <span className="font-serif text-sm italic text-slate-800">
          field notes
        </span>
      </>
    ),
  },
  {
    id: "gaming",
    label: "Mobile gaming controller sticker",
    chaos: { left: "38%", top: "40%", rotate: 9 },
    clean: { left: "58%", top: "3%", rotate: -5 },
    className: "bg-[#ece7f6] text-[#75629b]",
    content: (
      <>
        <Gamepad2 aria-hidden="true" className="h-5 w-5" />
        <span className="font-serif text-sm italic text-slate-800">play</span>
      </>
    ),
  },
  {
    id: "vinyl",
    label: "Vinyl record sticker",
    chaos: { left: "45%", top: "45%", rotate: -13 },
    clean: { left: "58%", top: "81%", rotate: 8 },
    className: "rounded-full bg-white p-3 text-[#8c6d52]",
    content: <Disc3 aria-hidden="true" className="h-6 w-6" />,
  },
  {
    id: "ship-it",
    label: "Ship it sticky note",
    chaos: { left: "42%", top: "32%", rotate: 10 },
    clean: { left: "2%", top: "60%", rotate: 5 },
    className: "bg-[#f4d9cf] text-[#8a5143]",
    content: (
      <>
        <Rocket aria-hidden="true" className="h-4 w-4" />
        <span className="font-serif text-sm italic">ship it</span>
      </>
    ),
  },
  {
    id: "debug",
    label: "Debug and repeat sticky note",
    chaos: { left: "48%", top: "50%", rotate: -11 },
    clean: { left: "89%", top: "59%", rotate: -4 },
    className: "bg-[#e6eee1] text-[#688d65]",
    content: (
      <>
        <Sparkles aria-hidden="true" className="h-4 w-4" />
        <span className="font-serif text-sm italic">debug & repeat</span>
      </>
    ),
  },
  {
    id: "research",
    label: "Research flask sticker",
    chaos: { left: "35%", top: "46%", rotate: -4 },
    clean: { left: "5%", top: "82%", rotate: 4 },
    className: "bg-[#e4edf7] text-[#55769f]",
    content: (
      <>
        <FlaskConical aria-hidden="true" className="h-5 w-5" />
        <span className="font-serif text-sm italic text-slate-700">iterate</span>
      </>
    ),
  },
  {
    id: "late-night",
    label: "Late night deploys sticky note",
    chaos: { left: "52%", top: "42%", rotate: 4 },
    clean: { left: "78%", top: "82%", rotate: -5 },
    className: "bg-[#e8e0f0] text-[#725887]",
    content: (
      <span className="max-w-20 text-center font-serif text-sm italic leading-tight">
        late night deploys
      </span>
    ),
  },
];

const transition: Transition = {
  type: "spring",
  stiffness: 145,
  damping: 20,
};

export default function HeroSection() {
  const [isChaosMode, setIsChaosMode] = useState(true);
  const [isLampOn, setIsLampOn] = useState(true);
  const workspaceRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsChaosMode(false);
    } else if (latest < 20) {
      setIsChaosMode(true);
    }
  });

  return (
    <main
      id="top"
      className="relative isolate overflow-hidden bg-transparent text-slate-900"
    >
      <motion.div
        ref={workspaceRef}
        animate={{
          backgroundColor: isLampOn ? "#f9f8f6" : "#eeece6",
        }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        className="relative mx-auto flex h-[80vh] min-h-[680px] w-full items-center justify-center overflow-hidden"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          animate={{ opacity: isChaosMode ? 1 : 0 }}
          transition={{ duration: 0.55 }}
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,95,157,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(52,95,157,0.055) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ${
            isLampOn ? "opacity-100" : "opacity-35"
          }`}
          style={{
            background:
              "radial-gradient(ellipse at 50% 48%, rgba(255,255,255,0.94), rgba(249,248,246,0.05) 68%)",
          }}
        />

        <motion.div
          aria-hidden={!isChaosMode}
          initial={{ opacity: 1 }}
          animate={{
            opacity: isChaosMode ? 1 : 0,
            pointerEvents: isChaosMode ? "auto" : "none",
          }}
          transition={{ duration: 0.45 }}
          className="pointer-events-none absolute inset-0 z-20 select-none"
        >
          <span className="absolute left-[8%] top-[19%] rotate-[-8deg] font-serif text-xs uppercase tracking-[0.22em] text-[#9b7954]/70 sm:left-[16%] sm:text-sm">
            A DESK FULL OF
          </span>
          <span className="absolute right-[8%] top-[24%] rotate-[7deg] font-serif text-xs uppercase tracking-[0.2em] text-[#345f9d]/60 sm:right-[14%] sm:text-sm">
            UNFINISHED MODELS
          </span>
          <span className="absolute bottom-[22%] left-[11%] rotate-[5deg] font-serif text-xs uppercase tracking-[0.18em] text-[#8c6d52]/70 sm:left-[20%] sm:text-sm">
            &amp; LATE NIGHT DEPLOYS
          </span>
          <span className="absolute bottom-[19%] right-[9%] rotate-[-6deg] font-serif text-xs uppercase tracking-[0.2em] text-[#688d65]/70 sm:right-[18%] sm:text-sm">
            IDEAS IN PROGRESS
          </span>
        </motion.div>

        <motion.div
          aria-hidden={isChaosMode}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isChaosMode ? 0 : 1,
            scale: isChaosMode ? 0.8 : 1,
            pointerEvents: isChaosMode ? "none" : "auto",
          }}
          transition={transition}
          className="pointer-events-none relative z-10 mx-auto w-[min(82%,58rem)] px-2 py-16 text-center"
        >
          <p className="mb-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] sm:text-xs">
            <span className="h-px w-7 bg-[var(--accent)]" aria-hidden="true" />
            Machine learning · thoughtful engineering
            <span className="h-px w-7 bg-[var(--accent)]" aria-hidden="true" />
          </p>
          <h1 className="mx-auto max-w-5xl font-serif text-[clamp(3.4rem,9vw,7.5rem)] font-medium leading-[0.98] tracking-[-0.06em] text-slate-900">
            Kedar Limbalkar
          </h1>
          <p className="mt-6 text-base font-medium tracking-[-0.015em] text-slate-700 sm:text-lg">
            Building production-grade AI systems &amp; digital identities.
          </p>
          <p className="mt-4 text-sm font-medium tracking-[-0.015em] text-slate-600 sm:text-base">
            ML Engineer, Data Scientist, &amp; Technical Leader
          </p>
          <div className="pointer-events-auto mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 text-xs font-medium text-white shadow-[0_8px_24px_rgba(52,95,157,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#294f86] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:text-sm"
            >
              Explore Selected Work
              <span className="ml-2.5 text-base" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              href="/Kedar_Limbalkar_DS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 text-xs font-medium text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:text-sm"
            >
              View Resume
              <span className="ml-2.5 text-base" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>
        </motion.div>

        {stickers.map((sticker, index) => {
          const position = isChaosMode ? sticker.chaos : sticker.clean;

          return (
            <motion.div
              key={sticker.id}
              aria-label={sticker.label}
              role="group"
              initial={{
                left: sticker.chaos.left,
                top: sticker.chaos.top,
                rotate: sticker.chaos.rotate,
              }}
              animate={{
                left: position.left,
                top: position.top,
                rotate: position.rotate,
              }}
              transition={{ ...transition, delay: isChaosMode ? index * 0.012 : 0 }}
              drag={isChaosMode}
              dragConstraints={workspaceRef}
              dragElastic={0.14}
              dragMomentum={false}
              whileDrag={{ scale: 1.08, zIndex: 45 }}
              className={`absolute z-30 flex min-h-11 max-w-[9.5rem] items-center gap-2 rounded-lg px-3 py-2 shadow-[0_12px_28px_rgba(15,23,42,0.15)] ${sticker.className}`}
              style={{
                left: sticker.chaos.left,
                top: sticker.chaos.top,
                rotate: sticker.chaos.rotate,
                touchAction: isChaosMode ? "none" : "auto",
                zIndex: 30 + (index % 5),
              }}
            >
              {sticker.content}
            </motion.div>
          );
        })}

        <motion.div
          aria-label="Desk lamp"
          role="group"
          initial={{ left: "57%", top: "28%", rotate: -4 }}
          animate={{
            left: isChaosMode ? "57%" : "92%",
            top: isChaosMode ? "28%" : "29%",
            rotate: isChaosMode ? -4 : 0,
          }}
          transition={transition}
          drag={isChaosMode}
          dragConstraints={workspaceRef}
          dragElastic={0.14}
          dragMomentum={false}
          className="absolute z-40 rounded-xl border border-slate-200/80 bg-white/95 p-2.5 text-amber-600 shadow-[0_12px_28px_rgba(15,23,42,0.15)]"
          style={{
            left: "57%",
            top: "28%",
            rotate: -4,
            touchAction: isChaosMode ? "none" : "auto",
          }}
        >
          <button
            type="button"
            aria-label={isLampOn ? "Dim the desk lamp" : "Turn on the desk lamp"}
            aria-pressed={isLampOn}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setIsLampOn((current) => !current)}
            className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            <LampDesk
              aria-hidden="true"
              className="h-5 w-5"
              strokeWidth={1.45}
            />
          </button>
        </motion.div>

        <div className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2">
          <div
            aria-label="Hero layout mode"
            className="flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/90 p-1.5 shadow-[0_8px_28px_rgba(15,23,42,0.12)] backdrop-blur-md"
            role="group"
          >
            <button
              type="button"
              aria-pressed={isChaosMode}
              onClick={() => setIsChaosMode(true)}
              className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                isChaosMode
                  ? "border-[#9b7954] bg-[#9b7954] text-white"
                  : "border-transparent bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Puzzle aria-hidden="true" className="h-3.5 w-3.5" />
              Chaos
            </button>
            <button
              type="button"
              aria-pressed={!isChaosMode}
              onClick={() => setIsChaosMode(false)}
              className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                !isChaosMode
                  ? "border-[#9b7954] bg-[#9b7954] text-white"
                  : "border-transparent bg-white text-slate-700 hover:border-slate-200 hover:bg-slate-50"
              }`}
            >
              <Broom aria-hidden="true" className="h-3.5 w-3.5" />
              Clean
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
