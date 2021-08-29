import { AppBar, Grid, Box, Hidden, Menu, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Covid19logo from "../../assets/icons/covid19logo.jpg";
import DropDownMenu from "../common/dropdown-menu/drop-down-menu";
import {
  VACCINATION_SERVICES_DROPDOWN_DATA,
  PLATFORMS_DROPDOWN_DATA,
  RESOURCES_DROPDOWN_DATA,
  SUPPORT_DROPDOWN_DATA,
} from "./../registration/registration-utils";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
  },
  logo: {
    width: `${theme.typography.pxToRem(158)}`,
    height: `${theme.typography.pxToRem(50)}`,
    margin: `${theme.typography.pxToRem(4)}`,
  },
  dropDownContainer: {
    height: "100%",
  },
  dropDown: {
    color: theme.palette.primary.main,
  },
}));

function HeaderBand() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | SVGSVGElement>(null);
  const handleClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" className={classes.root} elevation={1}>
      <Grid container>
        <Grid item md={2} xs={false}></Grid>
        <Grid item md={3} xs={8} container justifyContent="center">
          <img src={Covid19logo} alt="logo" className={classes.logo} />
        </Grid>
        <Hidden only={["xs"]}>
          <Grid item md={5} xs={false}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              className={classes.dropDownContainer}
            >
              <Box className={classes.dropDown}>
                <DropDownMenu
                  title={VACCINATION_SERVICES_DROPDOWN_DATA.title}
                  menuOptions={VACCINATION_SERVICES_DROPDOWN_DATA.menuOptions}
                />
              </Box>
              <Box className={classes.dropDown}>
                <DropDownMenu
                  title={PLATFORMS_DROPDOWN_DATA.title}
                  menuOptions={PLATFORMS_DROPDOWN_DATA.menuOptions}
                ></DropDownMenu>
              </Box>
              <Box className={classes.dropDown} alignSelf="center">
                <DropDownMenu
                  title={RESOURCES_DROPDOWN_DATA.title}
                  menuOptions={RESOURCES_DROPDOWN_DATA.menuOptions}
                />
              </Box>
              <Box className={classes.dropDown}>
                <DropDownMenu
                  title={SUPPORT_DROPDOWN_DATA.title}
                  menuOptions={SUPPORT_DROPDOWN_DATA.menuOptions}
                />
              </Box>
            </Box>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid
            item
            xs={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <MenuIcon color="primary" fontSize="large" onClick={handleClick} />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Vaccination Services</MenuItem>
              <MenuItem>Platforms</MenuItem>
              <MenuItem>Resources</MenuItem>
              <MenuItem>Support</MenuItem>
            </Menu>
          </Grid>
        </Hidden>
        <Grid item md={2} xs={false}></Grid>
      </Grid>
    </AppBar>
  );
}

export default HeaderBand;
