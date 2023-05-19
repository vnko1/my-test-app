import PropTypes from "prop-types";
import { UsersContext } from "./constants";
import { useState } from "react";
import { useFetchUsersQuery } from "../../redux";

const UsersProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { data, isSuccess, refetch } = useFetchUsersQuery({
    page,
    query,
  });

  return (
    <UsersContext.Provider
      value={{ setPage, page, data, isSuccess, query, setQuery, refetch }}
    >
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UsersProvider;
