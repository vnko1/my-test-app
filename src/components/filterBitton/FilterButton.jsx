import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useUsers } from "../../services/usersContext/constants";

const FilterButton = () => {
  const { setQuery, refetch, isSuccess } = useUsers();

  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("filter") ?? "";

  //   useEffect(() => {
  //     if (isSuccess) {
  //     }
  //   }, [isSuccess, q, refetch, setQuery]);

  const onHandleCLick = (filterType) => {
    if (filterType === "all") setSearchParams({});
    if (filterType === "follow") setSearchParams({ filter: false });
    if (filterType === "following") setSearchParams({ filter: true });
    setQuery(q);
    refetch();
  };

  return (
    <>
      <button type="button" onClick={() => onHandleCLick("all")}>
        show all
      </button>
      <button type="button" onClick={() => onHandleCLick("follow")}>
        show follow
      </button>
      {/* false */}
      <button type="button" onClick={() => onHandleCLick("following")}>
        show following
      </button>
      {/* true */}
    </>
  );
};

export default FilterButton;
