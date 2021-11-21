import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import Layout from "../src/layouts/Layout";
import LocationFilter from "../src/components/Product List/LocationFilter";
const useStyles = makeStyles({});
function ProductList(props) {
  const classes = useStyles();
  return (
    <>
      <Layout />
      <Container>
        <Grid style={{ display: "flex" }}>
          <Grid item sm={9}>
            <h2 style={{ fontSize: 30, maxWidth: 800 }}>
              Search for Available accommodations at any location of your choice
            </h2>
          </Grid>
          <Grid item style={{ marginTop: 30 }} sm={3}>
            <Button
              variant="outlined"
              size="large"
              style={{}}
              color="secondary"
            >
              Advertise a property
            </Button>
          </Grid>
        </Grid>
        <div>
          <LocationFilter />
        </div>
      </Container>
    </>
  );
}

export default ProductList;
