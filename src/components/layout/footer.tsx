import React from "react";
import { Typography, makeStyles, Grid, AppBar } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.typography.pxToRem(10),
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="static" className={classes.root} elevation={0}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="caption">
            Privacy Policy | Terms of Service
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">
            Copyright © 2021 COWIN. All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
