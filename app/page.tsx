import {
  Phone,
  Droplets,
  Snowflake,
  Flame,
  ShieldCheck,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Quote,
  Check,
  Wrench,
  Gauge,
} from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { HeroWires, Wires } from "@/components/site/wires";
import { BoilerCard, PipeCluster, MiniSplit, ServiceMap } from "@/components/site/illustrations";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { RequestServiceButton } from "@/components/site/request-service";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_HREF, EMAIL, SERVICE_TOWNS, HOURS } from "@/lib/site";

const stats = [
  { value: "30+", label: "Years serving Morris County" },
  { value: "24/7", label: "Emergency response" },
  { value: "4.9★", label: "Across 600+ reviews" },
  { value: "100%", label: "Local & family-run" },
];

const standards = [
  {
    eyebrow: "Integrity",
    title: "No Stealth Fees",
    body: "Transparent quotes mean the price we say is the price you pay — every time. No hidden diagnostic fees, no weekend surcharges.",
    accent: "ember",
  },
  {
    eyebrow: "Reliability",
    title: "Rapid Response",
    body: "Locally dispatched with neighborhood routing, so we reach your emergency fast — usually same-day, often within the hour.",
    accent: "copper",
  },
];

const reviews = [
  {
    quote:
      "Mahan arrived within 45 minutes for a burst pipe at 3 AM. The repair was professional and they even helped clean up the water damage. Highly recommend.",
    name: "James D.",
    role: "Montville, NJ",
    initials: "JD",
  },
  {
    quote:
      "Our basement sewer line collapsed and two other companies shrugged. Mahan diagnosed it, gave us a fair number, and replaced it in a day. Lifesavers.",
    name: "Diane R.",
    role: "Towaco, NJ",
    initials: "DR",
  },
  {
    quote:
      "What I appreciate most is the honesty. They told me my AC had a few good years left instead of pushing a $9k replacement. Earned my business for life.",
    name: "Anthony C.",
    role: "Mountain Lakes, NJ",
    initials: "AC",
  },
  {
    quote:
      "Third generation in our house using Mahan. Same care, same fair pricing, always cleans up after the work. They feel like family at this point.",
    name: "Lorraine M.",
    role: "Pine Brook, NJ",
    initials: "LM",
  },
];

const upper = "uppercase tracking-[0.12em]";

export default function Page() {
  return (
    <main id="top" className="relative overflow-x-hidden">
      <Navbar />

      {/* ===================== HERO ===================== */}
      <section className="relative grain overflow-hidden bg-gradient-to-b from-cream via-cream to-sand">
        <HeroWires />
        <div className="container relative z-10 grid min-h-[94vh] grid-cols-1 items-center gap-12 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
          {/* copy */}
          <div>
            <Reveal>
              <span className={`inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/70 px-4 py-1.5 text-[11px] font-bold ${upper} text-ink/70 backdrop-blur`}>
                <span className="h-1.5 w-1.5 rounded-full bg-petrol" />
                Since 1994 · Industrial Precision
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display text-5xl font-600 leading-[1.02] tracking-tight text-ink text-balance sm:text-6xl xl:text-7xl">
                Engineering{" "}
                <span className="italic text-petrol">Comfort</span> With Total
                Precision.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
                Plumbing, heating &amp; air conditioning for Montville homeowners
                who want it done right the first time — fair prices, fast on
                emergencies, and unafraid of the jobs nobody else will touch.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <RequestServiceButton variant="ink" size="lg" className={`${upper} text-sm`}>
                  Book Service Now
                </RequestServiceButton>
                <a href="#services">
                  <Button variant="outline" size="lg" className={`w-full ${upper} text-sm sm:w-auto`}>
                    View Services <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/10 pt-8 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-600 text-petrol">{s.value}</div>
                    <div className="mt-1 text-xs leading-snug text-ink/55">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* illustration card */}
          <Reveal delay={0.2} direction="right" distance={48} duration={0.85}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2.2rem] bg-petrol/10 blur-2xl" />
              <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2rem] border-[6px] border-cream shadow-[0_40px_80px_-30px_rgba(22,65,90,0.5)] rotate-[3deg] transition-transform duration-500 hover:rotate-0">
                <BoilerCard />
              </div>
              <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-ink/10 bg-cream px-4 py-3 shadow-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-petrol text-cream">
                  <Gauge className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-ink">Tuned &amp; tested</div>
                  <div className="text-xs text-ink/55">Post-service audit on every job</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== CORE MASTERIES ===================== */}
      <section id="services" className="relative overflow-hidden bg-cream py-24 md:py-32">
        <Wires variant="right" />
        <div className="container relative">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <SectionLabel>Core Masteries</SectionLabel>
                <h2 className="mt-4 font-display text-4xl font-600 leading-tight text-balance md:text-5xl">
                  One crew for everything water, heat &amp; air.
                </h2>
                <p className="mt-4 text-ink/65">
                  From intricate piping to full HVAC overhauls, our technicians
                  handle every project with proper tools and white-glove care.
                </p>
              </div>
              <RequestServiceButton variant="primary" size="lg" className={`text-sm ${upper}`}>
                Request Service <ArrowRight className="h-4 w-4" />
              </RequestServiceButton>
            </div>
          </Reveal>

          {/* bento grid */}
          <RevealGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2" stagger={0.12}>
            {/* Master Plumbing — tall left */}
            <RevealItem direction="left" className="lg:row-span-2">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/40 hover:shadow-[0_30px_60px_-30px_rgba(22,65,90,0.4)]">
                <BentoIcon icon={Droplets} />
                <h3 className="mt-5 font-display text-2xl font-600">Master Plumbing</h3>
                <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-ink/65">
                  Full-spectrum installation, emergency leak repair, and advanced
                  drain &amp; sewer diagnostics — including collapsed sewer lines
                  other shops walk away from.
                </p>
                <ul className="mt-5 space-y-1.5">
                  {["Sewer & drain repair", "Water heaters", "Leak detection", "Repipes & fixtures"].map((p) => (
                    <Bullet key={p}>{p}</Bullet>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <div className="-mx-7 -mb-7 mt-4 h-44 px-7">
                    <PipeCluster />
                  </div>
                </div>
              </article>
            </RevealItem>

            {/* Air Conditioning — wide top right */}
            <RevealItem direction="up" className="lg:col-span-2">
              <article className="group relative flex h-full items-center gap-6 overflow-hidden rounded-3xl border border-ink/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/40 hover:shadow-[0_30px_60px_-30px_rgba(22,65,90,0.4)]">
                <div className="flex-1">
                  <BentoIcon icon={Snowflake} />
                  <h3 className="mt-5 font-display text-2xl font-600">Air Conditioning</h3>
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-ink/65">
                    Honest sizing, clean central &amp; ductless installs, and smart
                    thermostat integration that keeps up with a Jersey August.
                  </p>
                </div>
                <div className="hidden h-32 w-56 shrink-0 sm:block">
                  <MiniSplit />
                </div>
              </article>
            </RevealItem>

            {/* Heating Systems */}
            <RevealItem direction="up">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-copper/40 hover:shadow-[0_30px_60px_-30px_rgba(22,65,90,0.4)]">
                <BentoIcon icon={Flame} />
                <h3 className="mt-5 font-display text-2xl font-600">Heating Systems</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                  Boilers and furnaces diagnosed and fixed — not just swapped.
                  When the heat quits on the coldest night, we show up.
                </p>
              </article>
            </RevealItem>

            {/* Priority Care — dark CTA */}
            <RevealItem direction="up">
              <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-petrol p-7 text-cream">
                <Wires variant="band" tone="cream" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ember/20 text-ember">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-600">Priority Care</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-cream/70">
                    Join our annual protection plan: 15% off all repairs, seasonal
                    tune-ups, and front-of-line emergency dispatch.
                  </p>
                </div>
                <div className="relative mt-6">
                  <RequestServiceButton variant="primary" className={`text-sm ${upper}`}>
                    Join the Plan
                  </RequestServiceButton>
                </div>
              </article>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* ===================== THE MAHAN STANDARD ===================== */}
      <section id="standard" className="relative overflow-hidden bg-sand py-24 md:py-32">
        <Wires variant="left" />
        <div className="container relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal direction="left" distance={44}>
            <div className="lg:sticky lg:top-28">
              <SectionLabel>The Mahan Standard</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-600 leading-tight text-balance md:text-5xl">
                We don&apos;t just fix pipes. We engineer peace of mind.
              </h2>
              <p className="mt-5 max-w-md text-ink/65">
                Our protocols come from commercial-grade standards, brought home
                to your basement. It&apos;s the part you can&apos;t fake: showing
                up, being straight with you, and standing behind the work.
              </p>
              <ul className="mt-7 space-y-2.5">
                {["Fixed-price guarantee", "Certified journeymen", "Post-service audits"].map((p) => (
                  <li key={p} className={`flex items-center gap-2.5 text-sm font-semibold ${upper} text-ink/75`}>
                    <Check className="h-4 w-4 text-petrol" /> {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <RequestServiceButton variant="primary" size="lg" className={`text-sm ${upper}`}>
                  Request Service
                </RequestServiceButton>
                <a href={PHONE_HREF}>
                  <Button variant="outline" size="lg" className={`w-full text-sm ${upper} sm:w-auto`}>
                    <Phone className="h-4 w-4" /> {PHONE}
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <RevealGroup className="grid gap-5 sm:grid-cols-2">
              {standards.map((s) => (
                <RevealItem key={s.title} direction="right">
                  <div
                    className={`h-full rounded-3xl border bg-cream p-7 transition-transform duration-300 hover:-translate-y-1 ${
                      s.accent === "ember" ? "border-ember/40" : "border-petrol/30"
                    }`}
                  >
                    <div className={`text-xs font-bold ${upper} text-petrol`}>
                      {s.eyebrow}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-600">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/65">{s.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            {/* locally owned band */}
            <Reveal direction="up" distance={44}>
              <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-cream md:p-10">
                <Wires variant="split" tone="cream" />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-600 leading-tight">
                      Locally Owned.
                      <br />
                      Community Focused.
                    </h3>
                    <p className="mt-3 max-w-sm text-sm text-cream/65">
                      We live and work in Montville. Your neighbors are our
                      customers — and our reputation walks the same streets you do.
                    </p>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    {[Wrench, Flame, Snowflake].map((Icon, i) => (
                      <span
                        key={i}
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cream/15 bg-cream/[0.06] text-ember"
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== CLIENT VERDICTS ===================== */}
      <section id="reviews" className="relative overflow-hidden bg-cream py-24 md:py-32">
        <div className="container relative">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <SectionLabel>Client Verdicts</SectionLabel>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-ember text-ember" />
                ))}
              </div>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-600 leading-tight text-balance md:text-5xl">
                The reviews read like thank-you notes.
              </h2>
            </div>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.09}>
            {reviews.map((r) => (
              <RevealItem key={r.name} direction="up">
                <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(22,65,90,0.4)]">
                  <Quote className="h-8 w-8 text-petrol/40" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/85">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-petrol/10 text-sm font-bold text-petrol">
                      {r.initials}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{r.name}</div>
                      <div className="text-xs text-ink/55">{r.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="bg-sand pb-16 pt-8 md:pb-24">
        <div className="container">
          <Reveal direction="scale" duration={0.8}>
            <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-cream shadow-[0_40px_80px_-40px_rgba(22,65,90,0.45)]">
              <div className="grid lg:grid-cols-2">
                {/* left: details */}
                <div className="relative overflow-hidden p-8 md:p-12">
                  <div className="relative">
                    <SectionLabel>Ready to upgrade your comfort?</SectionLabel>
                    <h2 className="mt-4 font-display text-3xl font-600 leading-tight text-balance md:text-4xl">
                      Something leaking, clanking, or just not working?
                    </h2>
                    <p className="mt-4 max-w-md text-ink/65">
                      Serving Montville and the greater Morris County region. Call
                      us or send a request — we&apos;re ready when you are.
                    </p>

                    <div className="mt-8 space-y-4">
                      <ContactRow icon={MapPin} label="Service area">
                        Serving all of Morris County, NJ
                      </ContactRow>
                      <ContactRow icon={Clock} label="Hours">
                        {HOURS.map((h) => `${h.day}: ${h.time}`).join("  ·  ")}
                      </ContactRow>
                      <ContactRow icon={Phone} label="Phone">
                        <a href={PHONE_HREF} className="font-semibold text-petrol hover:underline">
                          {PHONE}
                        </a>
                      </ContactRow>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <RequestServiceButton variant="primary" size="lg" className={`text-sm ${upper}`}>
                        Schedule a Visit
                      </RequestServiceButton>
                      <a href={PHONE_HREF}>
                        <Button variant="ink" size="lg" className={`w-full text-sm ${upper} sm:w-auto`}>
                          <Phone className="h-4 w-4" /> Call Now
                        </Button>
                      </a>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {SERVICE_TOWNS.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/10 bg-white/60 px-3 py-1.5 text-xs font-medium text-ink/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* right: map */}
                <div className="relative min-h-[320px] bg-gradient-to-br from-sand to-cream p-8 md:p-12">
                  <ServiceMap />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="relative overflow-hidden bg-petrol text-cream">
        <Wires variant="band" tone="cream" />
        <div className="container relative py-14">
          <div className="flex flex-col items-center justify-between gap-6 border-b border-cream/15 pb-10 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-petrol text-cream">
                <Droplets className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-lg font-600">Mahan Plumbing, Heating &amp; AC</div>
                <div className="text-xs text-cream/55">Licensed &amp; insured · Montville, NJ</div>
              </div>
            </div>
            <a href={PHONE_HREF}>
              <Button variant="primary" size="lg" className={`text-sm ${upper}`}>
                <Phone className="h-4 w-4" /> {PHONE}
              </Button>
            </a>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 pt-8 text-sm text-cream/55 sm:flex-row">
            <div>© {new Date().getFullYear()} Mahan PHAC · All rights reserved.</div>
            <a href={`mailto:${EMAIL}`} className="hover:text-ember">{EMAIL}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ----------------------------- small helpers ----------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className={`text-xs font-bold ${upper} text-petrol`}>{children}</span>
  );
}

function BentoIcon({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-petrol/10 text-petrol transition-colors duration-300 group-hover:bg-petrol group-hover:text-cream">
      <Icon className="h-6 w-6" />
    </span>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 text-sm text-ink/70">
      <span className="h-1.5 w-1.5 rounded-full bg-petrol" />
      {children}
    </li>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-petrol/10 text-petrol">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className={`text-[11px] font-bold ${upper} text-ink/45`}>{label}</div>
        <div className="text-sm text-ink/80">{children}</div>
      </div>
    </div>
  );
}
