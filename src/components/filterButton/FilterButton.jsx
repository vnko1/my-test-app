import { useUsers } from "../../services";

const FilterButton = () => {
  const { setQuery, setPage } = useUsers();

  const onHandleCLick = (filterType) => {
    if (filterType === "all") {
      setQuery("");
      setPage(1);
    }
    if (filterType === "follow") {
      setQuery(false);
      setPage(1);
    }
    if (filterType === "following") {
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
      <button type="button" onClick={() => onHandleCLick("following")}>
        show following
      </button>
    </>
  );
};

export default FilterButton;
