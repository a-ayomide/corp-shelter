import React from "react";
import {
  makeStyles,
  Container,
  CardContent,
  Typography,
  Grid,
  Card,
  NativeSelect,
  Button,
  FormControl,
} from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../assets/houseImg.png";
import * as url from "url";
import "../../../styles/Hero.module.css";
import { lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles({
  heroContainer: {
    height: "88vh",
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
  },
  imgContainer: {
    marginTop: "-150px",
  },
  heroTextContainer: {
    paddingLeft: "120px",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
  },

  heroText: {
    fontSize: 45,
    fontWeight: "bold",
    maxWidth: "30rem",
    color: "#1F1D36",
  },
  heroTextParagraph: {
    fontSize: 20,
    maxWidth: "25rem",
    fontWeight: "lighter",
  },
  button: {
    backgroundColor: "#29a43a",
    color: "white",
    display: "flex",
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 25,
  },
  button2: {
    borderColor: "#29a43a",
    color: "#29a43a",
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.heroContainer}>
        <Container disableGutters maxWidth="xl">
          <Grid>
            <Grid item md={6}>
              <div className={classes.heroTextContainer}>
                <Typography variant="h2" className={classes.heroText}>
                  Find a <span style={{ color: "#29a43a" }}>Perfect</span> place
                  to Stay
                </Typography>
                <Typography className={classes.heroTextParagraph}>
                  You can easily find the best affordable properties for you
                  based on original images, evaluations, and insights.
                </Typography>
                <div style={{ display: "flex", marginTop: 20 }}>
                  <Link href="/register" passHref>
                    <Button
                      variant="contained"
                      size="large"
                      disableElevation
                      className={classes.button}
                    >
                      {" "}
                      Sign Up{" "}
                    </Button>
                  </Link>
                  <Link href="/login" passHref>
                    <Button
                      variant="outlined"
                      size="large"
                      disableElevation
                      className={classes.button2}
                    >
                      {" "}
                      Sign In{" "}
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className={classes.imgContainer}>
                {/* <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /> */}
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Hero;
