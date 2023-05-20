import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import AppBar from "../appBar/AppBar";

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container fixed disableGutters maxWidth={false}>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
