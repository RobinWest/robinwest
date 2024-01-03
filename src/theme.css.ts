import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    blackhole: "#1D1515",
    starlight: "#FFFFFF",
    dimensionalRed: "#FF3B3B",
    quasiTeal: "#20E6CF",
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  borderRadius: {
    md: "4px",
    lg: "8px",
    xl: "12px",
  },
});
