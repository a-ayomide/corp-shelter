import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  FormControl,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Grid,
} from "@material-ui/core";
import Layout from "../src/layouts/Layout";
import ProductFilter from "../src/components/ProductList/ProductFilter";

const useStyles = makeStyles(() => ({
  formControl: {
    maxWidth: 220,
  },
  productListContainer: {
    height: "100vh",
  },
}));

function ProductList() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.productListContainer}>
        <Layout>
          <Container maxWidth="lg">
            {/* <h2 style={{ fontSize: 25 }}>
            Search for Available accommodations at any location of your choice
          </h2>
          {/* <ProductFilter /> */}

            <ProductFilter />
          </Container>
        </Layout>
      </div>
    </>
  );
}

export default ProductList;
