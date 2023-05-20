import Router from "./components/Router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { selectTheme } from "./redux";
import { getDesignTokens } from "./theme/getDesignToken";

const App = () => {
  const theme = useSelector(selectTheme);
  const themeMode = useMemo(() => createTheme(getDesignTokens(theme)), [theme]);
  return (
    <ThemeProvider theme={themeMode}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
