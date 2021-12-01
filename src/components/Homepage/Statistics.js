import React from "react";
import { makeStyles, Typography, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 35,
    paddingRight: 35,
  },

  statisticsContainer: {
    display: "flex",
    justifyContent: "center",
  },

  heroText: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    marginLeft: "20px",
    maxWidth: "150px",
    // color: '#808588'
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.root}>
        <Container maxWidth="lg">
          <Grid container spacing={10} className={classes.statisticsContainer}>
            <Grid item xs={4}>
              <div style={{ display: "flex" }}>
                <Typography variant="h2">120k</Typography>
                <Typography variant="body1" className={classes.heroText}>
                  Corpers believe in our service
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ display: "flex" }}>
                <Typography variant="h2">620k</Typography>
                <Typography variant="body1" className={classes.heroText}>
                  Corpers believe in our service
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div style={{ display: "flex" }}>
                <Typography variant="h2">220k</Typography>
                <Typography variant="body1" className={classes.heroText}>
                  Corpers believe in our service
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Hero;
