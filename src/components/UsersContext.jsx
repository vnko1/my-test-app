import PropTypes from "prop-types";
import { useState } from "react";
import { UsersContext } from "../services/contextFunctions";
import { selectTweetsId, useFetchTweetsQuery } from "../redux/index";
import { QUERYTYPE } from "../services";
import { useSelector } from "react-redux";

const UsersProvider = ({ children }) => {
  const [queryType, setQueryType] = useState(QUERYTYPE.all);
  const [page, setPage] = useState(1);

  const tweetsId = useSelector(selectTweetsId);
  console.log(tweetsId);

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
  } = useFetchTweetsQuery(page);

  return (
    <UsersContext.Provider
      value={{
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
        tweetsId,
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
