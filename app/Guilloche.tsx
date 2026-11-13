// A banknote-style security rosette, generated from hypotrochoid curves.
// Rendered on the server; the draw-in animation lives in globals.css.

type Curve = { R: number; r: number; d: number; scale: number; className: string };

function hypotrochoid({ R, r, d, scale }: Curve, cx: number, cy: number) {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const turns = r / gcd(R, r);
  const steps = Math.round(720 * turns);
  const end = Math.PI * 2 * turns;
  let path = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * end;
    const x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
    const y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
    path += `${i === 0 ? "M" : "L"}${(cx + x * scale).toFixed(2)} ${(cy + y * scale).toFixed(2)}`;
  }
  return path;
}

const curves: Curve[] = [
  { R: 96, r: 41, d: 62, scale: 1.55, className: "g-outer" },
  { R: 84, r: 29, d: 44, scale: 1.45, className: "g-mid" },
  { R: 70, r: 33, d: 30, scale: 1.3, className: "g-violet" },
  { R: 60, r: 23, d: 21, scale: 1.05, className: "g-inner" },
];

export default function Guilloche() {
  const c = 200;
  return (
    <svg className="guilloche" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      {curves.map((curve, i) => (
        <path
          key={i}
          d={hypotrochoid(curve, c, c)}
          className={curve.className}
          pathLength={1}
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      <circle cx={c} cy={c} r={17} className="g-seal" />
    </svg>
  );
}
