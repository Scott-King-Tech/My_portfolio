import React from "react";
import Stack from "../components/stack";
import Footer from "../components/footer";

export default function StackPage() {
  return (
    <main className="flex-1">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-4">
        <h1 className="text-4xl font-extrabold text-white mb-3">The Architecture</h1>
        <p className="text-gray-300 max-w-2xl">A rigorous examination of the tools and technologies that power precision-engineered software. Minimal abstraction, maximum control.</p>
      </div>
      <Stack variant="page" />
      <Footer />
    </main>
  );
}
