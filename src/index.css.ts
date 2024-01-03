import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("html", {
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("*, *:before, *:after", {
  boxSizing: "inherit",
});

globalStyle("body", {
  margin: 0,
  minWidth: "320px",
  minHeight: "100vh",
});

globalStyle("#root", {
  minHeight: "100vh",
});

globalStyle(":root", {
  fontFamily: "'Open Sans', Helvetica, Arial, sans-serif",
  fontWeight: 400,
  color: vars.color.starlight,

  colorScheme: "light dark",

  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});
