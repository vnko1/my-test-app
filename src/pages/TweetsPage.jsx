import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TweetsCardsList from "../components/tweetsCardsList/TweetsCardsList";
import toast from "react-hot-toast";
import ToastNotification from "../components/notification/ToastNotification";
import Box from "@mui/material/Box";

import { useUsers } from "../services";

const UsersPage = () => {
  const { isSuccess, isError, error } = useUsers();

  useEffect(() => {
    if (isError && error?.status === 404) {
      toast.error(error.data);
    } else if (isError) {
      toast.error(error?.error);
    }
  }, [error, isError]);

  return (
    <Container maxWidth={false} sx={{ maxWidth: 1480, py: 16 }}>
      <Link
        component={RouterLink}
        to="/"
        underline="hover"
        sx={{ textTransform: "uppercase" }}
      >
        GO BACK
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
