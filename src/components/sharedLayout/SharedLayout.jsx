import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../responsiveAppBar/ResponsiveAppBar";
import Footer from "../footer/Footer";

const SharedLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
