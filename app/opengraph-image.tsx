import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Collins Vincent — Senior full-stack engineer in Port Harcourt, Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/portrait.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #08120F 0%, #0F2420 60%, #1A1830 100%)",
          color: "#E8EFE9",
          padding: 64,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 660 }}>
          <div style={{ display: "flex", fontSize: 22, color: "#7FE0B5" }}>● Open to remote and hybrid roles</div>
          <div style={{ fontSize: 104, lineHeight: 1, marginTop: 24, letterSpacing: -3, fontWeight: 700 }}>Collins</div>
          <div
            style={{
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: -3,
              fontWeight: 700,
              backgroundImage: "linear-gradient(100deg, #7FE0B5, #A594F0, #E6C37C)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Vincent
          </div>
          <div style={{ fontSize: 32, color: "#9BB0A6", marginTop: 28, lineHeight: 1.35 }}>
            Senior full-stack engineer · Payments and fintech · React, Next.js, React Native, NestJS
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            width: 400,
            height: 500,
            borderRadius: "200px 200px 28px 28px",
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.2)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={400} height={500} style={{ objectFit: "cover", objectPosition: "30% 30%" }} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
