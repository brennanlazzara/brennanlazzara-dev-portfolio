import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Brennan Lazzara - Developer Portfolio"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: "bold" }}>
          Brennan Lazzara
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            marginTop: 20,
            color: "#94a3b8",
          }}
        >
          Full-Stack Developer
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
