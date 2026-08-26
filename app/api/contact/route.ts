import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
    });

    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
