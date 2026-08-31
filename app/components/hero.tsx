import React from "react";
import Reveal from "./Reveal";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1d3d2c] bg-[#0d1b13] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9ef7c5] shadow-[0_0_28px_rgba(34,197,94,0.15)]">
              <span className="h-2 w-2 rounded-full bg-[#7ef7b3]" />
              Available for work
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.38em] text-[#9ca3af]">
                Full-stack developer
              </p>

              <h1 className="name-stack text-5xl font-black leading-[0.82] tracking-[-0.07em] md:text-6xl xl:text-7xl">
                <span className="name-line block text-white">Ndjofang</span>
                <span className="name-line name-highlight block">
                  Wetomdie
                </span>
                <span className="name-line block text-white">Loic Scott</span>
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-[#d1d5db] md:text-lg">
              I design and build digital experiences that are clean, fast, and memorable — from
              modern interfaces to practical, scalable product solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#7ef7b3] px-6 py-3 text-sm font-semibold text-[#07130d] transition-transform duration-200 hover:-translate-y-0.5"
              >
                View projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#2c3f31] bg-[#111111] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#7ef7b3] hover:text-[#7ef7b3]"
              >
                Contact me
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
            <div className="hero-glow hero-orb hero-orb-one" />
            <div className="hero-glow hero-orb hero-orb-two" />
            <div className="hero-panel relative w-full overflow-hidden rounded-[2rem] border border-[#214c35] bg-[#0e1712] p-3 shadow-[0_0_40px_rgba(34,197,94,0.12)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(126,247,179,0.28),transparent_32%),linear-gradient(135deg,_rgba(126,247,179,0.10),transparent_45%)]" />

              <div className="portrait-frame relative overflow-hidden rounded-[1.5rem] border border-[#25553a] bg-[#0b130f] p-3">
                <img
                  src="/img.jpg"
                  alt="Ndjofang Wetomdie Loic Scott"
                  className="portrait-image h-[480px] w-full rounded-[1.2rem] object-cover object-center grayscale-[0.15] contrast-110 saturate-125"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
