import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useUsers } from "../../services";

const Loader = () => {
  const { isFetching, isLoading } = useUsers();

  const show = isFetching || isLoading;

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: (theme) => theme.palette.background.default,
      }}
      style={{ opacity: 0.5 }}
      open={show}
    >
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default Loader;
