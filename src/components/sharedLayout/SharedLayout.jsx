import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "../responsiveAppBar/ResponsiveAppBar";

const SharedLayout = () => {
  return (
    <>
      <Container maxWidth={false} disableGutters>
        <ResponsiveAppBar />
      </Container>
      <Container maxWidth={false} sx={{ maxWidth: 1480, pt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
