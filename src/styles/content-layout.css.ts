import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const contentLayout = style({
  maxWidth: "960px",
  padding: `0 ${vars.spacing.md}`,
});
