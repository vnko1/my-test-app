import PropTypes from "prop-types";
import { useState } from "react";
import { UsersContext } from "../services/contextFunctions";
import { selectTweetsId, useFetchTweetsQuery } from "../redux/index";
import { QUERYTYPE } from "../services";
import { useSelector } from "react-redux";

const UsersProvider = ({ children }) => {
  const [queryType, setQueryType] = useState(QUERYTYPE.all);
  const [page, setPage] = useState(0);
  const [totalCount, setTotalCount] = useState(null);

  const tweetsId = useSelector(selectTweetsId);
  const [renderTweets, setRenderTweets] = useState([]);
  const { data, isSuccess, isFetching, isError, error, isLoading } =
    useFetchTweetsQuery();

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
        isSuccess,
        isFetching,
        isError,
        isLoading,
        error,
        totalCount,
        setTotalCount,
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
