import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import LogoIcon from "../svgComponents/LogoIcon";
import Filters from "../filters/Filters";

const ResponsiveAppBar = () => {
  const location = useLocation();
  const show = location.pathname.includes("tweets");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="secondary" position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 4, md: 10 }}
          >
            <Link component={RouterLink} to="/" underline="none">
              <LogoIcon />
            </Link>
            <Link
              component={RouterLink}
              to="/"
              underline="hover"
              sx={{ textTransform: "uppercase" }}
            >
              home
            </Link>
            <Link
              component={RouterLink}
              to="tweets"
              underline="hover"
              sx={{ textTransform: "uppercase" }}
            >
              tweets
            </Link>
          </Stack>
          {show && <Filters />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ResponsiveAppBar;
