import TweetCard from "../tweetCard/TweetCard";
import Fade from "@mui/material/Fade";
import Loader from "../loader/Loader";
import Grid from "@mui/material/Unstable_Grid2";
import QueryMessage from "../queryMessage/QueryMessage";
import { useUsers } from "../../services";

const UserCardsList = () => {
  const { data, isSuccess, isFetching } = useUsers();

  const renderItem = () => {
    return data.tweets.map(
      ({ id, follower, avatar, tweets, isFollow, user }) => (
        <Grid xs={2} sm={4} md={4} component="li" key={id}>
          <TweetCard
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

  if (!data?.count && !isFetching) return <QueryMessage />;
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
      <Loader />
    </>
  );
};

export default UserCardsList;
