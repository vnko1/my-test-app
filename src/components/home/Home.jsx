import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ pt: (theme) => theme.spacing(2) }}>
      <Paper
        sx={{
          minHeight: 100,

          pt: 10,
          color: (theme) => theme.palette.primary,
        }}
      >
        <Typography
          variant="h1"
          sx={{ textTransform: "uppercase", textAlign: "center" }}
        >
          welcome to social network: tweets!
        </Typography>
        <Button
          onClick={() => navigate("tweets")}
          sx={{ mx: "auto", display: "block", cursor: "pointer" }}
          color="secondary"
        >
          go to tweets...
        </Button>
      </Paper>
    </Box>
  );
};

export default Home;
