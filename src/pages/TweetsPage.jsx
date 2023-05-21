import { useEffect } from "react";
import Container from "@mui/material/Container";
import TweetsCardsList from "../components/tweetsCardsList/TweetsCardsList";
import Pagination from "../components/paginationButtons/PaginationButtons";
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
    <Container maxWidth={false} sx={{ maxWidth: 1480, pt: 24 }}>
      {isSuccess && (
        <Box>
          <TweetsCardsList />
          <Pagination />
        </Box>
      )}
      <ToastNotification />
    </Container>
  );
};

export default UsersPage;
