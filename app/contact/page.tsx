import React from "react";
import ContactForm from "../components/contactForm";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactForm />
      <Footer />
    </main>
  );
}
