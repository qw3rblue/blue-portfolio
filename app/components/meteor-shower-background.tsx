import type { CSSProperties } from "react";

type MeteorStyle = CSSProperties & {
  "--meteor-x": string;
  "--meteor-y": string;
  "--meteor-length": string;
  "--meteor-duration": string;
  "--meteor-delay": string;
  "--meteor-opacity": string;
  "--meteor-scale": string;
  "--meteor-travel-x": string;
  "--meteor-travel-y": string;
  "--meteor-tail-angle": string;
};

const meteorCount = 15;

function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453123;
  return x - Math.floor(x);
}

function range(seed: number, min: number, max: number) {
  return min + seededRandom(seed) * (max - min);
}

const meteors: MeteorStyle[] = Array.from({ length: meteorCount }, (_, index) => {
  const seed = index + 1;

  return {
    "--meteor-x": `${range(seed, -12, 84).toFixed(2)}%`,
    "--meteor-y": `${range(seed + 9, -20, 82).toFixed(2)}%`,
    "--meteor-length": `${range(seed + 18, 118, 260).toFixed(0)}px`,
    "--meteor-duration": `${range(seed + 27, 4.8, 8.6).toFixed(2)}s`,
    "--meteor-delay": `-${range(seed + 36, 0.4, 8.8).toFixed(2)}s`,
    "--meteor-opacity": range(seed + 45, 0.5, 0.95).toFixed(2),
    "--meteor-scale": range(seed + 54, 0.72, 1.34).toFixed(2),
    "--meteor-travel-x": `${range(seed + 63, 40, 68).toFixed(0)}vw`,
    "--meteor-travel-y": `${range(seed + 72, 38, 62).toFixed(0)}vh`,
    "--meteor-tail-angle": `${range(seed + 81, -47, -35).toFixed(1)}deg`,
  };
});

export function MeteorShowerBackground() {
  return (
    <div aria-hidden="true" className="meteor-shower-background">
      <div className="meteor-starfield" />
      <div className="meteor-vignette" />
      <div className="meteor-layer">
        {meteors.map((meteor, index) => (
          <span
            key={`meteor-${index}`}
            className="shooting-meteor"
            style={meteor}
          />
        ))}
      </div>
    </div>
  );
}
