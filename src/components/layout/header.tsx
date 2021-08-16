import React from "react";
import { AppBar, Grid, Typography, makeStyles } from "@material-ui/core";
import DropDownMenu from "../common/dropdown-menu/drop-down-menu";
import { LANGUAGE_DATA } from "./../../utils/constants";
import EmblemGov from "./../../assets/icons/emblem-gov.svg";

// margin: theme.typography.pxToRem(100)
const useStyles = makeStyles((theme) => ({
  amblem: {
    padding: `${theme.typography.pxToRem(8)} ${theme.typography.pxToRem(8)}`,
    display: "flex",
  },
  logo: {
    width: `${theme.typography.pxToRem(23)}`,
    height: `${theme.typography.pxToRem(37)}`,
  },
  lanBar: {
    paddingRight: `${theme.typography.pxToRem(15)}`,
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="fixed" elevation={0}>
      <Grid container>
        <Grid item md={2} xs={false}></Grid>
        <Grid
          item
          md={4}
          xs={8}
          className={classes.amblem}
          justifyContent="center"
          alignItems="center"
        >
          <img src={EmblemGov} className={classes.logo} alt="emblem" />
          <Typography style={{ marginLeft: "0.6rem" }} variant="subtitle2">
            Ministry of Health and Family Welfare
          </Typography>
        </Grid>
        <Grid
          item
          md={4}
          xs={4}
          justifyContent="flex-end"
          alignItems="center"
          container
          className={classes.lanBar}
        >
          <DropDownMenu
            title={LANGUAGE_DATA.title}
            menuOptions={LANGUAGE_DATA.menuOptions}
          ></DropDownMenu>
        </Grid>
        <Grid item md={2} xs={false}></Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
