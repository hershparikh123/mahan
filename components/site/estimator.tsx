"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Flame, Snowflake, Check, Phone, Info, ArrowRight } from "lucide-react";
import {
  SERVICES,
  SEVERITY,
  EMERGENCY_FEE,
  calcEstimate,
  findJob,
  formatUSD,
  type ServiceId,
  type Severity,
} from "@/lib/estimator";
import { Button } from "@/components/ui/button";
import { RequestServiceButton } from "./request-service";
import { PHONE, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: Record<ServiceId, React.ComponentType<{ className?: string }>> = {
  plumbing: Droplets,
  heating: Flame,
  ac: Snowflake,
};

const upper = "uppercase tracking-[0.12em]";

export function Estimator() {
  const [serviceId, setServiceId] = React.useState<ServiceId | null>(null);
  const [jobId, setJobId] = React.useState<string | null>(null);
  const [severity, setSeverity] = React.useState<Severity | null>(null);
  const [afterHours, setAfterHours] = React.useState(false);

  const service = SERVICES.find((s) => s.id === serviceId);
  const job = findJob(serviceId, jobId);
  const result = calcEstimate({ serviceId, jobId, severity, afterHours });

  function chooseService(id: ServiceId) {
    setServiceId(id);
    setJobId(null); // jobs differ per service
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
      {/* ---------------- inputs ---------------- */}
      <div className="space-y-10">
        {/* 1 — service */}
        <Step n={1} title="What kind of work is it?">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.id];
              const active = serviceId === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => chooseService(s.id)}
                  className={cn(
                    "group flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-200",
                    active
                      ? "border-petrol bg-petrol/5 ring-2 ring-petrol/20"
                      : "border-ink/12 bg-white/60 hover:border-petrol/40 hover:-translate-y-0.5"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                      active ? "bg-petrol text-cream" : "bg-petrol/10 text-petrol"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-3 font-semibold text-ink">{s.label}</span>
                  <span className="mt-0.5 text-xs leading-snug text-ink/55">{s.blurb}</span>
                </button>
              );
            })}
          </div>
        </Step>

        {/* 2 — job */}
        <Step n={2} title="Which best describes it?" disabled={!service}>
          {service ? (
            <div className="flex flex-wrap gap-2">
              {service.jobs.map((j) => {
                const active = jobId === j.id;
                return (
                  <button
                    key={j.id}
                    type="button"
                    onClick={() => setJobId(j.id)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                      active
                        ? "border-petrol bg-petrol text-cream"
                        : "border-ink/15 bg-white/60 text-ink/75 hover:border-petrol/50 hover:text-ink"
                    )}
                  >
                    {j.label}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-ink/40">Pick a service above first.</p>
          )}
        </Step>

        {/* 3 — extent */}
        <Step n={3} title="How big is the problem?" disabled={!job}>
          <div className="grid gap-3 sm:grid-cols-3">
            {SEVERITY.map((s) => {
              const active = severity === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  disabled={!job}
                  onClick={() => setSeverity(s.id)}
                  className={cn(
                    "rounded-2xl border p-4 text-left transition-all duration-200 disabled:opacity-40",
                    active
                      ? "border-petrol bg-petrol/5 ring-2 ring-petrol/20"
                      : "border-ink/12 bg-white/60 enabled:hover:border-petrol/40"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-ink">{s.label}</span>
                    {active && <Check className="h-4 w-4 text-petrol" />}
                  </div>
                  <p className="mt-1 text-xs leading-snug text-ink/55">{s.desc}</p>
                </button>
              );
            })}
          </div>
        </Step>

        {/* 4 — after hours */}
        <Step n={4} title="Is it urgent?" disabled={!job}>
          <button
            type="button"
            disabled={!job}
            onClick={() => setAfterHours((v) => !v)}
            className={cn(
              "flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200 disabled:opacity-40",
              afterHours ? "border-ember bg-ember/10" : "border-ink/12 bg-white/60 enabled:hover:border-ember/50"
            )}
          >
            <span>
              <span className="font-semibold text-ink">Nights, weekends or emergency</span>
              <span className="mt-0.5 block text-xs text-ink/55">
                Adds a flat {formatUSD(EMERGENCY_FEE)} after-hours call-out.
              </span>
            </span>
            <span
              className={cn(
                "relative h-6 w-11 shrink-0 rounded-full transition-colors",
                afterHours ? "bg-ember" : "bg-ink/20"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
                  afterHours ? "left-[22px]" : "left-0.5"
                )}
              />
            </span>
          </button>
        </Step>
      </div>

      {/* ---------------- result ---------------- */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink text-cream shadow-[0_30px_60px_-30px_rgba(22,65,90,0.5)]">
          <div className="p-7">
            <div className={`text-xs font-bold ${upper} text-ember`}>Your ballpark</div>

            <div className="mt-3 min-h-[64px]">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key={`${jobId}-${severity}-${afterHours}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="font-display text-4xl font-600 leading-none md:text-5xl"
                  >
                    {formatUSD(result.low)}
                    <span className="px-2 text-cream/40">–</span>
                    {formatUSD(result.high)}
                  </motion.div>
                ) : (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-cream/60"
                  >
                    Make your selections to see an estimate.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {result && (
              <ul className="mt-5 space-y-2 border-t border-cream/15 pt-5 text-sm text-cream/75">
                <li className="flex justify-between gap-4">
                  <span>{service?.label} · {job?.label}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Extent</span>
                  <span className="text-cream/90">{SEVERITY.find((s) => s.id === severity)?.label}</span>
                </li>
                {result.fee > 0 && (
                  <li className="flex justify-between gap-4">
                    <span>After-hours call-out</span>
                    <span className="text-ember">+ {formatUSD(result.fee)}</span>
                  </li>
                )}
              </ul>
            )}
          </div>

          <div className="space-y-3 bg-cream/[0.04] p-7">
            <RequestServiceButton variant="primary" size="lg" className={`w-full text-sm ${upper}`}>
              Request this service <ArrowRight className="h-4 w-4" />
            </RequestServiceButton>
            <a href={PHONE_HREF} className="block">
              <Button variant="outline" size="lg" className={`w-full border-cream/25 text-sm text-cream hover:border-ember hover:text-ember ${upper}`}>
                <Phone className="h-4 w-4" /> {PHONE}
              </Button>
            </a>
          </div>
        </div>

        <p className="mt-4 flex gap-2 text-xs leading-relaxed text-ink/55">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-petrol" />
          This is a rough estimate to set expectations — not a final quote. The
          real price depends on what we find on-site, and we&apos;ll always
          confirm it with you before any work begins.
        </p>
      </div>
    </div>
  );
}

function Step({
  n,
  title,
  children,
  disabled,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <div className={cn("transition-opacity", disabled && "opacity-55")}>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-petrol/10 text-sm font-bold text-petrol">
          {n}
        </span>
        <h3 className="font-display text-xl font-600 text-ink">{title}</h3>
      </div>
      {children}
    </div>
  );
}
