import { useState } from "react";
import { useUpdateUserMutation } from "../../redux/index";

const UserCard = ({ follower, id, avatar, tweets, isFollow, user }) => {
  const [isFollowing, setIsFollowing] = useState(isFollow);
  const [followersValue, setFollowersValue] = useState(follower);
  const [trigger] = useUpdateUserMutation();

  const onHandleClick = () => {
    let follower = followersValue;
    let isFollow = isFollowing;
    if (isFollowing) {
      setFollowersValue((state) => state - 1);
      follower -= 1;
    } else {
      setFollowersValue((state) => state + 1);
      follower += 1;
    }
    setIsFollowing((state) => !state);
    isFollow = !isFollow;

    const newData = { id, data: { follower, isFollow } };
    trigger(newData);
  };

  return (
    <div>
      <p>{user}</p>
      <p>
        <span>{tweets}</span> tweets
      </p>
      <p>
        <span>{followersValue}</span> followers
      </p>
      <button type="button" onClick={onHandleClick}>
        {isFollowing ? "following" : "follow"}
      </button>
    </div>
  );
};

export default UserCard;
