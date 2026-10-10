"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

function PhotographyPreview() {
  return (
    <div
      aria-label="Preview of a future photography gallery"
      className="mt-7 grid h-48 grid-cols-[1.1fr_0.9fr] gap-2 overflow-hidden rounded-xl"
      role="img"
    >
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#dfe7ec] via-[#edf0ec] to-[#c9d5d7]">
        <div className="absolute -bottom-5 left-1/2 h-28 w-44 -translate-x-1/2 rounded-[50%] bg-[#b5c2bb]/70 blur-[1px]" />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#a9b9b1]/55 to-transparent" />
        <span className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.14em] text-slate-600/80">
          FRAME 01
        </span>
      </div>
      <div className="grid grid-rows-2 gap-2">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#e8e3d8] via-[#f1eee7] to-[#d7d2c7]">
          <div className="absolute -right-3 -top-7 h-24 w-24 rounded-full bg-[#d0c5ae]/50" />
          <span className="absolute bottom-2 left-3 font-mono text-[8px] tracking-[0.14em] text-slate-600/80">
            FRAME 02
          </span>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#dce5e4] via-[#edf0ec] to-[#c8d4d6]">
          <div className="absolute -bottom-8 -left-3 h-20 w-36 rounded-[50%] bg-[#b1c0bc]/65" />
          <span className="absolute bottom-2 left-3 font-mono text-[8px] tracking-[0.14em] text-slate-600/80">
            FRAME 03
          </span>
        </div>
      </div>
    </div>
  );
}

function MotorcycleIllustration({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="relative mt-7 flex h-48 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-[#f7f8f7]">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        fill="none"
        viewBox="0 0 360 180"
      >
        <motion.path
          d="M-10 137C50 137 48 70 116 70s43 75 108 75 70-82 146-82"
          stroke="#c8d5e5"
          strokeDasharray="5 8"
          strokeLinecap="round"
          strokeWidth="2"
          animate={reducedMotion ? undefined : { strokeDashoffset: [0, -52] }}
          transition={
            reducedMotion
              ? undefined
              : { duration: 3.2, ease: "linear", repeat: Infinity }
          }
        />
        <circle cx="116" cy="70" r="4" fill="#345f9d" />
        <circle cx="224" cy="145" r="4" fill="#c8a77c" />
      </svg>

      <div className="relative z-10 flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2.5 shadow-[0_4px_16px_rgba(32,38,49,0.05)]">
        <svg
          aria-hidden="true"
          className="h-7 w-9 text-[var(--accent)]"
          fill="none"
          viewBox="0 0 40 28"
        >
          <circle cx="9" cy="20" r="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="31" cy="20" r="5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="m9 20 7-10h7l8 10H19l-3-10m8 0 3-4h4m-7 4 4 6m-13-6h-4"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
        <span className="text-xs font-medium text-slate-700">Open road</span>
      </div>

      <span className="absolute bottom-3 left-4 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">
        Take the scenic route
      </span>
    </div>
  );
}

function GamingController({
  playCount,
  onPlay,
}: {
  playCount: number;
  onPlay: () => void;
}) {
  return (
    <div className="mt-7 flex h-48 flex-col items-center justify-center rounded-xl border border-slate-100 bg-[#f7f8f7]">
      <motion.button
        key={playCount}
        type="button"
        onClick={onPlay}
        aria-label="Play a quick round"
        className="group/controller flex h-24 w-36 items-center justify-center rounded-[2rem] border border-slate-200 bg-white text-[var(--accent)] shadow-[0_6px_20px_rgba(32,38,49,0.06)] transition-colors hover:border-blue-200 hover:bg-blue-50/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        animate={
          playCount > 0
            ? { rotate: [0, -8, 8, -5, 5, 0], scale: [1, 1.08, 1] }
            : undefined
        }
        transition={{ duration: 0.55, type: "spring", bounce: 0.5 }}
        whileHover={{ y: -3, scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
      >
        <svg
          aria-hidden="true"
          className="h-12 w-20 transition-colors group-hover/controller:text-[#294f86]"
          fill="none"
          viewBox="0 0 88 52"
        >
          <path
            d="M24 13h40c8 0 13 5 15 13l4 12c1 5-4 8-8 5L63 33H25L13 43c-4 3-9 0-8-5l4-12c2-8 7-13 15-13Z"
            fill="currentColor"
            fillOpacity=".09"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M25 21v12m-6-6h12"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <circle cx="63" cy="25" r="2.3" fill="currentColor" />
          <circle cx="70" cy="31" r="2.3" fill="currentColor" />
        </svg>
      </motion.button>
      <p
        aria-live="polite"
        className="mt-4 text-xs font-medium text-slate-500"
      >
        {playCount > 0
          ? `Nice one${playCount > 1 ? ` · ${playCount} rounds` : ""}.`
          : "Tap the controller to play"}
      </p>
    </div>
  );
}

export default function Playground() {
  const prefersReducedMotion = useReducedMotion();
  const [playCount, setPlayCount] = useState(0);

  return (
    <section
      id="playground"
      aria-labelledby="playground-heading"
      className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={cardMotion.initial}
          whileInView={cardMotion.whileInView}
          viewport={cardMotion.viewport}
          transition={{
            ...cardMotion.transition,
            duration: prefersReducedMotion === true ? 0.01 : 0.55,
          }}
          className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              <span className="h-px w-8 bg-[var(--accent)]" aria-hidden="true" />
              Away from the screen
            </p>
            <h2
              id="playground-heading"
              className="font-serif text-4xl font-medium tracking-[-0.055em] text-slate-900 sm:text-5xl"
            >
              The playground.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-500">
            A few things I enjoy when I&apos;m not building with data and code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          <motion.article
            {...cardMotion}
            initial={cardMotion.initial}
            whileHover={
              prefersReducedMotion === true
                ? undefined
                : { scale: 1.025, y: -5 }
            }
            transition={
              prefersReducedMotion === true
                ? { duration: 0.01 }
                : { type: "spring", stiffness: 280, damping: 22 }
            }
            className="rounded-[1.4rem] border border-gray-200 bg-white p-6 shadow-[0_3px_16px_rgba(32,38,49,0.035)] sm:p-7"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  01 / Observe
                </p>
                <h3 className="mt-3 font-serif text-2xl font-medium tracking-[-0.035em] text-slate-900">
                  Photography
                </h3>
              </div>
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-slate-50 text-[var(--accent)]"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2l1.3-2h8.4l1.3 2h2A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-10Z"
                  />
                  <circle cx="12" cy="13" r="3.5" />
                </svg>
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Collecting details, places, and little moments worth keeping.
            </p>
            <PhotographyPreview />
          </motion.article>

          <motion.article
            {...cardMotion}
            initial={cardMotion.initial}
            whileHover={
              prefersReducedMotion === true
                ? undefined
                : { scale: 1.025, y: -5 }
            }
            transition={
              prefersReducedMotion === true
                ? { duration: 0.01 }
                : { type: "spring", stiffness: 280, damping: 22 }
            }
            className="rounded-[1.4rem] border border-gray-200 bg-white p-6 shadow-[0_3px_16px_rgba(32,38,49,0.035)] sm:p-7"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              02 / Wander
            </p>
            <h3 className="mt-3 font-serif text-2xl font-medium tracking-[-0.035em] text-slate-900">
              Bike riding
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Trading the desk for open roads and the long way around.
            </p>
            <MotorcycleIllustration
              reducedMotion={prefersReducedMotion ?? false}
            />
          </motion.article>

          <motion.article
            {...cardMotion}
            initial={cardMotion.initial}
            whileHover={
              prefersReducedMotion === true
                ? undefined
                : { scale: 1.025, y: -5 }
            }
            transition={
              prefersReducedMotion === true
                ? { duration: 0.01 }
                : { type: "spring", stiffness: 280, damping: 22 }
            }
            className="rounded-[1.4rem] border border-gray-200 bg-white p-6 shadow-[0_3px_16px_rgba(32,38,49,0.035)] sm:p-7"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              03 / Play
            </p>
            <h3 className="mt-3 font-serif text-2xl font-medium tracking-[-0.035em] text-slate-900">
              Mobile gaming
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              A little friendly competition makes room for fresh ideas.
            </p>
            <GamingController
              playCount={playCount}
              onPlay={() => setPlayCount((count) => count + 1)}
            />
          </motion.article>
        </div>
      </div>
    </section>
  );
}
