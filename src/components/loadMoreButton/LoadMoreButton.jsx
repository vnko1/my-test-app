import { useUsers } from "../../services/usersContext/constants";

const LoadMoreButton = () => {
  const { setPage } = useUsers();

  return (
    <button onClick={() => setPage((state) => (state += 1))}>load more</button>
  );
};

export default LoadMoreButton;
