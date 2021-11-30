import React from "react";
import {
  makeStyles,
  useTheme,
  Container,
  Grid,
  Card,
  Paper,
} from "@material-ui/core";
import Layout from "../../src/layouts/Layout";
import Sidebar from "../../src/components/Settings/Sidebar";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    minHeight: "80vh",
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
      <Layout>
        <Container maxWidth="lg">
          <div className={classes.profileContainer}>
            <Grid container>
              <Grid item>
                <Sidebar />
              </Grid>
              <Grid item></Grid>
            </Grid>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Profile;
