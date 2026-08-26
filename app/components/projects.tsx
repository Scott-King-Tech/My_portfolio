import React from "react";
import Reveal from "./Reveal";

export const projectList = [
  {
    name: "E-commerce Platform",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    link: "https://github.com/yourname/ecommerce-platform",
    technologies: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
  },
  {
    name: "FarmGen",
    image:
      "/project_img/farmgen.jpeg",
    link: "https://farmgen.abrdns.com/"
,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "berliner",
    image:
      "/project_img/berliner.jpeg",
    link: "https://berliner-weg.vercel.app/",
    technologies: ["TypeScript", "Chart.js", "Firebase", "UI/UX"],
  },
  {
    name: "go na go",
    image:
      "/project_img/gonago.jpeg",
    link: "https://go-na-go.com",
    technologies: ["React", "Express", "Redux"],
  },
  {
    name: "github finder",
    image:
      "/project_img/githubfinder.jpeg",
    link: "https://github.com/Scott-King-Tech/Github-Account-Finder.git",
    technologies: ["Next.js", "MySQL", "Tailwind", "API"],
  },
  {
    name: "Maeva tacos",
    image:
      "/project_img/maevatacos.jpeg",
    link: "https://github.com/Scott-King-Tech/Maeva-Tacos.git",
    technologies: ["Django", "css", "html", "SEO"],
  },
];

export const Projects = ({
  limit,
  showHeader = true,
}: {
  limit?: number;
  showHeader?: boolean;
}) => {
  const visibleProjects = typeof limit === "number" ? projectList.slice(0, limit) : projectList;

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <Reveal className="space-y-10">
        {showHeader && (
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
                Work
              </p>
              <h2 className="text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
                Selected projects
              </h2>
            </div>

            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-[#1e3a2d] bg-[#0c1510] px-5 py-2.5 text-sm font-semibold text-[#dfffee] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7ef7b3] hover:text-[#7ef7b3]"
            >
              See all projects
            </a>
          </div>
        )}

        <div className={showHeader ? "grid gap-8 lg:grid-cols-3" : "grid gap-8 md:grid-cols-2 xl:grid-cols-3"}>
          {visibleProjects.map((project) => (
            <article
              key={project.name}
              className="group card-hover overflow-hidden rounded-[1.7rem] border border-[#203327] bg-[#0d1410] shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>

              <div className="space-y-5 p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#ff4d4d]">{project.name}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-medium text-[#a7f3d0] transition-colors hover:text-[#7ef7b3]"
                  >
                    View project →
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7d8b82]">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#2a4135] bg-[#111c16] px-2.5 py-1 text-[11px] font-medium text-[#d7fce7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;

