import UserCardsList from "../components/userCardsList/UserCardsList";
import Pagination from "../components/paginationButton/PaginationButton";
import FilterButton from "../components/filterButton/FilterButton";

const UsersPage = () => {
  return (
    <>
      <FilterButton />
      <UserCardsList />
      <Pagination />
    </>
  );
};

export default UsersPage;
