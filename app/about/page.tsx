import React from "react";
import Footer from "../components/footer";

const values = [
  "I build clean, modern interfaces that feel premium and easy to use.",
  "I care deeply about performance, maintainability, and long-term product quality.",
  "I enjoy turning complex ideas into clear, practical digital experiences.",
];

const stats = [
  { label: "Years building", value: "2+" },
  { label: "Projects shipped", value: "15+" },
  { label: "Focus", value: "Full-stack" },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
              About
            </p>
            <h1 className="text-4xl font-black tracking-[-0.08em] text-white md:text-6xl">
              I design digital products with clarity and intention.
            </h1>
            <p className="max-w-xl text-base leading-8 text-[#d1d5db] md:text-lg">
              I’m Ndjofang Wetomdie Loic Scott, a developer focused on building elegant,
              high-performing experiences that solve real problems. I work across product design,
              front-end development, and scalable application architecture.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#1f3a2f] bg-[#0d1411] p-4">
                  <div className="text-2xl font-black text-[#7ef7b3]">{stat.value}</div>
                  <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#b7c5be]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="about-glow about-glow-one" />
            <div className="about-glow about-glow-two" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-3 shadow-[0_25px_60px_rgba(34,197,94,0.12)]">
              <div className="overflow-hidden rounded-[1.5rem] border border-[#25553a] bg-[#0b130f] p-3">
                <img
                  src="/img.jpg"
                  alt="Ndjofang Wetomdie Loic Scott"
                  className="h-[520px] w-full rounded-[1.2rem] object-cover object-center grayscale-[0.2] contrast-110 saturate-125"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 md:p-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
              Philosophy
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <div key={item} className="rounded-2xl border border-[#213c31] bg-[#101b16] p-5 text-[#e5f5eb]">
                <div className="mb-3 h-2 w-12 rounded-full bg-[#7ef7b3]" />
                <p className="text-base leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
