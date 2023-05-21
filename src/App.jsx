import Router from "./components/Router";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
