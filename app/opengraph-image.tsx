import { ImageResponse } from "next/og";

export const alt = "Saurabh | Design Engineer & Product Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0c",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          color: "#ececec",
          position: "relative",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 0%, rgba(163, 230, 53, 0.08), transparent 50%)",
          }}
        />

        {/* Top: profile chip */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "#1e1e1e",
              border: "1px solid #2a2a2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "#a3e635",
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "16px", fontWeight: 600, color: "#ececec" }}>
              saurabh
            </span>
            <span style={{ fontSize: "13px", color: "#888" }}>saura3h.xyz</span>
          </div>
        </div>

        {/* Center: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#ececec",
            }}
          >
            Design Engineer
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#888",
              display: "flex",
            }}
          >
            &amp; Product Builder<span style={{ color: "#a3e635" }}>.</span>
          </div>
        </div>

        {/* Bottom: tagline + tech */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span style={{ fontSize: "20px", color: "#888", maxWidth: "640px" }}>
            Building tools and products for developers and crypto-native
            experiences.
          </span>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {["React", "Next.js", "Rust"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "14px",
                  color: "#888",
                  fontFamily: "ui-monospace, monospace",
                  border: "1px solid #1e1e1e",
                  padding: "6px 12px",
                  borderRadius: "8px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
