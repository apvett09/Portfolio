import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

window.addEventListener("load", () => {
  initScrollReveal(targetElements, defaultProps);
  initTiltEffect();
  ScrollReveal().sync(); // Force an update if needed
});
