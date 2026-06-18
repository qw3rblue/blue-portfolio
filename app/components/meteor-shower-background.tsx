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

type StarLayer = "far" | "mid" | "near";

type StarStyle = CSSProperties & {
  "--star-x": string;
  "--star-y": string;
  "--star-size": string;
  "--star-glow": string;
  "--star-opacity": string;
  "--star-dim-opacity": string;
  "--star-twinkle-duration": string;
  "--star-twinkle-delay": string;
};

const meteorCount = 15;
const starLayers: Array<{ layer: StarLayer; count: number; seedOffset: number }> = [
  { layer: "far", count: 110, seedOffset: 100 },
  { layer: "mid", count: 70, seedOffset: 400 },
  { layer: "near", count: 36, seedOffset: 800 },
];

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
    "--meteor-x": `${range(seed, 8, 104).toFixed(2)}%`,
    "--meteor-y": `${range(seed + 9, -20, 82).toFixed(2)}%`,
    "--meteor-length": `${range(seed + 18, 118, 260).toFixed(0)}px`,
    "--meteor-duration": `${range(seed + 27, 4.8, 8.6).toFixed(2)}s`,
    "--meteor-delay": `-${range(seed + 36, 0.4, 8.8).toFixed(2)}s`,
    "--meteor-opacity": range(seed + 45, 0.5, 0.95).toFixed(2),
    "--meteor-scale": range(seed + 54, 0.72, 1.34).toFixed(2),
    "--meteor-travel-x": `-${range(seed + 63, 40, 68).toFixed(0)}vw`,
    "--meteor-travel-y": `${range(seed + 72, 38, 62).toFixed(0)}vh`,
    "--meteor-tail-angle": `${range(seed + 81, -47, -35).toFixed(1)}deg`,
  };
});

const stars: Array<{ layer: StarLayer; stars: StarStyle[] }> = starLayers.map(({ layer, count, seedOffset }) => ({
  layer,
  stars: Array.from({ length: count }, (_, index) => {
    const seed = seedOffset + index + 1;
    const isNear = layer === "near";
    const isMid = layer === "mid";
    const starSize = range(seed + 26, isNear ? 1.2 : 0.6, isNear ? 2.8 : isMid ? 2 : 1.35);
    const starOpacity = range(seed + 39, isNear ? 0.48 : 0.28, isNear ? 0.95 : 0.76);

    return {
      "--star-x": `${range(seed, -4, 104).toFixed(2)}%`,
      "--star-y": `${range(seed + 13, -4, 104).toFixed(2)}%`,
      "--star-size": `${starSize.toFixed(2)}px`,
      "--star-glow": `${(starSize * 5.5).toFixed(2)}px`,
      "--star-opacity": starOpacity.toFixed(2),
      "--star-dim-opacity": (starOpacity * 0.58).toFixed(2),
      "--star-twinkle-duration": `${range(seed + 52, 4.8, 10.5).toFixed(2)}s`,
      "--star-twinkle-delay": `-${range(seed + 65, 0.2, 10).toFixed(2)}s`,
    } satisfies StarStyle;
  }),
}));

export function MeteorShowerBackground() {
  return (
    <div aria-hidden="true" className="meteor-shower-background">
      <div className="meteor-starfield">
        {stars.map(({ layer, stars }) => (
          <div key={layer} className={`meteor-stars meteor-stars--${layer}`}>
            {stars.map((star, index) => (
              <span
                key={`${layer}-star-${index}`}
                className="meteor-star"
                style={star}
              />
            ))}
          </div>
        ))}
      </div>
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
