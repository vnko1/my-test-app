import { useUsers } from "../../services/usersContext/constants";
import UserCard from "../userCard/UserCard";

const UserCardsList = () => {
  const { page } = useUsers();

  return (
    <ul>
      <li>
        <UserCard />
      </li>
    </ul>
  );
};

export default UserCardsList;
