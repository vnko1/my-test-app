import { PAGELIMIT } from "./constants";

export const formatData = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const addToStatePagedData = ({
  getTweets,
  dispatch,
  page,
  data: { tweets },
}) => {
  for (let i = page; i <= i + PAGELIMIT; i += 1) {
    // dispatch(getTweets(tweets[i]));
    console.log(tweets[i]);
  }
};
