import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  useTheme,
  Box,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import Layout from "../src/layouts/Layout";
import LoginImg from "../public/reviewImg.png";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
  },
  formContainer: {
    display: "flex",
    // justifyContent: "center",
    // backgroundColor: "#808588",
    alignItems: "center",
    // justifyContent: "center",
    // border: "30px",
    // borderColor: "#808588",
    marginTop: "auto",
    marginBottom: "auto",
  },
  formfields: {
    [theme.breakpoints.up("sm")]: {
      width: "600px",
    },
    width: "300px",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1.5),
    },
  },
}));

const Login = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Container maxWidth="lg">
          <Card variant="outlined" className={classes.loginContainer}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              width="75%"
              className={classes.formContainer}
            >
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  marginBottom: 10,
                }}
              >
                Sign In
              </Typography>
              <Box>
                <form
                  className={classes.formfields}
                  // style={{ width: "100%" }}
                >
                  <TextField
                    id="outlined-basic"
                    label="Email or Username"
                    variant="outlined"
                    // margin="dense"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    // margin="dense"
                  />
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>
                      Don't have an account?{" "}
                      <span style={{ color: "#29a43a" }}>Register Now!</span>
                    </Typography>
                    <Button
                      style={{
                        width: "100px",
                        backgroundColor: "#29a43a",
                        color: "white",
                      }}
                    >
                      Sign In
                    </Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Card>
        </Container>
      </Layout>
    </>
  );
};

export default Login;
