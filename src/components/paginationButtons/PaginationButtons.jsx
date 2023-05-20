import { PAGELIMIT, useUsers } from "../../services";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationButtons = () => {
  const { setPage, data } = useUsers();

  const totalPage = Math.ceil(data?.count / PAGELIMIT);

  const onHandleChange = (_, val) => setPage(val);

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPage}
        size="large"
        showFirstButton
        showLastButton
        onChange={onHandleChange}
      />
    </Stack>
  );
};

export default PaginationButtons;
