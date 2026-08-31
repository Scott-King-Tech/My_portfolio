import React from "react";
import Footer from "../components/footer";

const milestones = [
  {
    period: "2022 - 2023",
    title: "GCE Advanced Level",
    description: "Built a strong foundation in mathematics, science, and analytical thinking that shaped my approach to technology and problem-solving.",
    accent: "Education",
  },
  {
    period: "2026 - Present",
    title: "Bachelor Degree in Computer Science",
    description: "Advancing my knowledge in software engineering, systems thinking, and modern computing practices while developing applied technical skills. I follow this objective in CHINA, at XInyu university",
    accent: "Degree",
  },
  {
    period: "2023 - 2024",
    title: "Full Stack Certificate",
    description: "Focused on end-to-end web development, covering frontend architecture, backend logic, APIs, and deployment workflows. Delivered by PROPENTA TECH ",
    accent: "Certification",
  },
  {
    period: "2024 - 2026",
    title: "Freelance Experience",
    description: "Delivered practical digital solutions for clients, improving my professional execution, communication, and product-oriented thinking.",
    accent: "Experience",
  },
];

const heroImages = [
  {
    src: "/about_img/img.jpg",
    alt: "Portrait photo of me",
  },
  {
    src: "/about_img/WhatsApp Image 2026-08-31 at 16.48.13.jpeg",
    alt: "Second portrait photo of me",
  },
  {
    src: "/about_img/WhatsApp Image 2026-08-31 at 16.48.16.jpeg",
    alt: "Third portrait photo of me",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
              About
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-[-0.08em] text-white md:text-6xl">
              A focused learner building a career in technology.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#d1d5db] md:text-lg">
              I am a passionate developer and computer science student, combining academic study,
              professional learning, and hands-on freelance work to grow into a capable full-stack engineer.
              I am especially interested in AI automation, AI agent creation, and deploying reliable digital
              solutions in real-world environments. I am currently seeking opportunities to contribute to
              innovative projects and continue growing in a collaborative environment.
            </p>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] shadow-[0_16px_40px_rgba(0,0,0,0.2)] md:h-[420px]">
            {heroImages.map((about_img, index) => (
              <img
                key={about_img.src}
                src={about_img.src}
                alt={about_img.alt}
                className="hero-image-cycle absolute inset-0 h-full w-full object-cover"
                style={{ animationDelay: `${index * 3}s` }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-[#07110c]/80 via-transparent to-[#07110c]/20" />
          </div>
        </div>

        <div className="mb-10 rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 md:p-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
              What defines me
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Full-Stack Development",
                text: "I build complete digital experiences from user interfaces to APIs, logic, and deployment workflows.",
              },
              {
                title: "Mobile Development",
                text: "I enjoy creating smooth, responsive interfaces that work well across devices and real-world use cases.",
              },
              {
                title: "AI Automation",
                text: "I design systems that simplify repetitive work and improve operational efficiency through intelligent workflows.",
              },
              {
                title: "AI Agent Creation & Deployment",
                text: "I explore practical AI-powered agents and scalable deployment approaches that turn ideas into usable solutions.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#213c31] bg-[#142019] p-5">
                <div className="mb-3 h-2 w-12 rounded-full bg-[#ff5a5a]" />
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#d1d5db]">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-4xl text-base leading-8 text-[#e5f5eb]">
            I am a very hard worker, deeply passionate about building new solutions, learning continuously,
            and turning ideas into practical products that create value.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
                  Journey
                </p>
                <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                  Evolution roadmap
                </h2>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-[#7ef7b3] via-[#2b5d4a] to-transparent" />

              <div className="space-y-8">
                {milestones.map((item) => (
                  <div key={item.period} className="relative flex gap-5">
                    <div className="relative z-10 mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#7ef7b3] bg-[#101b16] shadow-[0_0_18px_rgba(126,247,179,0.2)]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#7ef7b3]" />
                    </div>

                    <div className="flex-1 rounded-2xl border border-[#213c31] bg-[#101b16] p-5">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8de7ae]">
                          {item.accent}
                        </span>
                        <span className="text-xs text-[#b7c5be]">{item.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#d1d5db]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
              Profile
            </p>
            <h2 className="mt-4 text-2xl font-black text-white">Professional direction</h2>

            <p className="mt-5 text-sm leading-7 text-[#d1d5db]">
              My path reflects a steady progression from strong academic foundations to practical software
              development. Each stage has deepened my understanding of technology, problem-solving, and product
              delivery, allowing me to move from learning into building meaningful digital experiences.
            </p>

            <div className="mt-7 rounded-2xl border border-[#213c31] bg-[#101b16] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8de7ae]">
                Focus
              </p>
              <p className="mt-3 text-base font-medium text-white">
                Full-stack development, modern web experiences, and scalable digital solutions, AI automation, and AI agent creation.


              </p>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
