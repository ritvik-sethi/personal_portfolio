import { ImageResponse } from "next/og";
import { summary } from "@/lib/content";
import { site } from "@/lib/site";

export const runtime = "edge";

export const alt = "Ritvik Sethi — Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const desc =
    summary.length > 220 ? `${summary.slice(0, 217).trim()}…` : summary;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(145deg, #0a192f 0%, #112240 55%, #0a192f 100%)",
          color: "#ccd6f6",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#64ffda",
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              letterSpacing: "0.12em",
            }}
          >
            RS
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Ritvik Sethi
          </div>
          <div style={{ fontSize: 28, color: "#8892b0", maxWidth: 900, lineHeight: 1.45 }}>
            {desc}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#64ffda",
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          }}
        >
          <span>Portfolio</span>
          <span style={{ color: "#8892b0" }}>{site.email}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
