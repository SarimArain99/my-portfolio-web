import { ImageResponse } from "next/og";

export const alt = "Muhammad Sarim — Software Developer & Agentic AI Builder";
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
          backgroundColor: "#050505",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#22c55e", fontSize: 28 }}>Muhammad Sarim</div>
        <div style={{ color: "#ffffff", fontSize: 64, fontWeight: 700, marginTop: 16, lineHeight: 1.1 }}>
          Software developer building Agentic AI systems.
        </div>
        <div style={{ color: "#a1a1aa", fontSize: 28, marginTop: 24 }}>
          School Admin · Islamic Science College (Boys) · github.com/SarimArain99
        </div>
      </div>
    ),
    { ...size },
  );
}
