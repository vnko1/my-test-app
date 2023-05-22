import { useEffect, useMemo } from "react";
import TweetCard from "../tweetCard/TweetCard";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Unstable_Grid2";
import QueryMessage from "../queryMessage/QueryMessage";
import { useUsers, PAGELIMIT, filtredTweets } from "../../services";

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
    setTotalCount,
  } = useUsers();

  const { tweetsData, total } = useMemo(
    () => filtredTweets(queryType, data, tweetsId),
    [data, queryType, tweetsId]
  );

  useEffect(() => {
    const newTweets = tweetsData.slice(
      page * PAGELIMIT,
      page * PAGELIMIT + PAGELIMIT
    );
    setTotalCount(total);
    if (!page) setRenderTweets(newTweets);
    else setRenderTweets((state) => [...state, ...newTweets]);
  }, [page, setRenderTweets, setTotalCount, total, tweetsData]);

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
          {!!renderTweets.length && !isFetching ? (
            renderItem()
          ) : (
            <QueryMessage />
          )}
        </Grid>
      </Fade>
    </>
  );
};

export default UserCardsList;
