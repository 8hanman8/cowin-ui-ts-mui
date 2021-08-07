import React from "react";
import { AppBar, Grid, Typography, makeStyles } from "@material-ui/core";
import EmblemWhite from "./../../assets/icons/emblem_white.png";
import DropDownMenu from "../common/dropdown-menu/drop-down-menu";
import { LANGUAGE_DATA } from "./../../utils/constants";

// margin: theme.typography.pxToRem(100)
const useStyles = makeStyles((theme) => ({
  amblem: {
    padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(8)}`,
    display: "flex",
  },
  logo: {
    width: `${theme.typography.pxToRem(40)}`,
    height: `${theme.typography.pxToRem(40)}`,
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary">
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
