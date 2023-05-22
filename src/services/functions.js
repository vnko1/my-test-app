// import { PAGELIMIT } from "./constants";

export const formatData = (value) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// export const addToStatePagedData = ({ page, data: { tweets } }) => {
//   for (let i = page * PAGELIMIT; i < page * PAGELIMIT + PAGELIMIT; i += 1) {
//     // dispatch(getTweets(tweets[i]));
//     // console.log(tweets[i]);
//     console.log(i);
//   }
// };
