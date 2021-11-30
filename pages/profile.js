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
  loginContainer: {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 30,
    marginBottom: 50,
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

const Profile = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Layout>
          <Container maxWidth="lg">
            <Card
              variant="outlined"
              elevation={0}
              className={classes.loginContainer}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
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
                          <span style={{ color: "#29a43a" }}> Login Now!</span>
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
                    {/* <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  ></Box> */}
                  </form>
                </Box>
              </Box>
            </Card>
          </Container>
        </Layout>
      </div>
    </>
  );
};

export default Profile;
