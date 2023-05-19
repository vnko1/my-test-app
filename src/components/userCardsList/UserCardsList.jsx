// import { useFetchUsersQuery } from "../../redux/index";
import { useUsers } from "../../services/usersContext/constants";
import UserCard from "../userCard/UserCard";

const UserCardsList = () => {
  const { data, isSuccess } = useUsers();
  // const { data, isSuccess } = useFetchUsersQuery({
  //   page,
  // });

  // useEffect(() => {
  //   if (!isFetching && isSuccess) {
  //     setUsers((state) => [...state, ...data]);
  //   }
  // }, [data, isFetching, isSuccess, setUsers]);

  return (
    <ul>
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
