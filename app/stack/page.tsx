import React from "react";
import Footer from "../components/footer";

const categories = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive builds"],
    accent: "UX",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication", "Data logic"],
    accent: "API",
  },
  {
    title: "AI & Automation",
    items: ["AI agents", "Prompt systems", "Workflow automation", "Integrations"],
    accent: "AI",
  },
];

const tools = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "GitHub",
  "Figma",
  "Prisma",
  "Docker",
  "Supabase",
  "REST API",
  "SEO",
];

const skills = [
  { label: "Frontend Architecture", pct: 90 },
  { label: "Backend Development", pct: 94 },
  { label: "AI / Automation", pct: 88 },
  { label: "UI / UX Design", pct: 84 },
  { label: "Performance Optimization", pct: 86 },
];

export default function StackPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">Stack</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.08em] text-white md:text-6xl">
            The systems behind the work.
          </h1>
          <p className="mt-5 text-base leading-8 text-[#d1d5db] md:text-lg">
            I build with a practical mix of modern frontend, backend, and AI tooling to create fast,
            clear, and production-ready digital experiences.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-black text-white">{category.title}</h2>
                  <span className="rounded-full border border-[#2d493a] bg-[#101d17] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8de7ae]">
                    {category.accent}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#233a2f] bg-[#101b16] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#e5f5eb]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#b7c5be]">Strength</p>
            <div className="mt-6 space-y-5">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium uppercase tracking-[0.12em] text-[#dfe7e3]">
                      {skill.label}
                    </span>
                    <span className="text-sm font-bold text-[#ff5a5a]">{skill.pct}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-[#142019]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#8de7ae] via-[#7ef7b3] to-[#d9ffe9]"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[#b7c5be]">Full stack toolkit</p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#2a4337] bg-[#101d17] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#dfe7e3]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
