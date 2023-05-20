import UserCardsList from "../components/userCardsList/UserCardsList";
import Pagination from "../components/paginationButtons/PaginationButtons";
import FilterButton from "../components/filterButton/FilterButton";
import { useUsers } from "../services";

const UsersPage = () => {
  const { data } = useUsers();

  return (
    <>
      <FilterButton />
      <UserCardsList />
      {data?.count && <Pagination />}
    </>
  );
};

export default UsersPage;
