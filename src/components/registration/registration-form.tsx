import React from "react";
import { makeStyles, Paper } from "@material-ui/core";
import HealthyHeart from "./../../assets/icons/healthy-heart.svg";
import SignInForm from "./sign-in-form";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.typography.pxToRem(400),
  },
  bannerContainerImg: {
    width: theme.typography.pxToRem(80),
    textAlign: "center",
  },
  bannerContainer: {
    width: theme.typography.pxToRem(120),
    height: theme.typography.pxToRem(120),
    borderRadius: "50%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(
      3
    )} 0 rgb(0 0 0 / 19%)`,
    margin: "0 auto",
    position: "relative",
    top: theme.typography.pxToRem(-45),
  },
}));

interface RegistrationFormProps {}

function RegistrationForm(props: RegistrationFormProps) {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.bannerContainer}>
        <img
          src={HealthyHeart}
          alt="logo"
          className={classes.bannerContainerImg}
        ></img>
      </div>
      <div>
        <SignInForm />
      </div>
    </Paper>
  );
}
export default React.memo(RegistrationForm);
