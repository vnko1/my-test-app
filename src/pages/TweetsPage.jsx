import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TweetsCardsList from "../components/tweetsCardsList/TweetsCardsList";
import toast from "react-hot-toast";
import ToastNotification from "../components/notification/ToastNotification";
import Box from "@mui/material/Box";

// import { useDispatch } from "react-redux";
import { useUsers } from "../services";
// import { getTweets } from "../redux";

const UsersPage = () => {
  const { isSuccess, isError, error } = useUsers();
  // const dispatch = useDispatch();

  useEffect(() => {
    if (isError && error?.status === 404) {
      toast.error(error.data);
    } else if (isError) {
      toast.error(error?.error);
    }
  }, [error, isError]);

  // useEffect(() => {
  //   if (isSuccess) dispatch(getTweets(data.tweets));
  // }, [data, dispatch, isSuccess]);

  return (
    <Container maxWidth="lg" sx={{ py: 16, position: "relative" }}>
      <Link
        component={RouterLink}
        to="/"
        underline="hover"
        sx={{
          textTransform: "uppercase",
          position: "fixed",
          left: 20,
          top: 70,
          zIndex: 2000,
        }}
      >
        GO HOME
      </Link>
      {isSuccess && (
        <Box sx={{ mt: 2 }}>
          <TweetsCardsList />
        </Box>
      )}
      <ToastNotification />
    </Container>
  );
};

export default UsersPage;
