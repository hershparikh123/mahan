/**
 * Hand-built SVG illustrations so the site stays self-contained (no stock
 * photos / broken image links). Colored in the powder-blue / white / butter
 * palette, with the quiet pipe-flow motif built in. Swap for photos later.
 */

const BLUE_DEEP = "#16415A";
const BLUE = "#2A6A92";
const BLUE_LIGHT = "#6AA6CB";
const BUTTER = "#F1CE6A";
const BUTTER_DEEP = "#E2B441";
const WHITE = "#FBFDFF";

/** Hero: a wall-mounted boiler / tankless unit with soft brass supply lines. */
export function BoilerCard() {
  return (
    <svg viewBox="0 0 420 470" fill="none" className="h-full w-full" role="img" aria-label="High-efficiency heating unit with supply lines">
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={BLUE} />
          <stop offset="1" stopColor={BLUE_DEEP} />
        </linearGradient>
        <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={WHITE} />
          <stop offset="1" stopColor="#DCE9F2" />
        </linearGradient>
        <linearGradient id="brass" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={BUTTER_DEEP} />
          <stop offset="0.5" stopColor={BUTTER} />
          <stop offset="1" stopColor={BUTTER_DEEP} />
        </linearGradient>
      </defs>

      {/* wall + subtle tile grid */}
      <rect width="420" height="470" fill="url(#wall)" />
      <g stroke="#FFFFFF" strokeOpacity="0.06" strokeWidth="1">
        {[60, 120, 180, 240, 300, 360].map((y) => (
          <line key={y} x1="0" y1={y} x2="420" y2={y} />
        ))}
        {[70, 140, 210, 280, 350].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="470" />
        ))}
      </g>

      {/* gentle heat shimmer above the unit */}
      <g stroke={BUTTER} strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" fill="none">
        <path className="animate-shimmer" d="M150 70 q8 -12 0 -24" />
        <path className="animate-shimmer" style={{ animationDelay: "1s" }} d="M210 64 q8 -12 0 -24" />
        <path className="animate-shimmer" style={{ animationDelay: "2s" }} d="M270 70 q8 -12 0 -24" />
      </g>

      {/* unit body */}
      <rect x="118" y="90" width="184" height="210" rx="18" fill="url(#metal)" stroke={BLUE_LIGHT} strokeOpacity="0.4" />
      <rect x="118" y="90" width="184" height="44" rx="18" fill={BLUE_DEEP} fillOpacity="0.06" />

      {/* digital display */}
      <rect x="150" y="150" width="120" height="56" rx="10" fill={BLUE_DEEP} />
      <text x="210" y="190" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="30" fill={BUTTER} fontWeight="700">72°</text>

      {/* control dials */}
      <circle cx="160" cy="248" r="16" fill={BLUE_DEEP} fillOpacity="0.9" />
      <circle cx="160" cy="248" r="16" fill="none" stroke={BLUE_LIGHT} strokeWidth="2" />
      <line x1="160" y1="248" x2="160" y2="236" stroke={BUTTER} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="210" cy="248" r="6" fill={BUTTER} />
      <circle cx="232" cy="248" r="6" fill={BLUE} />
      <circle cx="254" cy="248" r="6" fill={BUTTER_DEEP} />

      {/* pressure gauge */}
      <circle cx="340" cy="180" r="30" fill="url(#metal)" stroke={BLUE_LIGHT} strokeOpacity="0.5" />
      <circle cx="340" cy="180" r="30" fill="none" stroke={BLUE_DEEP} strokeOpacity="0.15" strokeWidth="2" />
      <line x1="340" y1="180" x2="356" y2="166" stroke={BLUE} strokeWidth="3" strokeLinecap="round" />
      <circle cx="340" cy="180" r="3" fill={BLUE_DEEP} />

      {/* brass supply + return lines with flowing fluid */}
      <g strokeLinecap="round" fill="none">
        <path d="M160 300 V360 a20 20 0 0 0 20 20 H300" stroke="url(#brass)" strokeWidth="11" />
        <path d="M210 300 V410 H80" stroke="url(#brass)" strokeWidth="11" />
        <path d="M260 300 V340 a20 20 0 0 1 20 20 V440 H360" stroke="url(#brass)" strokeWidth="11" />
        <g stroke={WHITE} strokeOpacity="0.85" strokeWidth="2.5" strokeDasharray="4 26">
          <path className="animate-flow" d="M160 300 V360 a20 20 0 0 0 20 20 H300" />
          <path className="animate-flow" style={{ animationDelay: "0.4s" }} d="M210 300 V410 H80" />
          <path className="animate-flow" style={{ animationDelay: "0.8s" }} d="M260 300 V340 a20 20 0 0 1 20 20 V440 H360" />
        </g>
      </g>

      {/* valves / fittings */}
      <g fill={BUTTER_DEEP}>
        <circle cx="180" cy="380" r="9" />
        <circle cx="210" cy="410" r="9" />
        <circle cx="280" cy="400" r="9" />
      </g>
    </svg>
  );
}

/** Master Plumbing: a cluster of brass pipes with a shutoff valve. */
export function PipeCluster() {
  return (
    <svg viewBox="0 0 360 220" fill="none" className="h-full w-full" role="img" aria-label="Plumbing manifold">
      <defs>
        <linearGradient id="brass2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={BUTTER} />
          <stop offset="1" stopColor={BUTTER_DEEP} />
        </linearGradient>
      </defs>
      <g strokeLinecap="round" fill="none" stroke="url(#brass2)" strokeWidth="14">
        <path d="M20 60 H180 a26 26 0 0 1 26 26 V200" />
        <path d="M20 120 H120 a26 26 0 0 1 26 26 V200" />
        <path d="M340 50 H260 a26 26 0 0 0 -26 26 V200" />
      </g>
      <g stroke={WHITE} strokeOpacity="0.9" strokeWidth="3" strokeDasharray="5 28" fill="none">
        <path className="animate-flow" d="M20 60 H180 a26 26 0 0 1 26 26 V200" />
        <path className="animate-flow" style={{ animationDelay: "0.5s" }} d="M340 50 H260 a26 26 0 0 0 -26 26 V200" />
      </g>
      {/* shutoff valve wheel */}
      <circle cx="290" cy="120" r="20" fill={BLUE} />
      <circle cx="290" cy="120" r="20" fill="none" stroke={BUTTER} strokeWidth="3" />
      <line x1="290" y1="100" x2="290" y2="140" stroke={BUTTER} strokeWidth="3" />
      <line x1="270" y1="120" x2="310" y2="120" stroke={BUTTER} strokeWidth="3" />
      <g fill={BUTTER_DEEP}>
        <circle cx="206" cy="120" r="8" />
        <circle cx="146" cy="160" r="8" />
        <circle cx="234" cy="120" r="8" />
      </g>
    </svg>
  );
}

/** Air Conditioning: a ductless mini-split head with airflow. */
export function MiniSplit() {
  return (
    <svg viewBox="0 0 320 180" fill="none" className="h-full w-full" role="img" aria-label="Ductless mini-split unit">
      <defs>
        <linearGradient id="ac" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={WHITE} />
          <stop offset="1" stopColor="#DCE9F2" />
        </linearGradient>
      </defs>
      <rect x="30" y="30" width="260" height="64" rx="22" fill="url(#ac)" stroke={BLUE} strokeOpacity="0.2" />
      <rect x="44" y="74" width="232" height="10" rx="5" fill={BLUE} fillOpacity="0.14" />
      <circle cx="258" cy="50" r="4" fill={BUTTER_DEEP} />
      <g stroke={BLUE} strokeOpacity="0.2" strokeWidth="3" strokeLinecap="round">
        <line x1="60" y1="50" x2="240" y2="50" />
        <line x1="60" y1="60" x2="240" y2="60" />
      </g>
      <g stroke={BLUE_LIGHT} strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="2 18">
        <path className="animate-flow" d="M90 100 q20 30 60 36" />
        <path className="animate-flow" style={{ animationDelay: "0.4s" }} d="M150 100 q10 36 60 40" />
        <path className="animate-flow" style={{ animationDelay: "0.8s" }} d="M210 100 q0 38 50 44" />
      </g>
    </svg>
  );
}

/** Contact: an abstract Morris County service map — towns linked by the wires. */
export function ServiceMap() {
  const towns: [number, number, string][] = [
    [210, 150, "Montville"],
    [120, 90, "Boonton"],
    [300, 110, "Pine Brook"],
    [110, 210, "Mtn Lakes"],
    [310, 220, "Fairfield"],
    [200, 60, "Towaco"],
    [60, 150, "Kinnelon"],
  ];
  return (
    <svg viewBox="0 0 380 300" fill="none" className="h-full w-full" role="img" aria-label="Morris County service area map">
      <path
        d="M40 110 C40 50 120 30 190 40 C280 52 340 70 350 140 C360 210 300 270 210 270 C120 270 40 230 40 150 Z"
        fill={BLUE}
        fillOpacity="0.07"
        stroke={BLUE}
        strokeOpacity="0.2"
        strokeDasharray="3 7"
      />
      {/* service radius rings around Montville */}
      <g stroke={BUTTER_DEEP} strokeOpacity="0.45" fill="none">
        <circle cx="210" cy="150" r="55" />
        <circle cx="210" cy="150" r="95" />
      </g>
      {/* wires linking towns to HQ */}
      <g stroke={BLUE} strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 10">
        {towns.slice(1).map(([x, y], i) => (
          <path key={i} className="animate-flow" style={{ animationDelay: `${i * 0.3}s` }} d={`M210 150 L${x} ${y}`} />
        ))}
      </g>
      {/* town dots */}
      {towns.map(([x, y, name], i) => (
        <g key={name}>
          <circle cx={x} cy={y} r={i === 0 ? 7 : 4} fill={i === 0 ? BUTTER_DEEP : BLUE} fillOpacity={i === 0 ? 1 : 0.65} />
          <text x={x} y={y - 12} textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="10" fill={BLUE_DEEP} fillOpacity="0.75" fontWeight={i === 0 ? 700 : 500}>
            {name}
          </text>
        </g>
      ))}
    </svg>
  );
}
