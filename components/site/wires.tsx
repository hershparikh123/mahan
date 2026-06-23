"use client";

/**
 * The "wires" — a ghosted powder-blue pipe network that sits deep in the
 * background, with brighter fluid visibly pulsing through it at varied speeds.
 * The static pipe stays faint; the *movement* is what draws the eye.
 */

type Variant = "hero" | "left" | "right" | "split" | "band";

/**
 * Routes are shaped to FRAME the content, never cross it: horizontals stay in
 * the top (<70) / bottom (>620) bands, verticals hug the far edges. The center
 * stays clear so fluid never runs through any text.
 */
const ROUTES: Record<Variant, string[]> = {
  // frame open on the left (where all the hero copy lives) + a right-edge loop
  hero: [
    "M-40 50 H1100 a32 32 0 0 1 32 32 V640 a32 32 0 0 1 -32 32 H-40",
    "M1240 140 H1000 a32 32 0 0 0 -32 32 V470 a32 32 0 0 0 32 32 H1240",
  ],
  // text on the left → pipe lives on the right + bottom edges
  left: ["M1240 110 V540 a34 34 0 0 1 -34 34 H520"],
  // services header up top → pipe lives down in the card region, right + bottom
  right: ["M1240 270 V560 a34 34 0 0 1 -34 34 H-40"],
  // dark band, text left / icons right → bottom + right edges only
  split: ["M1240 650 H300 a30 30 0 0 1 -30 -30 V320"],
  // small dark cards → top-right corner bracket (clear of left-aligned text)
  band: ["M1240 -30 V90 a30 30 0 0 0 -30 30 H720"],
};

export function Wires({
  variant = "left",
  className = "",
  tone = "petrol",
  flowOpacity = 0.85,
}: {
  variant?: Variant;
  className?: string;
  tone?: "petrol" | "cream";
  flowOpacity?: number;
}) {
  const baseTone = tone === "cream" ? "text-cream" : "text-petrol";
  // brighter, warmer pulse on dark sections; blue pulse on light ones
  const flowTone = tone === "cream" ? "text-ember" : "text-petrol";
  const routes = ROUTES[variant];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* ghost pipe — barely there, dissolved into the background */}
        <g stroke="currentColor" className={`${baseTone}/[0.025]`} strokeWidth="5" strokeLinecap="round">
          {routes.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>

        {/* moving fluid — the visible, lively part. period (22+18)=40 matches
            the -40 keyframe so it loops seamlessly; each pipe flows at its own pace */}
        <g
          stroke="currentColor"
          className={flowTone}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="22 18"
          style={{ opacity: flowOpacity }}
        >
          {routes.map((d, i) => (
            <path
              key={i}
              className="animate-flow"
              style={{
                animationDuration: `${1.1 + i * 0.4}s`,
                animationDelay: `${i * 0.3}s`,
              }}
              d={d}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/** Hero treatment — soft, airy, with fluid clearly drifting through. */
export function HeroWires() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full bg-petrol/10 blur-3xl animate-floaty" />
      <div className="absolute -left-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-copper/15 blur-3xl" />
      <Wires variant="hero" flowOpacity={0.9} />
    </div>
  );
}
