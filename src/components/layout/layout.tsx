import { makeStyles } from "@material-ui/core";
import React from "react";
import Main from "./main";
import Footer from "./footer";
import Header from "./header";
import HeaderBand from "./header-band";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {},
  main: {
    flexGrow: 1,
    flexShrink: 1,
  },
  footer: {
    // height: theme.typography.pxToRem(20),
  },
}));

const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div>
        <HeaderBand />
      </div>
      <div className={classes.main}>
        <Main />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
