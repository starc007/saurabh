import { HandwrittenText } from "./beui/HandwrittenText";

// Original centerline lettering: tall looped ascenders and a quiet exit stroke.
const strokes = [
  { path: "M8 61 C22 46 32 24 32 15 C32 6 24 9 20 22 L12 67", weight: 1 },
  { path: "M16 44 C30 42 43 38 57 34 M62 13 C56 29 49 51 49 61 C49 72 60 68 69 54", weight: 1.2 },
  { path: "M73 43 L68 61 C65 74 78 66 84 56", weight: 0.5 },
  { path: "M105 48 C99 35 84 44 83 58 C82 74 98 70 104 45 L94 81 C89 98 77 94 82 82 C87 73 108 64 117 49", weight: 1.3 },
  { path: "M115 66 C121 47 140 24 137 14 C134 2 123 19 120 36 L115 66 C125 41 140 38 136 53 L133 62 C132 75 148 65 155 53", weight: 1.5 },
  { path: "M155 53 C165 39 178 18 172 12 C163 3 154 36 151 52 C146 74 162 70 174 53", weight: 1.1 },
  { path: "M181 43 L176 60 C171 75 185 68 191 55", weight: 0.5 },
  { path: "M213 48 C207 35 192 44 191 58 C190 74 207 70 213 45 L203 81 C198 98 186 94 191 82 C196 73 216 64 226 49", weight: 1.3 },
  { path: "M224 66 C230 47 249 24 246 14 C243 2 232 19 229 36 L224 66 C234 41 249 38 245 53 L242 62 C241 75 257 65 264 53", weight: 1.5 },
  { path: "M278 27 C271 42 261 60 266 66 C272 73 284 61 289 52 M260 43 L287 39", weight: 0.9 },
  { path: "M308 44 C309 35 294 38 292 47 C289 56 307 54 303 63 C298 74 283 69 287 63 M303 63 C310 65 318 60 323 55", weight: 0.9 },
  { path: "M76 31 L77 29 M184 31 L185 29", weight: 0.15 },
];

export default function HighlightsHeading() {
  return (
    <h2 id="highlights-title" className="highlights-title">
      <span className="sr-only">Highlights</span>
      <HandwrittenText label="Highlights" decorative strokes={strokes} viewBox="0 0 330 100" className="highlights-handwriting" duration={2.1} />
    </h2>
  );
}
