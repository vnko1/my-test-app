import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useUsers } from "../../services";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const LoadMoreBtn = () => {
  const { setPage, isFetching, renderTweets, totalCount } = useUsers();

  const disabled = renderTweets.length === totalCount;

  useEffect(() => {
    if (disabled) toast.error("Oops. Tweets is finished!");
  }, [disabled]);

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
