

import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM || "onboarding@resend.dev";

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }

  return resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["Wetomdiescott@gmail.com"],
    replyTo: email,
    subject: `New portfolio contact from ${name}`,
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });
}