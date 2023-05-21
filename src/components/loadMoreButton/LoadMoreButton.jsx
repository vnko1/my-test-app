import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useUsers } from "../../services";

const LoadMoreBtn = () => {
  const { setPage, data, isFetching } = useUsers();

  const disabled = data.tweets.length === data.count || isFetching;
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
