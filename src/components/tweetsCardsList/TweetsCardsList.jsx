import { useCallback, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import TweetCard from "../tweetCard/TweetCard";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Unstable_Grid2";
import QueryMessage from "../queryMessage/QueryMessage";

import { QUERYTYPE, useUsers, PAGELIMIT } from "../../services";

const UserCardsList = () => {
  const {
    data,
    isSuccess,
    tweetsId,
    queryType,
    page,
    isFetching,
    renderTweets,
    setRenderTweets,
  } = useUsers();

  const filtredTweets = useCallback(() => {
    if (queryType.title === QUERYTYPE.all.title) {
      return data.tweets.slice(page * PAGELIMIT, page * PAGELIMIT + PAGELIMIT);
    }
    if (queryType.title === QUERYTYPE.follow.title) {
      return data.tweets
        .filter((el) => !tweetsId.includes(el.id))
        .slice(page * PAGELIMIT, page * PAGELIMIT + PAGELIMIT);
    }
    if (queryType.title === QUERYTYPE.following.title) {
      return data.tweets
        .filter((el) => tweetsId.includes(el.id))
        .slice(page * PAGELIMIT, page * PAGELIMIT + PAGELIMIT);
    }
  }, [data.tweets, page, queryType.title, tweetsId]);

  useEffect(() => {
    if (!page) setRenderTweets(filtredTweets());
    else setRenderTweets((state) => [...state, ...filtredTweets()]);
    scroll.scrollToBottom();
  }, [filtredTweets, page, setRenderTweets]);

  const renderItem = () => {
    return renderTweets.map(({ id, follower, avatar, tweets, user }) => (
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

  return (
    <>
      <Fade in={isSuccess} appear={true} timeout={1000}>
        <Grid
          container
          component="ul"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ p: 0 }}
        >
          {renderTweets.length && !isFetching ? renderItem() : <QueryMessage />}
        </Grid>
      </Fade>
    </>
  );
};

export default UserCardsList;
