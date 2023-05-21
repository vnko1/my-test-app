import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Filters from "../filters/Filters";

const ResponsiveAppBar = () => {
  const location = useLocation();
  const show = location.pathname.includes("tweets");
  return (
    <>
      {show && (
        <>
          <Button href="#text-buttons">go back</Button>
          <Filters />
        </>
      )}
    </>
  );
};

export default ResponsiveAppBar;
