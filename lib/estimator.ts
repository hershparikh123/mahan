/**
 * Pricing model for the ballpark estimator.
 *
 * IMPORTANT: these ranges are placeholders for a typical NJ market — they are
 * NOT real Mahan prices. Edit the numbers below to match actual pricing. The
 * tool always presents output as a rough, non-binding estimate.
 */

export type Severity = "minor" | "moderate" | "major";

/**
 * `pos` places the severity along each job's price range (0 = bottom, 1 = top).
 * We then show a tight band (±SPREAD) around that point, so the result is a
 * narrow, believable range rather than the job's entire low-to-high span.
 */
export const SEVERITY: {
  id: Severity;
  label: string;
  desc: string;
  pos: number;
}[] = [
  { id: "minor", label: "Minor", desc: "Small and isolated — one fixture or a quick fix.", pos: 0.2 },
  { id: "moderate", label: "Moderate", desc: "A clear problem affecting one area of the home.", pos: 0.5 },
  { id: "major", label: "Major", desc: "Widespread, or a full system that has failed.", pos: 0.82 },
];

/** Half-width of the shown band, as a fraction of the midpoint (±10%). */
export const SPREAD = 0.1;

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

const roundTo = (n: number, step = 10) => Math.round(n / step) * step;

export function findJob(serviceId: ServiceId | null, jobId: string | null): Job | undefined {
  if (!serviceId || !jobId) return undefined;
  return SERVICES.find((s) => s.id === serviceId)?.jobs.find((j) => j.id === jobId);
}

export function calcEstimate(input: EstimateInput): EstimateResult | null {
  const job = findJob(input.serviceId, input.jobId);
  if (!job || !input.severity) return null;

  const { pos } = SEVERITY.find((s) => s.id === input.severity)!;
  const [min, max] = job.base;
  const center = min + pos * (max - min); // severity midpoint
  const fee = input.afterHours ? EMERGENCY_FEE : 0;

  return {
    low: roundTo(center * (1 - SPREAD)) + fee,
    high: roundTo(center * (1 + SPREAD)) + fee,
    fee,
  };
}

export const formatUSD = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
