import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "../appBar/AppBar";

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth={false} sx={{ maxWidth: 1480 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
