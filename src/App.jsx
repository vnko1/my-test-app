import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { theme } from "./theme/theme";
import Router from "./components/Router";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useUsers } from "./services";

const App = () => {
  const location = useLocation();
  const { setPage } = useUsers();

  useEffect(() => {
    if (!location.pathname.includes("tweets")) setPage(0);
  }, [location.pathname, setPage]);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
