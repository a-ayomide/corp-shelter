import React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Fab,
  Card,
  CardContent,
} from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from "next/image";
// import HeroImg from "../../assets/heroImg.png";
import signUp from "../../assets/works1.jpeg";
import signUp1 from "../../assets/signUp.png";
import searchProperty from "../../assets/searchProperty.png";
import contactLandlord from "../../assets/contactLandlord.png";
import closeDeal from "../../assets/closeDeal.png";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  worksContainer: {
    paddingBottom: 70,
    paddingTop: 70,
    backgroundColor: "white",
  },

  cardContainer: {
    minWidth: 180,
    maxHeight: 240,
    paddingBottom: 270,
  },

  aboutTextHeader1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#022f1b",
    textAlign: "center",
  },

  aboutTextHeader2: {
    fontSize: 20,
    color: "#808588",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    paddingTop: 20,
  },

  aboutTextHeader3: {
    fontSize: 20,
    color: "#808588",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: 50,
  },

  aboutCardText1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    display: "flex",
  },

  aboutCardText2: {
    fontSize: 18,
    color: "black",
    display: "flex",
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
  },

  cardImg: {
    display: "flex",
    justifyContent: "center",
  },
  stepsContainer: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});

const HowItWorks = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.worksContainer}>
        <Container>
          <Typography variant="body1" className={classes.aboutTextHeader1}>
            How <span style={{ color: "#29a43a" }}> Easily </span> It Works
          </Typography>
          <Typography className={classes.aboutTextHeader2}>
            How does Corp Shelter work and solve the problem of
          </Typography>
          <Typography className={classes.aboutTextHeader3}>
            housing for corp members in the nation.
          </Typography>
          <div className={classes.stepsContainer}>
            <Grid container spacing={3}>
              <Grid item sm={6}>
                <Image height={500} width={420} src={signUp}></Image>
              </Grid>
              <Grid
                style={{ display: "flex", alignItems: "center" }}
                item
                sm={6}
              >
                <div>
                  <Typography variant="h4" className={"classes.aboutCardText1"}>
                    We are the best and most trusted housing provider for
                    corpers
                  </Typography>
                  <Typography
                    variant="caption"
                    component="p"
                    className={classes.aboutCardText2}
                  >
                    How easily it works in 4 steps
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Fab
                      style={{ backgroundColor: "#e6f5ee" }}
                      color="primary"
                      size="medium"
                      disabled
                    >
                      <CheckIcon
                        style={{ color: "#29a43a" }}
                        fontSize="large"
                        color=""
                      />
                    </Fab>
                    <Typography
                      style={{ marginBottom: "30px", marginLeft: "10px" }}
                      variant="caption"
                      component="p"
                      className={classes.aboutCardText2}
                    >
                      Sign Up
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Fab
                      style={{ backgroundColor: "#e6f5ee" }}
                      color="primary"
                      size="medium"
                      disabled
                    >
                      <CheckIcon
                        style={{ color: "#29a43a" }}
                        fontSize="large"
                        color=""
                      />
                    </Fab>
                    <Typography
                      style={{ marginBottom: "30px", marginLeft: "10px" }}
                      variant="caption"
                      component="p"
                      className={classes.aboutCardText2}
                    >
                      Search and Evaluate a Property
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Fab
                      style={{ backgroundColor: "#e6f5ee" }}
                      color="primary"
                      size="medium"
                      disabled
                    >
                      <CheckIcon
                        style={{ color: "#29a43a" }}
                        fontSize="large"
                        color=""
                      />
                    </Fab>
                    <Typography
                      style={{ marginBottom: "30px", marginLeft: "10px" }}
                      variant="caption"
                      component="p"
                      className={classes.aboutCardText2}
                    >
                      Contact Landlord
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Fab
                      style={{ backgroundColor: "#e6f5ee" }}
                      color="primary"
                      size="medium"
                      disabled
                    >
                      <CheckIcon
                        style={{ color: "#29a43a" }}
                        fontSize="large"
                        color=""
                      />
                    </Fab>
                    <Typography
                      style={{ marginBottom: "30px", marginLeft: "10px" }}
                      variant="caption"
                      component="p"
                      className={classes.aboutCardText2}
                    >
                      Close the deal.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HowItWorks;
