import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Accordion,
  CardContent,
  AccordionSummary,
  AccordionDetails,
  Card,
  TextField,
  Box,
  CardActions,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Layout from "../src/layouts/Layout";
import Image from "next/image";
import propImg from "../src/assets/propImage.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import propImg from "../public/reviewImg.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles(() => ({
  productDetailsContainer: {
    minHeight: "100vh",
    paddingTop: 20,
    paddingBottom: 200,
    flexGrow: 1,
  },

  root: {
    // minWidth: 250,
    // maxWidth: 205,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
}));

function ProductDetails() {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <div className={classes.productDetailsContainer}>
          <Container maxWidth="lg">
            <Grid
              container
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item sm={9}>
                <Typography variant="h4">Property Name</Typography>
                <Typography variant="h6">Property Location</Typography>
              </Grid>
              <Grid item sm={3}>
                <Typography style={{ color: "#29a43a" }} variant="h4">
                  #249,155.00
                </Typography>
              </Grid>
            </Grid>
            {/* <Carousel
            // showArrows={true}
            >
              <div>
                <img src={propImg} />
              </div>
            </Carousel> */}
            Carousel for Images
            <Grid container spacing={7}>
              <Grid item sm={9}>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Property Description
                      </Typography>
                      <CardActions>
                        <Button size="small">Request Viewing</Button>
                      </CardActions>
                    </div>

                    <Typography className={classes.pos} color="textSecondary">
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                      adjective adjective adjective adjective adjective
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  style={{ marginTop: 20 }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <div>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        Property Details
                      </Typography>
                    </div>

                    <Grid container spacing={3}>
                      <Grid item sm={3}>
                        Type:
                      </Grid>
                      <Grid item sm={3}>
                        Parking:
                      </Grid>
                      <Grid item sm={3}>
                        Room Size:
                      </Grid>
                      <Grid item sm={3}>
                        Bedrooms:
                      </Grid>
                      <Grid item sm={3}>
                        Kitchen Features:
                      </Grid>
                      <Grid item sm={3}>
                        Toilet:
                      </Grid>
                      <Grid item sm={3}>
                        Parking Spot:
                      </Grid>
                      <Grid item sm={3}>
                        Cooling System:
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>

                <Accordion style={{ marginTop: 30 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Reviews
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div style={{ display: "flex" }}>
                      <Typography variant="h5">Elizabeth Abby</Typography>
                      <Box component="fieldset" borderColor="transparent">
                        <Rating name="read-only" readOnly />
                      </Box>
                    </div>

                    <Typography
                      style={{
                        fontSize: "16px",
                        marginTop: 5,
                        marginBottom: 5,
                        color: "#29a43a",
                      }}
                      variant="h6"
                    >
                      12th of November
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Suspendisse malesuada lacus
                      ex, sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item sm={3}>
                <Card
                  style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "center",
                    paddingTop: 15,
                    paddingBottom: 15,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography
                      className={classes.title}
                      //   color="textSecondary"
                      variant="h3"
                      gutterBottom
                    >
                      Suggested Properties
                    </Typography>
                    <Image alt="property" src={propImg}></Image>
                  </CardContent>
                </Card>
                <Card
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    paddingTop: 15,
                    marginTop: 30,
                    paddingBottom: 15,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography
                      className={classes.title}
                      //   color="textSecondary"
                      variant="h3"
                      gutterBottom
                    >
                      Abby Corper
                    </Typography>
                    <Image alt="agent" src={propImg}></Image>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <CardActions>
                        <Button
                          style={{
                            backgroundColor: "#29a43a",
                            color: "white",
                            marginTop: 10,
                          }}
                          size="large"
                        >
                          Contact Agent
                        </Button>
                      </CardActions>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Accordion
              style={{ marginTop: 30, paddingLeft: 40, paddingRight: 40 }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Write a review
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{ display: "flex", flexDirection: "column" }}
              >
                {/* <Box component="fieldset" borderColor="transparent"> */}
                <Rating name="read-only" readOnly />
                {/* </Box> */}
                <Box style={{ marginTop: 20, marginBottom: 40 }}>
                  <Grid container spacing={3}>
                    <Grid item sm={6}>
                      <TextField
                        style={{ width: "100%" }}
                        id="outlined-basic"
                        placeholder="Full Name"
                        variant="outlined"
                        // margin="dense"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <TextField
                        style={{ width: "100%" }}
                        id="outlined-basic"
                        placeholder="Email Address"
                        variant="outlined"
                        // margin="dense"
                      />
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: 30 }}>
                    <Grid item sm={12}>
                      <TextField
                        style={{ width: "100%" }}
                        id="outlined-basic"
                        placeholder="Write a Message"
                        variant="outlined"
                        multiline
                        rows={10}
                        // margin="dense"
                      />
                    </Grid>
                    <Grid item sm={12}>
                      <Button
                        style={{
                          float: "right",
                          backgroundColor: "#29a43a",
                          color: "white",
                          marginTop: 30,
                        }}
                        size="large"
                      >
                        Contact Agent
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default ProductDetails;
