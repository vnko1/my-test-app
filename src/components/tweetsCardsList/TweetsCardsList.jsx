import TweetCard from "../tweetCard/TweetCard";
import Fade from "@mui/material/Fade";
import Loader from "../loader/Loader";
import Grid from "@mui/material/Unstable_Grid2";
import QueryMessage from "../queryMessage/QueryMessage";
import { QUERYTYPE, useUsers } from "../../services";
import { useCallback } from "react";
import LoadMoreBtn from "../loadMoreButton/LoadMoreButton";

const UserCardsList = () => {
  const { data, isSuccess, tweetsId, queryType } = useUsers();

  const filtredTweets = useCallback(() => {
    if (queryType.title === QUERYTYPE.all.title) {
      return data.tweets;
    }
    if (queryType.title === QUERYTYPE.follow.title) {
      return data.tweets.filter((el) => !tweetsId.includes(el.id));
    }
    if (queryType.title === QUERYTYPE.following.title) {
      return data.tweets.filter((el) => tweetsId.includes(el.id));
    }
  }, [data, queryType.title, tweetsId]);

  const renderItem = () => {
    return filtredTweets().map(({ id, follower, avatar, tweets, user }) => (
      <Grid xs={2} sm={4} md={4} component="li" key={id}>
        <TweetCard
          follower={follower}
          id={id}
          avatar={avatar}
          tweets={tweets}
          user={user}
        />
      </Grid>
    ));
  };

  if (!filtredTweets().length && isSuccess) return <QueryMessage />;

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
      <LoadMoreBtn />
      <Loader />
    </>
  );
};

export default UserCardsList;
