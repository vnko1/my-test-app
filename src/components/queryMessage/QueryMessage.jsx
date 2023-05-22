import Typography from "@mui/material/Typography";
import { useUsers } from "../../services";

const QueryMessage = () => {
  const { queryType } = useUsers();

  return (
    <Typography component={"p"} variant="h1" sx={{ mx: "auto" }}>
      Nothing found in {queryType.title}!
    </Typography>
  );
};

export default QueryMessage;
