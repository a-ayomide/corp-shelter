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
import DashboardContent from "../../src/components/Settings/DashboardContent";

const useStyles = makeStyles((theme) => ({
  profileContainer: {
    minHeight: "90vh",
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
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <Sidebar />
              </Grid>
              <Grid item xs={12} sm={9}>
                <DashboardContent />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Profile;
