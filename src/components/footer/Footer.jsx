import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        zIndex: 2,
        bottom: 0,
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2">tweets app</Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
              <Link
                href="https://www.linkedin.com/in/andriivalenko/"
                underline="none"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/vnko1/my-test-app"
                underline="none"
              >
                <GitHubIcon />
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} GoIT | React `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
