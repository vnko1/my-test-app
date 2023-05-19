// import { useDispatch } from "react-redux";

import { useUsers } from "../../services/usersContext/constants";

const FilterButton = ({ setSearchParams }) => {
  const { setQuery, setPage } = useUsers();

  const onHandleCLick = (filterType) => {
    if (filterType === "all") {
      console.log(1);
      setQuery("");
      setPage(1);
    }
    if (filterType === "follow") {
      console.log(2);
      setQuery(false);
      setPage(1);
    }
    if (filterType === "following") {
      console.log(3);
      setQuery(true);
      setPage(1);
    }
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
      <button
        type="button"
        onClick={() => {
          console.log(usersApi.util);
        }}
      >
        reset
      </button>
      {/* true */}
    </>
  );
};

export default FilterButton;
