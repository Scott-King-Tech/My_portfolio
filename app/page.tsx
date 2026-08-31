

import React from "react";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Homestack from "./components/homestack";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Projects limit={3} />
      <Homestack />
      <Footer />
    </main>
  );
}
