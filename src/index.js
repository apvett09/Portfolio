import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

window.addEventListener("load", () => {
  initScrollReveal(targetElements, defaultProps);
  initTiltEffect();
});
