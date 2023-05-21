export { store, persistStor } from "./store";
export {
  useFetchTweetsQuery,
  useUpdateTweetMutation,
} from "./tweetsApi/tweetsApi";

export { selectTweetsId } from "./tweets/selectors";
export { addTweetId, deleteTweetId } from "./tweets/tweetsSlice";
