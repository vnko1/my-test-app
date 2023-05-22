import PropTypes from "prop-types";
import { useState } from "react";
import { UsersContext } from "../services/contextFunctions";
import {
  // selectTweets,
  selectTweetsId,
  useFetchTweetsQuery,
} from "../redux/index";
import { QUERYTYPE } from "../services";
import { useSelector } from "react-redux";

const UsersProvider = ({ children }) => {
  const [queryType, setQueryType] = useState(QUERYTYPE.all);
  const [page, setPage] = useState(0);

  const tweetsId = useSelector(selectTweetsId);
  const [renderTweets, setRenderTweets] = useState([]);
  const {
    data,
    currentData,
    isSuccess,
    isFetching,
    isError,
    error,
    isLoading,
    isUninitialized,
    endpointName,
  } = useFetchTweetsQuery();

  return (
    <UsersContext.Provider
      value={{
        renderTweets,
        setRenderTweets,
        tweetsId,
        page,
        setPage,
        queryType,
        setQueryType,
        data,
        currentData,
        isSuccess,
        isFetching,
        isError,
        isLoading,
        error,
        isUninitialized,
        endpointName,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UsersProvider;
