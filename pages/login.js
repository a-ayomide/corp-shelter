import React from "react";
import {
  makeStyles,
  Typography,
  TextField,
  useTheme,
  Grid,
  FormHelperText,
  Container,
} from "@material-ui/core";
import Layout from "../src/layouts/Layout";
// import LoginImg from "../src/assets/works4.jpeg";
import LoginImg from "../public/reviewImg.png";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  formContainer: {
    // [theme.breakpoints.up("sm")]: {
    //   //   backgroundColor: "black",
    // },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "90%",
    backgroundColor: "black",
    // maxHeight: "70%",
    minHeight: "100vh",
    marginRight: "auto",
    marginLeft: "auto",
    // backgroundColor: "#1f1f1f",
  },
  form: {
    "& > *": {
      width: "45ch",
    },
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Login = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <div className={classes.loginContainer}>
          <h1>Corp Shelter</h1>
          <Grid direction="column" container spacing={6}>
            <Grid item sm={6} xs={12}>
              <div style={{}} className={classes.formContainer}>
                <h2>Login</h2>
                <form action="" className={classes.form}>
                  <TextField
                    id="outlined-basic"
                    label="Email Address"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                  />
                </form>
              </div>
            </Grid>
            <Grid item sm={6}>
              {/* <Image src={LoginImg}></Image> */}
              Tuhgbvgfydcvebiufbvytecvbuj
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Login;
