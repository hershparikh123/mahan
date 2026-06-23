import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Droplets } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { HeroWires } from "@/components/site/wires";
import { Reveal } from "@/components/site/reveal";
import { Estimator } from "@/components/site/estimator";
import { PHONE, PHONE_HREF, EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get a ballpark estimate — Mahan Plumbing, Heating & AC",
  description:
    "Tell us the type of work and how big the problem is, and get a rough price range before we even visit — no obligation.",
};

export default function EstimatePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />

      {/* header */}
      <section className="relative grain overflow-hidden bg-gradient-to-b from-cream via-cream to-sand">
        <HeroWires />
        <div className="container relative z-10 pt-32 pb-12 md:pt-36 md:pb-16">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-petrol"
            >
              <ArrowLeft className="h-4 w-4" /> Back home
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <span className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-petrol">
              Ballpark estimate
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-600 leading-tight text-balance text-ink md:text-5xl">
              Get a rough price before we visit.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-4 max-w-xl text-lg text-ink/65">
              Answer a few quick questions and we&apos;ll give you a ballpark range.
              It only takes a moment, and there&apos;s no obligation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* estimator */}
      <section className="bg-sand pb-20 pt-10 md:pb-28">
        <div className="container">
          <Reveal>
            <Estimator />
          </Reveal>
        </div>
      </section>

      {/* slim footer */}
      <footer className="bg-petrol text-cream">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 text-sm text-cream/60 sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5 text-cream">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-copper text-ink">
              <Droplets className="h-5 w-5" />
            </span>
            <span className="font-display text-base font-600">Mahan Plumbing, Heating &amp; AC</span>
          </Link>
          <div className="flex items-center gap-5">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-semibold text-cream hover:text-ember">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-ember">{EMAIL}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
