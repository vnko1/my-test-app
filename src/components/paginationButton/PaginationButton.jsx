import { useUsers } from "../../services";

const Pagination = () => {
  const { setPage, page } = useUsers();

  return (
    <>
      <button
        onClick={() => setPage((state) => (state < 2 ? 1 : (state -= 1)))}
        disabled={page === 1}
      >
        previous page
      </button>
      <p>{page}</p>
      <button onClick={() => setPage((state) => (state += 1))}>
        next page
      </button>
    </>
  );
};

export default Pagination;
