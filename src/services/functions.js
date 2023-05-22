import { QUERYTYPE } from "./constants";

export const formatData = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const filtredTweets = (queryType, data, tweetsId) => {
  let tweetsData = null;
  if (queryType.title === QUERYTYPE.all.title) {
    tweetsData = data.tweets;
  }
  if (queryType.title === QUERYTYPE.follow.title) {
    tweetsData = data.tweets.filter((el) => !tweetsId.includes(el.id));
  }
  if (queryType.title === QUERYTYPE.following.title) {
    tweetsData = data.tweets.filter((el) => tweetsId.includes(el.id));
  }
  return {
    tweetsData,
    total: tweetsData.length,
  };
};
