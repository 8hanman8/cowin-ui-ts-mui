import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.typography.pxToRem(20),
  },
  title: {
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(22),
    lineHeight: theme.typography.pxToRem(26),
    margin: `0 ${theme.typography.pxToRem(40)}`,
    marginTop: `${theme.typography.pxToRem(-20)}`,
  },
  note: {
    margin: `0 ${theme.typography.pxToRem(20)}`,
    marginTop: `${theme.typography.pxToRem(10)}`,
  },
  mobileField: {
    margin: `0 ${theme.typography.pxToRem(20)}`,
    marginTop: `${theme.typography.pxToRem(10)}`,
  },
  btn: {
    margin: `0 ${theme.typography.pxToRem(20)}`,
    marginTop: `${theme.typography.pxToRem(20)}`,
  },
  tnc: {
    fontSize: theme.typography.pxToRem(13),
    color: "#9f9f9f",
    fontWeight: 400,
    padding: "0 6%",
    marginTop: `${theme.typography.pxToRem(10)}`,
  },
}));

function SignInForm() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        variant="h6"
        color="primary"
        align="center"
        className={classes.title}
      >
        Register Or SignIn for Vaccination
      </Typography>
      <Typography
        variant="subtitle2"
        color="textPrimary"
        align="center"
        className={classes.note}
      >
        An OTP will be sent to your mobile number for verification
      </Typography>
      <TextField
        required
        placeholder="Enter your mobile number"
        className={classes.mobileField}
      />
      <Button variant="contained" color="primary" className={classes.btn}>
        Get OTP
      </Button>
      <Typography component="p" className={classes.tnc}>
        By Sign In/Registration, I agree to the{" "}
        <a
          target="_blank"
          href="https://www.cowin.gov.in/terms-condition"
          rel="noreferrer"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          target="_blank"
          href="https://www.cowin.gov.in/privacy-policy"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </Typography>
    </div>
  );
}

export default React.memo(SignInForm);
