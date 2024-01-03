import { style } from "@vanilla-extract/css";
import { vars } from "../../theme.css";

export const homeContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: vars.color.blackhole,
});
