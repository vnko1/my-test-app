import Container from "@mui/material/Container";
import Home from "../components/home/Home";

const HomePage = () => (
  <Container maxWidth={false} sx={{ maxWidth: 1480, pt: 15 }}>
    <Home />
  </Container>
);

export default HomePage;
