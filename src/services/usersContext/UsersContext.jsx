import PropTypes from "prop-types";
import { UsersContext } from "./constants";
import { useState } from "react";

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  return (
    <UsersContext.Provider
      value={{
        page,
        setPage,
        query,
        setQuery,
        users,
        setUsers,
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
