import React from "react";
import { useTheme, Container, Grid, Card, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../src/layouts/Layout";
import Sidebar from "../../src/components/Settings/Sidebar";
import PersonalDetails from "../../src/components/Settings/PersonalDetails";
import AddProperty from "../../src/components/Settings/AddProperty";

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

const addProperty = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
                <AddProperty />
              </Grid>
            </Grid>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default addProperty;
