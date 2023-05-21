import UserCard from "../userCard/UserCard";
import Fade from "@mui/material/Fade";
import Loader from "../loader/Loader";
import Grid from "@mui/material/Unstable_Grid2";
import { useUsers } from "../../services";

const UserCardsList = () => {
  const { data, isSuccess, isFetching } = useUsers();
  const renderItem = () => {
    return data.users.map(
      ({ id, follower, avatar, tweets, isFollow, user }) => (
        <Grid xs={2} sm={4} md={4} component="li" key={id}>
          <UserCard
            follower={follower}
            id={id}
            avatar={avatar}
            tweets={tweets}
            isFollow={isFollow}
            user={user}
          />
        </Grid>
      )
    );
  };
  return (
    <>
      <Fade in={isSuccess} appear={true} timeout={500}>
        <Grid
          container
          justifyContent="center"
          component="ul"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {isSuccess && renderItem()}
        </Grid>
      </Fade>
      <Loader isFetching={isFetching} />
    </>
  );
};

export default UserCardsList;
