import { useUsers } from "../services/usersContext/constants";
import UserCardsList from "../components/userCardsList/UserCardsList";
import LoadMoreButton from "../components/loadMoreButton/LoadMoreButton";
import FilterButton from "../components/filterBitton/FilterButton";

const UsersPage = () => {
  const { page } = useUsers();

  return (
    <>
      <FilterButton />
      <p>{page}</p>
      <UserCardsList />
      <LoadMoreButton />
    </>
  );
};

export default UsersPage;
