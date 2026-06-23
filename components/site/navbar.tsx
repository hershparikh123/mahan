"use client";

import * as React from "react";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { RequestServiceButton } from "./request-service";
import { PHONE, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#standard", label: "How we work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/estimate", label: "Estimate" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <header
        className={cn(
          "container flex h-16 items-center justify-between gap-4 rounded-full border px-4 transition-all duration-300 md:h-[68px] md:px-6",
          scrolled
            ? "border-ink/10 bg-cream/85 shadow-[0_10px_40px_-18px_rgba(22,65,90,0.4)] backdrop-blur-md"
            : "border-ink/5 bg-cream/60 backdrop-blur-sm"
        )}
      >
        <a href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-petrol text-cream transition-transform group-hover:-rotate-6">
            <Droplets className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-600 tracking-tight text-ink">
            Mahan <span className="text-ink/45">Plumbing &amp; HVAC</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-ink/70 transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-petrol after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href={PHONE_HREF}>
            <span className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-xs font-bold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-petrol">
              <Phone className="h-3.5 w-3.5" />
              24/7 Emergency
            </span>
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {open && (
        <div className="container mt-2 rounded-2xl border border-ink/10 bg-cream/95 p-3 shadow-lg backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink/80 hover:bg-ink/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-cream"
            >
              <Phone className="h-4 w-4" /> 24/7 Emergency
            </a>
            <div className="pt-1">
              <RequestServiceButton className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
