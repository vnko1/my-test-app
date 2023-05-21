import { useEffect } from "react";
import UserCardsList from "../components/userCardsList/UserCardsList";
import Pagination from "../components/paginationButtons/PaginationButtons";
import Filters from "../components/filters/Filters";
import toast from "react-hot-toast";
import ToastNotification from "../components/notification/ToastNotification";
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
        <>
          <Filters />
          <UserCardsList />
          <Pagination />
          <ToastNotification />
        </>
      )}
      <ToastNotification />
    </>
  );
};

export default UsersPage;
