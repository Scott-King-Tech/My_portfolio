import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Navbar } from "./components/navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ndjofang Wetomdie Loic Scott | Portfolio",
  description: "Portfolio of Ndjofang Wetomdie Loic Scott — full-stack developer creating modern, fast, and thoughtful digital experiences.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ndjofang Wetomdie Loic Scott | Portfolio",
    description: "Full-stack developer building modern, scalable digital experiences.",
    url: "https://example.com",
    siteName: "Ndjofang Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ndjofang Wetomdie Loic Scott | Portfolio",
    description: "Full-stack developer building modern, scalable digital experiences.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}

        <Link
          href="/contact"
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-[#ff5a5a]/40 bg-[#111111]/90 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#ff5a5a] shadow-[0_10px_30px_rgba(255,90,90,0.22)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff7a7a] hover:text-[#ff7a7a]"
          aria-label="Contact me"
        >
          <span className="h-2 w-2 rounded-full bg-[#ff5a5a] shadow-[0_0_12px_rgba(255,90,90,0.8)]" />
          Contact
        </Link>
      </body>
    </html>
  );
}
