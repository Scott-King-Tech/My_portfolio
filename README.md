# My Portfolio — Local Setup

This repository is a Next.js portfolio site styled with Tailwind CSS. I scaffolded core components (Navbar, Hero, Projects, Stack, ContactForm, Footer) and pages to match the dark, grid-based design.

Quick setup steps:

1. Install dependencies:

```bash
npm install
```

2. If you don't have Tailwind installed, ensure the following packages are present (example):

```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
```

3. Run the dev server:

```bash
npm run dev
```

Files added/updated:
- `app/components/*` — Navbar, Hero, Projects, Stack, ContactForm, Footer
- `app/page.tsx` — composed homepage
- `app/projects/page.tsx`, `app/stack/page.tsx`, `app/contact/page.tsx`
- `app/globals.css` — dark grid background and accents
- `tailwind.config.cjs` — Tailwind content and theme

Next steps you may want me to do:
- Add real images and icons (placed in `public/`) and wire them into cards
- Tune typography and add the exact fonts used in the design
- Add animations and responsive refinements
- Configure contact form submission (email/API)

Tell me which of these you'd like next.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
