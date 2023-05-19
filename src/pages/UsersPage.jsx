import { useUsers } from "../services/usersContext/constants";
import UserCardsList from "../components/userCardsList/UserCardsList";
import LoadMoreButton from "../components/loadMoreButton/LoadMoreButton";
import FilterButton from "../components/filterButton/FilterButton";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

const UsersPage = () => {
  const { page, setQuery, setPage } = useUsers();
  const [searchParams, setSearchParams] = useSearchParams();

  const { filter } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!filter) {
      setPage(1);
      return;
    }

    setQuery(filter);
    setPage(1);
  }, [filter, setPage, setQuery]);

  return (
    <>
      <FilterButton setSearchParams={setSearchParams} />
      <p>{page}</p>
      <UserCardsList />
      <LoadMoreButton />
    </>
  );
};

export default UsersPage;
