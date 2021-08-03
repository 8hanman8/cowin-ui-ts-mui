import React from "react";
import { AppBar, Grid, Typography, makeStyles } from "@material-ui/core";
import EmblemWhite from "./../../assets/icons/emblem_white.png";
import DropDownMenu from "../common/dropdown-menu/drop-down-menu";
import { LANGUAGE_DATA } from "./../../utils/constants";

const styles = makeStyles({
  amblem: {
    padding: "0.7rem 0.5rem",
    display: "flex",
  },
  logo: {
    width: "2.5em",
    height: "2.5em",
  },
});

const Header: React.FC = () => {
  const classes = styles();
  return (
    <AppBar color="primary" position="fixed">
      <Grid container>
        <Grid item md={2} xs={false}></Grid>
        <Grid
          item
          md={2}
          xs={8}
          className={classes.amblem}
          justifyContent="center"
          alignItems="center"
        >
          <img src={EmblemWhite} className={classes.logo} alt="emblem" />
          <Typography style={{ marginLeft: "0.6rem" }} variant="subtitle2">
            Ministry of Health and Family Welfare
          </Typography>
        </Grid>
        <Grid item md={2} xs={false}></Grid>
        <Grid item md={2} xs={false}></Grid>
        <Grid item md={2} xs={false}></Grid>
        <Grid
          item
          md={2}
          xs={4}
          justifyContent="center"
          alignItems="center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <DropDownMenu
            title={LANGUAGE_DATA.title}
            menuOptions={LANGUAGE_DATA.menuOptions}
          ></DropDownMenu>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
