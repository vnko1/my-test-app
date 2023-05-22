import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import {
  deleteTweetId,
  addTweetId,
  useUpdateTweetMutation,
} from "../../redux/index";
import { formatData, useUsers } from "../../services";
import {
  Container,
  ImageWrapper,
  Image,
  Line,
  TweetsText,
  FollowersText,
  Button,
} from "./TweetCard.styled";
import LogoIcon from "../svgComponents/LogoIcon";
import { useDispatch } from "react-redux";

const TweetCard = ({ follower, id, avatar, tweets, user }) => {
  const [trigger, { isFetching }] = useUpdateTweetMutation();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerQuantity, setFollowerQuantity] = useState(follower);
  const { tweetsId } = useUsers();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsFollowing(tweetsId.some((tweet) => tweet === id));
  }, [id, tweetsId]);

  const onHandleClick = () => {
    const followersValue = isFollowing
      ? followerQuantity - 1
      : followerQuantity + 1;

    setFollowerQuantity(followersValue);
    if (isFollowing) dispatch(deleteTweetId(id));
    if (!isFollowing) dispatch(addTweetId(id));
    trigger({
      id,
      data: { follower: followersValue },
    });
  };

  const formatedFollowersValue = useMemo(
    () => formatData(followerQuantity),
    [followerQuantity]
  );

  const formatedTweetsValue = useMemo(() => formatData(tweets), [tweets]);

  return (
    <Container>
      <LogoIcon />
      <ImageWrapper>
        <Image src={avatar} alt={user} />
      </ImageWrapper>
      <Line />
      <TweetsText>{formatedTweetsValue} tweets</TweetsText>
      <FollowersText>{formatedFollowersValue} followers</FollowersText>
      <Button
        type="button"
        onClick={onHandleClick}
        isFollowing={isFollowing}
        disabled={isFetching}
      >
        {isFollowing ? "following" : "follow"}
      </Button>
    </Container>
  );
};

TweetCard.propTypes = {
  follower: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  user: PropTypes.string,
};

export default TweetCard;
