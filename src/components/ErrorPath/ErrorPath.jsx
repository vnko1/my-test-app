import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const ErrorPath = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6} item={true}>
            <Typography sx={{ ml: 11 }} variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button
              sx={{ ml: 15, mt: 5 }}
              variant="contained"
              onClick={() => navigate("/")}
              color="error"
            >
              Back Home
            </Button>
          </Grid>
          <Grid xs={6} item={true}>
            <img
              src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ErrorPath;
