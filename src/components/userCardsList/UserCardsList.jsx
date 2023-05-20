import { useUsers } from "../../services";
import Stack from "@mui/material/Stack";
import UserCard from "../userCard/UserCard";
import { Fade } from "@mui/material";
import Loader from "../loader/Loader";

const UserCardsList = () => {
  const { data, isSuccess, isFetching } = useUsers();
  const renderItem = () => {
    return data.users.map(
      ({ id, follower, avatar, tweets, isFollow, user }) => (
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
      )
    );
  };
  return (
    <>
      <Fade in={isSuccess} appear={true} timeout={500}>
        <Stack
          component="ul"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={10}
        >
          {isSuccess && renderItem()}
        </Stack>
      </Fade>
      <Loader isFetching={isFetching} />
    </>
  );
};

export default UserCardsList;
