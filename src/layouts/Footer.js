import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Avatar, Grid } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
  },
  footerContainer: {
    paddingTop: 60,
    paddingBottom: 60,
  },
  footerLogo: {
    fontSize: "24px",
  },
  footerText: {
    fontSize: "18px",
    marginTop: "10px",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.root}>
        <Container maxWidth="lg">
          <div className={classes.footerContainer}>
            <Grid style={{ display: "flex" }} container spacing={4}>
              <Grid
                style={{ display: "flex", flexDirection: "column" }}
                item
                xs={6}
                sm={3}
              >
                <Typography variant="h2" className={classes.footerLogo}>
                  Corp Shelter
                </Typography>
                <Typography variant="p" className={classes.footerText}>
                  Here, we're devoted to delivering digital accessibility and a
                  flawless online experience.
                </Typography>
              </Grid>
              <Grid
                style={{ display: "flex", flexDirection: "column" }}
                item
                xs={6}
                sm={3}
              >
                <Typography variant="h2" className={classes.footerLogo}>
                  Services
                </Typography>
                <Typography variant="p" className={classes.footerText}>
                  Search for Accommodation
                </Typography>
                <Typography variant="p" className={classes.footerText}>
                  Advertise a Property
                </Typography>
              </Grid>
              <Grid
                style={{ display: "flex", flexDirection: "column" }}
                item
                xs={6}
                sm={3}
              >
                <Typography variant="h2" className={classes.footerLogo}>
                  Quick Links
                </Typography>
                <Typography variant="p" className={classes.footerText}>
                  About Us
                </Typography>
                <Typography variant="p" className={classes.footerText}>
                  Advertise a Property
                </Typography>
                <Typography variant="p" className={classes.footerText}>
                  Search for Accommodation
                </Typography>
              </Grid>
              <Grid
                style={{ display: "flex", flexDirection: "column" }}
                item
                xs={6}
                sm={3}
              >
                <Typography variant="h2" className={classes.footerLogo}>
                  Contact
                </Typography>
                <Typography variant="p" className={classes.footerText}>
                  +234 805 674 3629
                </Typography>
                <Typography variant="p" className={classes.footerText}>
                  corpshelter@gmail.com
                </Typography>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <FacebookIcon style={{ marginRight: "10px" }} />
                  <TwitterIcon style={{ marginRight: "10px" }} />
                  <InstagramIcon />
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
