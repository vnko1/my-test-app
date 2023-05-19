const FilterButton = ({ setSearchParams }) => {
  //   useEffect(() => {
  //     if (isSuccess) {
  //     }
  //   }, [isSuccess, q, refetch, setQuery]);

  const onHandleCLick = (filterType) => {
    if (filterType === "all") setSearchParams({});
    if (filterType === "follow") setSearchParams({ filter: false });
    if (filterType === "following") setSearchParams({ filter: true });

    // refetch();
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
