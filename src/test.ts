import { hyperHTML as h } from "./html";
import { hyperSVG as s } from "./svg";

const app = document.querySelector<HTMLDivElement>("#app");

const dialog = h(
  "dialog",
  { open: true },
  [
    {
      type: "click",
      listener: (event) => {
        event.type;
      },
    },
  ],
  ["i am dialog"]
);

const svgImage = s(
  "svg",
  { viewBox: "0 0 500 500" },
  [],
  [s("circle", { r: 30, cx: "50", cy: "50" })]
);

app?.append(dialog, svgImage);

export {};
