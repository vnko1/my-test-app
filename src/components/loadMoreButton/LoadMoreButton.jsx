import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { PAGELIMIT, useUsers } from "../../services";

const LoadMoreBtn = () => {
  const { setPage, isFetching, renderTweets, page } = useUsers();

  const disabled =
    PAGELIMIT * page >= renderTweets.length - (renderTweets.length % 2);

  const onHandleCLick = () => {
    setPage((state) => (state += 1));
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ justifyContent: "center", alignItems: "center", mt: 6, mx: "auto" }}
    >
      <Button
        onClick={onHandleCLick}
        disabled={disabled}
        sx={{ mx: "auto" }}
        style={{ display: "block" }}
      >
        {isFetching ? "LOADING ..." : "Load more"}
      </Button>
    </Container>
  );
};

export default LoadMoreBtn;
