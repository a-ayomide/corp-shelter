import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from "next/image";
import HomeImg from "../../assets/homeImg.png";

const useStyles = makeStyles({
  advertiseContainer: {
    marginTop: 50,
  },

  aboutText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    maxWidth: "40rem",
  },

  aboutTextParagraph1: {
    fontSize: 40,
    fontWeight: "bold",
    maxWidth: "40rem",
    marginTop: 20,
    color: "#022f1b",
  },

  aboutTextParagraph2: {
    fontSize: 20,
    fontWeight: "normal",
    maxWidth: "38rem",
    marginTop: 20,
    color: "#808588",
  },

  button: {
    marginTop: 50,
  },
});

const Advertise = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.advertiseContainer}>
        <Container>
          <Grid container spacing={6}>
            <Grid item sm={7}>
              <Typography
                variant="body1"
                component="p"
                className={classes.aboutTextParagraph1}
              >
                Home Renting is now Made Easier
              </Typography>
              <Typography
                variant="h6"
                component="p"
                className={classes.aboutTextParagraph2}
              >
                Choose from over 1,000 self-contained units, BQs, and other
                rental properties. You'll find one that suits your style among
                the vast majority of listings.
              </Typography>
              <div className={classes.button}>
                <Button
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: "#29a43a",
                    color: "white",
                  }}
                  variant="contained"
                  size="large"
                  disableElevation
                >
                  Advertise a property
                </Button>
              </div>
            </Grid>
            <Grid item sm={5}>
              <Image
                src={HomeImg}
                alt="Corper Image "
                placeholder="blur"
              ></Image>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Advertise;
