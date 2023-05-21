import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

const SharedLayout = () => {
  return (
    <>
      <Container maxWidth={false} sx={{ maxWidth: 1480 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
