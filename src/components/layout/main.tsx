import { makeStyles } from "@material-ui/core";
import React from "react";
import RegistrationForm from "../registration/registration-form";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    margin: `${theme.typography.pxToRem(75)} 0`,
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RegistrationForm />
    </div>
  );
};
export default Main;
