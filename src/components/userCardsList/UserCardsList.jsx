// import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useUsers } from "../../services/usersContext/constants";
import UserCard from "../userCard/UserCard";
import { useEffect } from "react";
import {
  refreshAllUsers,
  refreshFiltredUsers,
  selectUsers,
  useLazyFetchFiltredUsersQuery,
  useLazyFetchUsersQuery,
} from "../../redux/index";

const UserCardsList = () => {
  const { page, query } = useUsers();

  const [
    fetchUsersQueryTrigger,
    { isSuccess: allUsersIsSuccess, data: allUsersData },
  ] = useLazyFetchUsersQuery(undefined, true);

  const [
    fetchFiltredUsersQueryTrigger,
    { isSuccess: filltredUsersIsSuccess, data: filtredUsersData },
  ] = useLazyFetchFiltredUsersQuery(undefined, true);

  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) {
      console.log("fetchAll", page);
      fetchUsersQueryTrigger(page);
    }
  }, [fetchUsersQueryTrigger, page, query]);

  useEffect(() => {
    if (!query) {
      console.log("save to state all");
      dispatch(refreshAllUsers(allUsersData));
    }
  }, [allUsersData, dispatch, query]);

  useEffect(() => {
    if (query) {
      console.log("fetch filtred", query);
      fetchFiltredUsersQueryTrigger({ page, query });
    }
  }, [fetchFiltredUsersQueryTrigger, page, query]);

  useEffect(() => {
    if (query) {
      console.log("save to state filter");
      dispatch(refreshFiltredUsers(filtredUsersData));
    }
  }, [dispatch, filtredUsersData, query]);

  // console.log(data);
  // useEffect(() => {
  //   setUsers((state) => [...state, ...data]);
  // }, [data, setUsers]);

  // useEffect(() => {
  //   if (!isFetching && isSuccess) {
  //     if (page === 1) {
  //       setUsers(data);
  //       return;
  //     }
  //     setUsers((state) => [...state, ...data]);
  //   }
  // }, [data, isFetching, isSuccess, page, setUsers]);

  return (
    <ul style={{ display: "flex", gap: 100, flexWrap: "wrap" }}>
      {(allUsersIsSuccess || filltredUsersIsSuccess) &&
        users.map(({ id, follower, avatar, tweets, isFollow, user }) => (
          <li key={id}>
            <UserCard
              follower={follower}
              id={id}
              avatar={avatar}
              tweets={tweets}
              isFollow={isFollow}
              user={user}
            />
          </li>
        ))}
    </ul>
  );
};

export default UserCardsList;
