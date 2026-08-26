import React from "react";

const socialLinks = [
  {
    href: "https://github.com/Scott-King-Tech",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 .5a12 12 0 0 0-3.79 23.38c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.6-2.82 5.61-5.5 5.91.43.38.81 1.12.81 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/scott-king-tech?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M6.94 8.5A1.7 1.7 0 1 1 6.9 5.1a1.7 1.7 0 0 1 .04 3.4ZM5.5 10h2.88v9H5.5v-9Zm5.07 0h2.76v1.23h.04c.38-.73 1.33-1.5 2.73-1.5 2.93 0 3.47 1.92 3.47 4.42V19h-2.87v-17.7c0-1.06-.02-2.42-1.48-2.42-1.48 0-1.7 1.15-1.7 2.34V19h-2.95v-9Z" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/+8615180039126",
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M19.05 4.94A9.9 9.9 0 0 0 12.1 2a9.96 9.96 0 0 0-8.67 15.15L2 22l5.02-1.32A9.95 9.95 0 0 0 12.1 22a9.96 9.96 0 0 0 6.95-17.06ZM12.1 19.4a8.25 8.25 0 0 1-4.19-1.14l-.3-.18-2.98.78.8-2.9-.2-.3A8.26 8.26 0 1 1 12.1 19.4Zm4.53-6.2c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.55.12-.16.25-.62.8-.76.97-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.38-1.73-.14-.25-.02-.39.11-.51.12-.12.25-.28.37-.42.12-.14.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.61.57.25.99.4 1.33.51.57.18 1.09.15 1.5.09.46-.07 1.47-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.2-.16-.45-.28Z" />
      </svg>
    ),
  },
];

export const Footer = () => {
  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/stack", label: "Stack" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="mt-12 border-t border-[#222] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 px-6 text-center text-gray-400 md:flex-row md:items-center md:justify-between md:text-left lg:text-left">
        <div className="text-xs uppercase tracking-[0.24em] text-[#d1d5db]">
          © 2024 All rights reserved.
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:hidden">
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#ff5a5a] transition-colors hover:text-[#ff7a7a]"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-end">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#2d3d34] bg-[#111111] px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#ff5a5a] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff7a7a] hover:text-[#ff7a7a]"
              aria-label={label}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#3b4f46] bg-[#171d1a] text-[#ff5a5a] transition-colors group-hover:text-[#ff7a7a]">
                {icon}
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
