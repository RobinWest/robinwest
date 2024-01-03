import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme.css";

export const card = recipe({
  base: {
    borderRadius: vars.borderRadius.xl,
    padding: vars.spacing.xl,
    margin: vars.spacing.md, // compensate for `outline`
  },
  variants: {
    style: {
      dark: {
        backgroundColor: vars.color.blackhole,
        outline: `${vars.spacing.md} solid ${vars.color.starlight}`,
      },
      light: {
        backgroundColor: vars.color.starlight,
        outline: `${vars.spacing.md} solid ${vars.color.blackhole}`,
      },
    },
  },
  defaultVariants: {
    style: "dark",
  },
});
