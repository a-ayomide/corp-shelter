import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  FormHelperText,
} from "@material-ui/core";
import Layout from "../src/layouts/Layout";
import LoginImg from "../src/assets/works4.jpeg";
import Image from "next/image";

const useStyles = makeStyles({
  loginContainer: {
    minHeight: "100vh",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
  },
});
const Login = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.loginContainer}>
        <Grid container>
          <Grid item sm={6}>
            <div>
              <Image style={{ height: "100vh" }} src={LoginImg}></Image>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Corp Shelter</Typography>
            <form className={classes.formContainer}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
                <Grid item></Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Login;
