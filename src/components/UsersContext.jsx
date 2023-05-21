import PropTypes from "prop-types";
import { useState } from "react";
import { UsersContext } from "../services/contextFunctions";
import { useFetchUsersQuery } from "../redux/index";
import { QUERYTYPE } from "../services";

const UsersProvider = ({ children }) => {
  const [queryType, setQueryType] = useState(QUERYTYPE.all.mode);
  const [page, setPage] = useState(1);

  const { data, isSuccess, isFetching, isError, error, isLoading } =
    useFetchUsersQuery({
      page,
      queryType,
    });

  return (
    <UsersContext.Provider
      value={{
        page,
        setPage,
        setQueryType,
        data,
        isSuccess,
        isFetching,
        isError,
        isLoading,
        error,
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
