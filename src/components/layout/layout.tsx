import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";
import Theme from "./../../mui/theme";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0",
  },
  gridContainer: {
    height: "100vh",
    margin: "0px",
  },
  header: {
  },
  main: {
    flexGrow: 1,
  },
  footer: {
  },
});

const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container className={classes.gridContainer} direction="column">
        <Grid item className={classes.header}>
          <Header />
        </Grid>
        <Grid item className={classes.main}>
          <Typography>I am everything</Typography>
        </Grid>
        <Grid item className={classes.footer}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Layout;
