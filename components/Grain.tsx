const NOISE_URL =
  "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"180\" height=\"180\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/></svg>')";

export function Grain({
  opacity = 0.06,
  blend = "overlay",
}: {
  opacity?: number;
  blend?: "overlay" | "soft-light" | "screen";
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        opacity,
        mixBlendMode: blend,
        backgroundImage: NOISE_URL,
        backgroundSize: "180px 180px",
      }}
    />
  );
}
