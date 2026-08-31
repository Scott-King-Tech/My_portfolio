"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid items-start gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#8de7ae]">
              Available for freelance
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Let&apos;s build the next product.
            </h2>
            <p className="mt-4 max-w-md text-base leading-8 text-[#d1d5db]">
              I&apos;m currently taking on select web and product projects where strong UX,
              thoughtful architecture, and modern execution matter.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[#edfdf3]">
              <div className="flex items-center gap-3 rounded-2xl border border-[#213c31] bg-[#101b16] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7ef7b3]" />
                Wetomdiescott@gmail.com
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-[#213c31] bg-[#101b16] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7ef7b3]" />
                github.com/Scott-King-Tech
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-[#213c31] bg-[#101b16] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7ef7b3]" />
                linkedin.com/in/scott-king-tech
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-[#1f3a2f] bg-[#0d1411] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#8de7ae]">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-3 w-full rounded-2xl border border-[#223a2f] bg-[#0a120f] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#6b7a73] focus:border-[#7ef7b3]"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#8de7ae]">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-3 w-full rounded-2xl border border-[#223a2f] bg-[#0a120f] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#6b7a73] focus:border-[#7ef7b3]"
                placeholder="Your email address"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.24em] text-[#8de7ae]">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-3 h-36 w-full rounded-2xl border border-[#223a2f] bg-[#0a120f] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#6b7a73] focus:border-[#7ef7b3]"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === "success" && (
              <p className="text-sm text-[#7ef7b3]">
                Message sent successfully. I will get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-red-400">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-press mt-2 w-full rounded-2xl border border-[#7ef7b3] bg-[#7ef7b3] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#07110c] shadow-[0_0_18px_rgba(126,247,179,0.2)] transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactForm;
