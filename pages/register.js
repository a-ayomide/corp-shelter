import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  useTheme,
  Box,
  TextField,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import Layout from "../src/layouts/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 50,
    paddingBottom: 50,
  },
  loginContainer: {
    display: "flex",
    minHeight: "60vh",
    minWidth: "50vh",
    paddingTop: 30,
    paddingBottom: 20,
    maxWidth: 800,
    // justifyContent: "center",
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
    alignItems: "center",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1.5),
    },
  },
}));

const Register = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Layout>
        <div className={classes.root}>
          <Container maxWidth="lg">
            <div className={classes.root}>
              <Card
                variant="outlined"
                elevation={0}
                className={classes.loginContainer}
              >
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 30,
                    paddingBottom: 30,
                    paddingLeft: 30,
                    paddingRight: 30,
                  }}
                  width="75%"
                  className={classes.formContainer}
                >
                  <Typography style={{ textAlign: "center", fontSize: "30px" }}>
                    Register
                  </Typography>
                  <Box>
                    <form
                      className={classes.formfields}
                      // style={{ width: "100%" }}
                    >
                      <Grid container direction="row" spacing={1}>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            style={{ width: "100%" }}
                            id="outlined-basic"
                            label="Firstname"
                            variant="outlined"
                            // margin="dense"
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            style={{ width: "100%" }}
                            id="outlined-basic"
                            label="Lastname"
                            variant="outlined"
                            // margin="dense"
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        style={{ marginTop: "-5px" }}
                      >
                        <Grid item sm={6} xs={12}>
                          <TextField
                            style={{ width: "100%", marginTop: "-5px" }}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            // margin="dense"
                          />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <TextField
                            style={{ width: "100%", marginTop: "-5px" }}
                            id="outlined-basic"
                            label="State code"
                            variant="outlined"
                            // margin="dense"
                          />
                        </Grid>
                      </Grid>

                      <Grid container direction="row" spacing={1}>
                        <Grid item xs={12}>
                          <TextField
                            style={{ width: "100%", marginTop: "-20px" }}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            // margin="dense"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            style={{ width: "100%" }}
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            // margin="dense"
                          />
                        </Grid>
                      </Grid>

                      <Grid
                        style={{ display: "flex", alignItems: "center" }}
                        container
                        direction="row"
                      >
                        <Grid item sm={6}>
                          <Typography>
                            Already have an account?
                            <span style={{ color: "#29a43a" }}>
                              {" "}
                              Login Now!
                            </span>
                          </Typography>
                        </Grid>
                        <Grid item sm={6}>
                          <Button
                            style={{
                              width: "100px",
                              backgroundColor: "#29a43a",
                              color: "white",
                              float: "right",
                            }}
                          >
                            Register
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Box>
                </Box>
              </Card>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Register;
