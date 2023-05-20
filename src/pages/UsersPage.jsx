import UserCardsList from "../components/userCardsList/UserCardsList";
import Pagination from "../components/paginationButtons/PaginationButtons";
import Filters from "../components/filters/Filters";
import { useUsers } from "../services";

const UsersPage = () => {
  const { data } = useUsers();

  return (
    <>
      <Filters />
      <UserCardsList />
      {data?.count && <Pagination />}
    </>
  );
};

export default UsersPage;
