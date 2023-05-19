import { useUsers } from "../services/usersContext/constants";
import UserCardsList from "../components/userCardsList/UserCardsList";
import LoadMoreButton from "../components/loadMoreButton/LoadMoreButton";

const UsersPage = () => {
  const { page } = useUsers();

  return (
    <>
      <p>{page}</p>
      <UserCardsList />
      <LoadMoreButton />
    </>
  );
};

export default UsersPage;
