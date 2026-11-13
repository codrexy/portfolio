import { ImageResponse } from "next/og";

export const alt = "Collins Vincent — Senior full-stack engineer in Port Harcourt, Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function rosette(cx: number, cy: number, R: number, r: number, d: number, s: number) {
  const steps = 2400;
  const turns = 41;
  let path = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2 * turns;
    const x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) / r) * t);
    const y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) / r) * t);
    path += `${i ? "L" : "M"}${(cx + x * s).toFixed(1)} ${(cy + y * s).toFixed(1)}`;
  }
  return path;
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#EEF2EC",
          color: "#13272A",
          padding: 72,
          position: "relative",
        }}
      >
        <svg
          width="560"
          height="560"
          viewBox="0 0 400 400"
          style={{ position: "absolute", right: -150, top: 35 }}
        >
          <path d={rosette(200, 200, 96, 41, 62, 1.55)} fill="none" stroke="#A9C3B5" strokeWidth="0.7" />
          <path d={rosette(200, 200, 70, 33, 30, 1.3)} fill="none" stroke="#5E4F96" strokeWidth="0.6" />
          <circle cx="200" cy="200" r="17" fill="#EEF2EC" stroke="#1F4D3D" strokeWidth="1.2" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: 680 }}>
          <div style={{ fontSize: 96, lineHeight: 1, fontFamily: "serif", letterSpacing: -2 }}>Collins Vincent</div>
          <div style={{ fontSize: 38, color: "#2E6A55", marginTop: 28, fontWeight: 700 }}>
            Senior full-stack engineer
          </div>
          <div style={{ fontSize: 28, color: "#3D5155", marginTop: 20, lineHeight: 1.4 }}>
            Payments and fintech products with React, Next.js, React Native, Node.js and NestJS.
          </div>
          <div style={{ fontSize: 24, color: "#5E4F96", marginTop: 36 }}>Port Harcourt, Nigeria · Open to remote</div>
        </div>
      </div>
    ),
    size,
  );
}
