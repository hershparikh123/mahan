# Mahan Plumbing, Heating & AC

A single-page marketing site for Mahan Plumbing, Heating & AC Service — a family-run
plumbing/HVAC company in Montville, NJ.

Built with **Next.js (App Router)**, **Tailwind CSS**, **shadcn-style UI primitives**,
and **Framer Motion** for the scroll animations. Powder-blue / white / butter-yellow
palette with an animated "fluid-flow" pipe motif woven through the background.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

- `app/` — page, layout, global styles
- `components/site/` — navbar, hero/section wires, illustrations, reveal animations, request-service modal
- `components/ui/` — button, dialog primitives
- `lib/site.ts` — phone, hours, service towns (edit business details here)

## Deploy

Static, no backend. Easiest path is [Vercel](https://vercel.com): import this repo and deploy.
