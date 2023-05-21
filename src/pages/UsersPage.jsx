import { useEffect } from "react";
import UserCardsList from "../components/userCardsList/UserCardsList";
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
    <>
      {isSuccess && (
        <Box>
          <UserCardsList />
          <Pagination />
        </Box>
      )}
      <ToastNotification />
    </>
  );
};

export default UsersPage;
