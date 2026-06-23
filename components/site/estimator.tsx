"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Flame, Snowflake, Check, Phone, ArrowRight } from "lucide-react";
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
    setJobId(null);
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_40px_90px_-50px_rgba(22,65,90,0.5)] lg:grid lg:grid-cols-[1.55fr_1fr]">
      {/* ----------------------- inputs ----------------------- */}
      <div className="p-6 sm:p-9 md:p-11">
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
                  aria-pressed={active}
                  className={cn(
                    "relative flex flex-col items-start rounded-2xl border p-4 text-left transition-all duration-200",
                    active
                      ? "border-petrol bg-petrol/[0.06] shadow-sm"
                      : "border-ink/10 bg-white hover:border-petrol/40 hover:-translate-y-0.5 hover:shadow-sm"
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
                  <span className="mt-3 text-sm font-semibold text-ink">{s.label}</span>
                  <span className="mt-0.5 text-xs leading-snug text-ink/50">{s.blurb}</span>
                  {active && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-petrol text-cream">
                      <Check className="h-3 w-3" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Step>

        <Step n={2} title="Which best describes it?" disabled={!service} divider>
          <AnimatePresence mode="wait">
            {service ? (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-wrap gap-2"
              >
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
                          ? "border-petrol bg-petrol text-cream shadow-sm"
                          : "border-ink/15 bg-white text-ink/70 hover:border-petrol/50 hover:text-ink"
                      )}
                    >
                      {j.label}
                    </button>
                  );
                })}
              </motion.div>
            ) : (
              <p className="text-sm text-ink/40">Choose a service above first.</p>
            )}
          </AnimatePresence>
        </Step>

        <Step n={3} title="How big is the problem?" disabled={!job} divider>
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
                    "relative rounded-2xl border p-4 text-left transition-all duration-200 disabled:cursor-not-allowed",
                    active
                      ? "border-petrol bg-petrol/[0.06] shadow-sm"
                      : "border-ink/10 bg-white enabled:hover:border-petrol/40"
                  )}
                >
                  <span className="text-sm font-semibold text-ink">{s.label}</span>
                  <p className="mt-1 text-xs leading-snug text-ink/50">{s.desc}</p>
                  {active && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-petrol text-cream">
                      <Check className="h-3 w-3" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </Step>

        <Step n={4} title="Is it urgent?" disabled={!job} divider>
          <button
            type="button"
            disabled={!job}
            onClick={() => setAfterHours((v) => !v)}
            aria-pressed={afterHours}
            className={cn(
              "flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-all duration-200 disabled:cursor-not-allowed",
              afterHours ? "border-ember bg-ember/10" : "border-ink/10 bg-white enabled:hover:border-ember/50"
            )}
          >
            <span>
              <span className="text-sm font-semibold text-ink">Nights, weekends or emergency</span>
              <span className="mt-0.5 block text-xs text-ink/50">
                Adds a flat {formatUSD(EMERGENCY_FEE)} after-hours call-out.
              </span>
            </span>
            <span className={cn("relative h-6 w-11 shrink-0 rounded-full transition-colors", afterHours ? "bg-ember" : "bg-ink/20")}>
              <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all duration-200", afterHours ? "left-[22px]" : "left-0.5")} />
            </span>
          </button>
        </Step>
      </div>

      {/* ----------------------- summary ----------------------- */}
      <div className="bg-ink text-cream">
        <div className="flex h-full flex-col p-6 sm:p-9 md:p-11 lg:sticky lg:top-24">
          <div className={`text-xs font-bold ${upper} text-ember`}>Estimated total</div>

          <div className="mt-3 min-h-[60px]">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key={`${jobId}-${severity}-${afterHours}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="font-display text-4xl font-600 leading-none tracking-tight tabular-nums md:text-[2.75rem]"
                >
                  {formatUSD(result.low)}
                  <span className="mx-1.5 text-cream/35">–</span>
                  {formatUSD(result.high)}
                </motion.div>
              ) : (
                <motion.p
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-cream/55"
                >
                  Answer the questions and your estimate appears here.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <ul className="mt-6 space-y-3 border-t border-cream/15 pt-6 text-sm">
            <SummaryRow label="Service" value={service?.label} />
            <SummaryRow label="Job" value={job?.label} />
            <SummaryRow label="Extent" value={SEVERITY.find((s) => s.id === severity)?.label} />
            {result && result.fee > 0 && (
              <li className="flex items-center justify-between gap-4 text-ember">
                <span>After-hours call-out</span>
                <span className="font-semibold tabular-nums">+ {formatUSD(result.fee)}</span>
              </li>
            )}
          </ul>

          <div className="mt-auto space-y-3 pt-8">
            <RequestServiceButton variant="primary" size="lg" className={`w-full text-sm ${upper}`}>
              Request this service <ArrowRight className="h-4 w-4" />
            </RequestServiceButton>
            <a href={PHONE_HREF} className="block">
              <Button variant="outline" size="lg" className={`w-full border-cream/25 text-sm text-cream hover:border-ember hover:text-ember ${upper}`}>
                <Phone className="h-4 w-4" /> {PHONE}
              </Button>
            </a>
            <p className="pt-1 text-xs leading-relaxed text-cream/45">
              A rough estimate to set expectations — not a final quote. We&apos;ll
              confirm the price with you before any work begins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value?: string }) {
  return (
    <li className="flex items-center justify-between gap-4">
      <span className="text-cream/55">{label}</span>
      <span className={cn("text-right font-medium", value ? "text-cream" : "text-cream/30")}>
        {value ?? "—"}
      </span>
    </li>
  );
}

function Step({
  n,
  title,
  children,
  disabled,
  divider,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
}) {
  return (
    <div className={cn(divider && "mt-8 border-t border-ink/10 pt-8", "transition-opacity duration-300", disabled && "opacity-45")}>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-petrol/10 text-sm font-bold text-petrol">
          {n}
        </span>
        <h3 className="font-display text-lg font-600 text-ink">{title}</h3>
      </div>
      {children}
    </div>
  );
}
