import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = ({ isFetching }) => {
  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: (theme) => theme.palette.background.default,
      }}
      style={{ opacity: 0.8 }}
      open={isFetching}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

Loader.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default Loader;
