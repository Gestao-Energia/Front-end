import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins, sans-serif"
        },
        h1: {
          fontSize: "2.5rem",
          color: "green"
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "1.4rem"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#85E2F3"
    }
  }
});