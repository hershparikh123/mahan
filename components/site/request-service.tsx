"use client";

import * as React from "react";
import { Phone, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, type ButtonProps } from "@/components/ui/button";
import { PHONE, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const services = ["Plumbing", "Heating", "Air Conditioning", "Emergency — ASAP"];

export function RequestServiceButton({
  children = "Request Service",
  className,
  variant = "primary",
  size = "md",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}) {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function onOpenChange(next: boolean) {
    setOpen(next);
    if (!next) setTimeout(() => setSubmitted(false), 250);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-petrol text-cream">
              <Check className="h-7 w-7" />
            </div>
            <DialogHeader className="items-center">
              <DialogTitle>Request received</DialogTitle>
              <DialogDescription className="max-w-xs">
                Thanks — a Mahan technician will reach out shortly. For anything
                urgent, call us directly and we&apos;ll answer.
              </DialogDescription>
            </DialogHeader>
            <a href={PHONE_HREF} className="mt-1">
              <Button variant="ink" size="md">
                <Phone className="h-4 w-4" /> {PHONE}
              </Button>
            </a>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request service</DialogTitle>
              <DialogDescription>
                Tell us what&apos;s going on. We serve Montville &amp; the
                surrounding Morris County towns — usually same-day.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-3">
              <Field label="Name">
                <input
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className={inputCls}
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Phone">
                  <input
                    required
                    type="tel"
                    placeholder="(973) 555-0123"
                    className={inputCls}
                  />
                </Field>
                <Field label="Town">
                  <input
                    type="text"
                    placeholder="Montville"
                    className={inputCls}
                  />
                </Field>
              </div>
              <Field label="What do you need?">
                <select required defaultValue="" className={inputCls}>
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Details (optional)">
                <textarea
                  rows={3}
                  placeholder="No heat upstairs, started last night…"
                  className={cn(inputCls, "resize-none")}
                />
              </Field>
              <Button type="submit" variant="primary" size="lg" className="mt-1 w-full">
                Send request
              </Button>
              <p className="text-center text-xs text-ink/50">
                Prefer to talk? Call{" "}
                <a href={PHONE_HREF} className="font-semibold text-petrol underline-offset-2 hover:underline">
                  {PHONE}
                </a>
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-white/70 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 transition-colors focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/30";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink/55">
        {label}
      </span>
      {children}
    </label>
  );
}
