export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#ebd8ff",
          },
          secondary: {
            main: "#5736A3",
          },
          background: {
            paper: "#cfd8dc",
            default: " #766a92",
          },
        }
      : {
          primary: {
            main: "#eceff1",
          },
          secondary: {
            main: "#f57f17",
          },
          background: {
            paper: "#263238",
          },
        }),
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
