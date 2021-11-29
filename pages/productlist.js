import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Box,
} from "@material-ui/core";
import Layout from "../src/layouts/Layout";
import ProductFilter from "../src/components/ProductList/ProductFilter";
import Image from "next/image";
import propImg from "../src/assets/propImage.png";

const useStyles = makeStyles(() => ({
  formControl: {
    maxWidth: 220,
  },
  productListContainer: {
    minHeight: "100vh",
    paddingTop: 60,
    paddingBottom: 200,
  },
}));

function ProductList() {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <div className={classes.productListContainer}>
          <Container maxWidth="lg">
            <h2 style={{ fontSize: 25 }}>
              Search for Available accommodations at any location of your choice
            </h2>
            <Box
              style={
                {
                  // display: "flex",
                  // justifyContent: "space-between",
                  // alignItems: "center",
                }
              }
            >
              <ProductFilter />
            </Box>

            <div>
              <Grid container className={classes.carouselContainer} spacing={5}>
                <Grid item sm={3}>
                  <Card elevation={0} className={classes.root}>
                    <CardActionArea>
                      <Image
                        className={classes.cardImg}
                        src={propImg}
                        alt="property image"
                      ></Image>
                      <CardContent>
                        <Typography variant="body2" color="" component="p">
                          Available
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          Self Contain
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          #300, 000 per annnum
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item sm={3}>
                  <Card elevation={0} className={classes.root}>
                    <CardActionArea>
                      <Image
                        className={classes.cardImg}
                        src={propImg}
                        alt="property image"
                      ></Image>
                      <CardContent>
                        <Typography variant="body2" color="" component="p">
                          Available at Utako
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          Self Contain
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          #300, 000 per annnum
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item sm={3}>
                  <Card elevation={0} className={classes.root}>
                    <CardActionArea>
                      <Image
                        className={classes.cardImg}
                        src={propImg}
                        alt="property image"
                      ></Image>
                      <CardContent>
                        <Typography variant="body2" color="" component="p">
                          Available at Utako
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          Self Contain
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          #300, 000 per annnum
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item sm={3}>
                  <Card elevation={0} className={classes.root}>
                    <CardActionArea>
                      <Image
                        className={classes.cardImg}
                        src={propImg}
                        alt="property image"
                      ></Image>
                      <CardContent>
                        <Typography variant="body2" color="" component="p">
                          Available at Utako
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          Self Contain
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          #300, 000 per annnum
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item sm={3}>
                  <Card elevation={0} className={classes.root}>
                    <CardActionArea>
                      <Image
                        className={classes.cardImg}
                        src={propImg}
                        alt="property image"
                      ></Image>
                      <CardContent>
                        <Typography variant="body2" component="p">
                          Available at Utako
                        </Typography>
                        <Typography variant="body2" component="p">
                          Self Contain
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          #300, 000 per annnum
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item sm={3}>
                  <Card elevation={0} className={classes.root}>
                    <CardActionArea>
                      <Image
                        className={classes.cardImg}
                        src={propImg}
                        alt="property image"
                      ></Image>
                      <CardContent>
                        <Typography variant="body2" component="p">
                          Available at Utako
                        </Typography>
                        <Typography variant="body2" component="p">
                          Self Contain
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          #300, 000 per annnum
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item sm={3}>
                  <Card elevation={0} className={classes.root}>
                    <CardActionArea>
                      <Image
                        className={classes.cardImg}
                        src={propImg}
                        alt="property image"
                      ></Image>
                      <CardContent>
                        <Typography variant="body2" component="p">
                          Available at Utako
                        </Typography>
                        <Typography variant="body2" component="p">
                          Self Contain
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          #300, 000 per annnum
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item sm={3}>
                  <Card elevation={0} className={classes.root}>
                    <CardActionArea>
                      <Image
                        className={classes.cardImg}
                        src={propImg}
                        alt="property image"
                      ></Image>
                      <CardContent>
                        <Typography variant="body2" component="p">
                          Available at Utako
                        </Typography>
                        <Typography variant="body2" component="p">
                          Self Contain
                        </Typography>
                        <Typography variant="body2" color="" component="p">
                          #300, 000 per annnum
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default ProductList;
