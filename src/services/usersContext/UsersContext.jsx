import PropTypes from "prop-types";
import { UsersContext } from "./constants";
import { useState } from "react";
import { useFetchUsersQuery } from "../../redux";

const UsersProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const { data, isSuccess } = useFetchUsersQuery({
    page,
  });

  return (
    <UsersContext.Provider value={{ setPage, page, data, isSuccess }}>
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UsersProvider;
