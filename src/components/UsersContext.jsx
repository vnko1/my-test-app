import PropTypes from "prop-types";
import { useState } from "react";
import { UsersContext } from "../services/contextFunctions";
import { useFetchUsersQuery } from "../redux/index";

const UsersProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, isSuccess, isFetching, isError, error, isLoading } =
    useFetchUsersQuery({
      page,
      query,
    });

  return (
    <UsersContext.Provider
      value={{
        page,
        setPage,
        setQuery,
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
