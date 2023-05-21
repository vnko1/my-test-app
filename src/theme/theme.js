import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ebd8ff",
    },
    secondary: {
      main: "#5736A3",
    },
    background: {
      paper: "#ebd8ff",
      default: " #766a92",
    },
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeightLight: 400,
    lineHeight: 1.5,

    h1: {
      fontSize: 18,
      fontWeight: 800,
      textTransform: "uppercase",
    },
    h2: {
      fontSize: 17,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
  spacing: 8,
});
