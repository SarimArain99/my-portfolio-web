import { ImageResponse } from "next/og";
import { PALETTE } from "@/lib/palette";

export const alt = "Muhammad Sarim, Software Developer and Agentic AI Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: PALETTE.paper,
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: PALETTE.accent, fontSize: 28 }}>Muhammad Sarim</div>
        <div
          style={{
            backgroundColor: PALETTE.gold,
            height: 8,
            width: 120,
            marginTop: 32,
          }}
        />
        <div style={{ color: PALETTE.ink, fontSize: 64, fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>
          Software developer building Agentic AI systems.
        </div>
        <div style={{ color: PALETTE.muted, fontSize: 28, marginTop: 24 }}>
          School Admin, Islamic Science College. Teacher of Website Development
          and AI. github.com/SarimArain99
        </div>
      </div>
    ),
    { ...size },
  );
}
