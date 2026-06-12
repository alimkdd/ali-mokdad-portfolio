import { ImageResponse } from "next/og";

export const alt = "Ali Mokdad — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          backgroundColor: "#0a0a0a",
          backgroundImage: "radial-gradient(ellipse 60% 50% at 75% 15%, rgba(220,38,38,0.18), transparent 70%)",
          color: "#ededed",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#dc2626", letterSpacing: 10, fontWeight: 600 }}>
          SENIOR SOFTWARE ENGINEER
        </div>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 700, marginTop: 12, letterSpacing: -3 }}>
          Ali Mokdad<span style={{ color: "#dc2626" }}>.</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#9b9b9b", marginTop: 22, maxWidth: 920, lineHeight: 1.4 }}>
          Digital wallets, payments, and high-traffic systems on .NET — built to not fail.
        </div>
        <div style={{ display: "flex", marginTop: 52, width: 130, height: 5, backgroundColor: "#dc2626" }} />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 48,
            right: 90,
            fontSize: 24,
            color: "#8a8a8a",
            letterSpacing: 3,
          }}
        >
          alimokdadportfolio.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
