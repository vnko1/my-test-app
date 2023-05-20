import { useUsers } from "../../services";
import UserCard from "../userCard/UserCard";

const UserCardsList = () => {
  const { data, isSuccess } = useUsers();

  return (
    <ul style={{ display: "flex", gap: 100, flexWrap: "wrap" }}>
      {isSuccess &&
        data.map(({ id, follower, avatar, tweets, isFollow, user }) => (
          <li key={id}>
            <UserCard
              follower={follower}
              id={id}
              avatar={avatar}
              tweets={tweets}
              isFollow={isFollow}
              user={user}
            />
          </li>
        ))}
    </ul>
  );
};

export default UserCardsList;
