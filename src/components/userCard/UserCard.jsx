import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { useUpdateUserMutation } from "../../redux/index";
import { formatData } from "../../services";
import {
  Container,
  ImageWrapper,
  Image,
  Line,
  TweetsText,
  FollowersText,
  Button,
} from "./UserCard.styled";
import LogoIcon from "../svgComponents/LogoIcon";

const UserCard = ({ follower, id, avatar, tweets, isFollow, user }) => {
  const [isFollowing, setIsFollowing] = useState(isFollow);
  const [followersValue, setFollowersValue] = useState(follower);
  const [trigger] = useUpdateUserMutation();

  const onHandleClick = () => {
    setFollowersValue((state) => (isFollowing ? (state -= 1) : (state += 1)));
    setIsFollowing((state) => !state);
  };

  useEffect(() => {
    if (isFollowing !== isFollow) {
      trigger({
        id,
        data: { follower: followersValue, isFollow: isFollowing },
      });
    }
  }, [followersValue, id, isFollow, isFollowing, trigger]);

  const formatedFollowersValue = useMemo(
    () => formatData(followersValue),
    [followersValue]
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
      <Button type="button" onClick={onHandleClick} isFollowing={isFollowing}>
        {isFollowing ? "following" : "follow"}
      </Button>
    </Container>
  );
};

UserCard.propTypes = {
  follower: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  isFollow: PropTypes.bool.isRequired,
  user: PropTypes.string,
};

export default UserCard;
