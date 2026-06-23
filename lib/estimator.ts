/**
 * Pricing model for the ballpark estimator.
 *
 * IMPORTANT: these ranges are placeholders for a typical NJ market — they are
 * NOT real Mahan prices. Edit the numbers below to match actual pricing. The
 * tool always presents output as a rough, non-binding estimate.
 */

export type Severity = "minor" | "moderate" | "major";

export const SEVERITY: {
  id: Severity;
  label: string;
  desc: string;
  mult: number;
}[] = [
  { id: "minor", label: "Minor", desc: "Small and isolated — one fixture or a quick fix.", mult: 0.7 },
  { id: "moderate", label: "Moderate", desc: "A clear problem affecting one area of the home.", mult: 1 },
  { id: "major", label: "Major", desc: "Widespread, or a full system that has failed.", mult: 1.7 },
];

/** Flat add-on for nights / weekends / true emergencies. */
export const EMERGENCY_FEE = 150;

export type Job = { id: string; label: string; base: [number, number] };
export type ServiceId = "plumbing" | "heating" | "ac";
export type Service = {
  id: ServiceId;
  label: string;
  blurb: string;
  jobs: Job[];
};

export const SERVICES: Service[] = [
  {
    id: "plumbing",
    label: "Plumbing",
    blurb: "Leaks, drains, water heaters, sewer lines.",
    jobs: [
      { id: "leak", label: "Leak repair", base: [150, 500] },
      { id: "drain", label: "Clogged / slow drain", base: [150, 450] },
      { id: "fixture", label: "Faucet, toilet or fixture", base: [150, 650] },
      { id: "water-heater", label: "Water heater replacement", base: [1200, 3500] },
      { id: "sewer", label: "Sewer / main line", base: [2000, 9000] },
      { id: "repipe", label: "Repiping", base: [1500, 6000] },
    ],
  },
  {
    id: "heating",
    label: "Heating",
    blurb: "Furnaces, boilers, no-heat calls, tune-ups.",
    jobs: [
      { id: "no-heat", label: "No-heat diagnosis & fix", base: [150, 900] },
      { id: "furnace-repair", label: "Furnace repair", base: [150, 850] },
      { id: "boiler-repair", label: "Boiler repair", base: [200, 1200] },
      { id: "heat-replace", label: "Furnace / boiler replacement", base: [3500, 9500] },
      { id: "heat-tuneup", label: "Tune-up / maintenance", base: [120, 300] },
    ],
  },
  {
    id: "ac",
    label: "Air Conditioning",
    blurb: "Repairs, installs, recharges, tune-ups.",
    jobs: [
      { id: "ac-repair", label: "AC repair", base: [150, 900] },
      { id: "refrigerant", label: "Refrigerant recharge", base: [200, 700] },
      { id: "central-install", label: "Central AC install", base: [3500, 8000] },
      { id: "mini-split", label: "Mini-split install", base: [3000, 6500] },
      { id: "ac-tuneup", label: "Tune-up / maintenance", base: [120, 300] },
    ],
  },
];

export type EstimateInput = {
  serviceId: ServiceId | null;
  jobId: string | null;
  severity: Severity | null;
  afterHours: boolean;
};

export type EstimateResult = {
  low: number;
  high: number;
  fee: number;
};

const roundTo = (n: number, step = 25) => Math.round(n / step) * step;

export function findJob(serviceId: ServiceId | null, jobId: string | null): Job | undefined {
  if (!serviceId || !jobId) return undefined;
  return SERVICES.find((s) => s.id === serviceId)?.jobs.find((j) => j.id === jobId);
}

export function calcEstimate(input: EstimateInput): EstimateResult | null {
  const job = findJob(input.serviceId, input.jobId);
  if (!job || !input.severity) return null;

  const mult = SEVERITY.find((s) => s.id === input.severity)!.mult;
  const fee = input.afterHours ? EMERGENCY_FEE : 0;

  return {
    low: roundTo(job.base[0] * mult) + fee,
    high: roundTo(job.base[1] * mult) + fee,
    fee,
  };
}

export const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
