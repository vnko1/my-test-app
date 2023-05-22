import { QUERYTYPE } from "./constants";

export const formatData = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const filtredTweets = (queryType, data, tweetsId) => {
  if (queryType.title === QUERYTYPE.all.title) {
    return data.tweets;
  }
  if (queryType.title === QUERYTYPE.follow.title) {
    return data.tweets.filter((el) => !tweetsId.includes(el.id));
  }
  if (queryType.title === QUERYTYPE.following.title) {
    return data.tweets.filter((el) => tweetsId.includes(el.id));
  }
};
