import React from "react";
import Projects, { projectList } from "../components/projects";
import Footer from "../components/footer";

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8de7ae]">
            Portfolio
          </p>
          <h1 className="text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">
            All projects
          </h1>
        </div>
        <Projects limit={projectList.length} showHeader={false} />
      </div>
      <Footer />
    </main>
  );
}
