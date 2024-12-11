import { createTheme } from "@mui/material";
import "./globalStyle.css";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif",
        },
        h1: {
          fontSize: "4.25rem",
          color: "#000",
          fontWeight: 700,
          lineHeight: "6.375rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "1.4rem",
          "&.Mui-disabled": {
            opacity: 0.7,
            cursor: "not-allowed",
            color: "#FFF",
          },
          "&.Mui-disabled:hover": { cursor: "not-allowed" },
        },
      },
    },
  },
  palette: {
    primary: {
      "900": "#24606B",
      "800": "#37808D",
      "700": "#4DA0AF",
      "600": "#67C1D1",
      "500": "#85E2F3",
      "400": "#A4F0FD",
      "300": "#BFF5FF",
      "200": "#D9F9FF",
      "100": "#F3FDFF",
    },
  },
});
