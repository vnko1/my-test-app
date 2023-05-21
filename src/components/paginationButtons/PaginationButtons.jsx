import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";
import { PAGELIMIT, useUsers } from "../../services";

const PaginationButtons = () => {
  const { page, setPage, data, isSuccess } = useUsers();

  const totalPage = Math.ceil(data?.count / PAGELIMIT);

  const onHandleChange = (_, val) => setPage(val);

  if (data?.count) {
    return (
      <Stack
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 6 }}
      >
        <Fade in={isSuccess} appear={true} timeout={500}>
          <Pagination
            page={page}
            count={totalPage}
            size="large"
            showFirstButton
            showLastButton
            onChange={onHandleChange}
          />
        </Fade>
      </Stack>
    );
  }
};

export default PaginationButtons;
