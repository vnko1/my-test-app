import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TweetsCardsList from "../components/tweetsCardsList/TweetsCardsList";
import toast from "react-hot-toast";
import ToastNotification from "../components/notification/ToastNotification";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import LoadMoreBtn from "../components/loadMoreButton/LoadMoreButton";
import Loader from "../components/loader/Loader";

import { useUsers } from "../services";

const UsersPage = () => {
  const { isSuccess, isError, error, renderTweets } = useUsers();

  useEffect(() => {
    if (isError && error?.status === 404) {
      toast.error(error.data);
    } else if (isError) {
      toast.error(error?.error);
    }
  }, [error, isError]);

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
        <>
          <Box sx={{ mt: 2 }}>
            <TweetsCardsList />
          </Box>
          <IconButton
            onClick={() => scroll.scrollToTop()}
            size="large"
            color="primary"
            sx={{ position: "fixed", right: 0, bottom: 120, zIndex: 2000 }}
          >
            <ArrowCircleUpIcon fontSize="large" />
          </IconButton>
          {renderTweets.length && <LoadMoreBtn />}
        </>
      )}
      <Loader />
      <ToastNotification />
    </Container>
  );
};

export default UsersPage;
