import React from "react";
import Reveal from "./Reveal";

const logos = [
  { name: "Next.js", short: "N" },
  { name: "React", short: "R" },
  { name: "TypeScript", short: "TS" },
  { name: "Node", short: "NOD" },
  { name: "Tailwind", short: "TW" },
  { name: "MongoDB", short: "MDB" },
  { name: "PostgreSQL", short: "PG" },
  { name: "Firebase", short: "FB" },
];

const skills = [
  { label: "Frontend Development", pct: 85 },
  { label: "Backend Development", pct: 95 },
  { label: "UI/UX Design", pct: 78 },
  { label: "API & Integration", pct: 92 },
  {label: "automation and AI agent building", pct: 80},
  { label: "Performance Optimization", pct: 86 },
];

const techMarquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Express",
  "Prisma",
  "GitHub",
  "Figma",
  "Docker",
  "Supabase",
  "REST API",
  "SEO",
];

const Bar = ({ label, pct }: { label: string; pct: number }) => (
  <Reveal className="mb-5">
    <div className="mb-2 flex items-center justify-between gap-4">
      <span className="text-sm font-medium tracking-[0.12em] text-[#dfe7e3] uppercase">
        {label}
      </span>
      <span className="text-sm font-bold text-[#ff5a5a]">{pct}%</span>
    </div>
    <div className="bar-track">
      <div className="fill" data-pct={pct} />
    </div>
  </Reveal>
);

export const Stack = ({ variant = "home" }: { variant?: "home" | "page" }) => {
  const isPage = variant === "page";

  if (!isPage) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <Reveal className="space-y-12">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
              Stack
            </p>
            <h2 className="text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Tools I use to build.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="mb-6">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b7c5be]">
                  Core stack
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="stack-logo group flex h-24 flex-col items-center justify-center rounded-2xl border border-[#233a2f] bg-[#0f1a15] text-center"
                  >
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#2b463a] bg-[#101d17] text-xs font-black tracking-[0.08em] text-[#d7ffe9] transition-colors duration-200 group-hover:text-[#7ef7b3]">
                      {logo.short}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dbe7df]">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b7c5be]">
                  Experience
                </p>
                <span className="rounded-full border border-[#2d493a] bg-[#0c1713] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8de7ae]">
                  Active
                </span>
              </div>

              <div className="space-y-2">
                {skills.map((skill) => (
                  <Bar key={skill.label} label={skill.label} pct={skill.pct} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <Reveal className="space-y-12">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-end">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
              Stack
            </p>
            <h2 className="text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
              The tools behind the work.
            </h2>
          </div>

          <div className="rounded-[1.5rem] border border-[#1f3a2f] bg-[#0d1411] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <p className="text-sm leading-7 text-[#d1d5db]">
              I build with modern, production-friendly tools that balance speed, clarity, and
              maintainability across frontend, backend, and product work.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <div className="mb-6">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b7c5be]">
                Core stack
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="stack-logo group flex h-24 flex-col items-center justify-center rounded-2xl border border-[#233a2f] bg-[#0f1a15] text-center"
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#2b463a] bg-[#101d17] text-xs font-black tracking-[0.08em] text-[#d7ffe9] transition-colors duration-200 group-hover:text-[#7ef7b3]">
                    {logo.short}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dbe7df]">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b7c5be]">
                Experience
              </p>
              <span className="rounded-full border border-[#2d493a] bg-[#0c1713] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8de7ae]">
                Active
              </span>
            </div>

            <div className="space-y-2">
              {skills.map((skill) => (
                <Bar key={skill.label} label={skill.label} pct={skill.pct} />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <div className="mb-4 flex items-center justify-between gap-4 px-2">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b7c5be]">
              Technologies
            </p>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8de7ae]">
              Always evolving
            </span>
          </div>

          <div className="tech-marquee">
            <div className="tech-track">
              {[...techMarquee, ...techMarquee].map((item, index) => (
                <span key={`${item}-${index}`} className="tech-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Stack;
