import PropTypes from "prop-types";
import { useState } from "react";
import { UsersContext } from "../services/contextFunctions";
import { useFetchTweetsQuery } from "../redux/index";
import { QUERYTYPE } from "../services";

const UsersProvider = ({ children }) => {
  const [queryType, setQueryType] = useState(QUERYTYPE.all);
  const [page, setPage] = useState(1);

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
  } = useFetchTweetsQuery({
    page,
    queryType,
  });

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
