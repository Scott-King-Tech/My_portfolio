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
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <span className="inline-block text-sm text-green-400 mb-4">AVAILABLE FOR FREELANCE</span>
          <Reveal>
            <h2 className="text-5xl font-extrabold text-white">Let's Build<br/>The Future.</h2>
            <p className="mt-4 text-gray-300">Currently accepting new projects for Q3. Looking for robust architectural solutions or a high-performance frontend? Let's discuss your technical requirements.</p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>Wetomdiescott@gmail.com</li>
              <li>github.com/Scott-King-Tech</li>
              <li>linkedin.com/in/scott-king-tech</li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="bg-[#0d0d0d] p-6 rounded border border-[#183e2b]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm text-gray-300">
              Identification [Name]
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full bg-black/60 border border-[#222] p-2 text-white outline-none focus:border-[#7ef7b3]"
                placeholder="Enter your full name"
              />
            </label>

            <label className="block text-sm text-gray-300">
              Comms Link [Email]
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full bg-black/60 border border-[#222] p-2 text-white outline-none focus:border-[#7ef7b3]"
                placeholder="Enter your email address"
              />
            </label>

            <label className="block text-sm text-gray-300">
              Payload [Message]
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-2 w-full bg-black/60 border border-[#222] p-2 text-white h-32 outline-none focus:border-[#7ef7b3]"
                placeholder="Describe your project requirements..."
              />
            </label>

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
              className="mt-4 w-full bg-red-600 text-white py-3 font-medium btn-press disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "SENDING..." : "INITIATE TRANSMISSION ▷"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactForm;
