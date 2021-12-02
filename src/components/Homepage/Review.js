import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Container,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ReviewImg from "../../assets/reviewImg.png";
// import style from '../styles/Home.module.css'

const useStyles = makeStyles((theme) => ({
  reviewsContainer: {
    marginTop: 100,
    paddingBottom: 70,
  },

  cardContainer: {
    minWidth: 400,
    maxHeight: 300,
    paddingBottom: 270,
    backgroundColor: "rgba(15, 202, 152, 0.02)",
  },

  reviewTextHeader1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#29a43a",
    display: "flex",
    justifyContent: "center",
  },

  reviewTextHeader2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    display: "flex",
    justifyContent: "center",
    paddingTop: 10,
    marginBottom: 50,
  },

  reviewText: {
    fontSize: 20,
    fontStyle: "italic",
    marginTop: 20,
  },

  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },

  reviewNameText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  reviewPositionText: {
    fontSize: 20,
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    marginTop: 30,
  },
}));

const Reviews = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  return (
    <>
      <section className={classes.reviewsContainer}>
        <Container>
          <Typography variant="body1" className={classes.reviewTextHeader1}>
            CLIENT REVIEW
          </Typography>
          <Typography variant="body2" className={classes.reviewTextHeader2}>
            What our Clients and agent say about us
          </Typography>
          <Grid container spacing={5}>
            <Grid item sm={4}>
              <Card
                variant="elevation"
                elevation={0}
                className={classes.cardContainer}
              >
                <CardContent>
                  <Typography variant="body2" className={classes.reviewText}>
                    "Very understanding house owners"
                  </Typography>
                  <div className={classes.profileContainer}>
                    <Avatar
                      alt="Remy Sharp"
                      src="../../assets/reviewImg.png"
                      className={classes.large}
                    />
                    <div>
                      <Typography
                        variant="body2"
                        className={classes.reviewNameText}
                      >
                        John Smith
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.reviewPositionText}
                      >
                        NYSC Corp Member
                      </Typography>
                    </div>
                  </div>
                  <Box
                    style={{ float: "left", marginTop: 15 }}
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                  >
                    <Rating name="read-only" value={5} readOnly />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card
                variant="elevation"
                elevation={0}
                className={classes.cardContainer}
              >
                <CardContent>
                  <Typography variant="body2" className={classes.reviewText}>
                    "Very understanding house owners"
                  </Typography>
                  <div className={classes.profileContainer}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className={classes.large}
                    />
                    <div>
                      <Typography
                        variant="body2"
                        className={classes.reviewNameText}
                      >
                        John Smith
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.reviewPositionText}
                      >
                        NYSC Corp Member
                      </Typography>
                    </div>
                  </div>
                  <Box
                    style={{ float: "left", marginTop: 15 }}
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                  >
                    <Rating name="read-only" value={5} readOnly />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={4}>
              <Card
                variant="elevation"
                elevation={0}
                className={classes.cardContainer}
              >
                <CardContent>
                  <Typography variant="body2" className={classes.reviewText}>
                    "Very understanding house owners"
                  </Typography>
                  <div className={classes.profileContainer}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className={classes.large}
                    />
                    <div>
                      <Typography
                        variant="body2"
                        className={classes.reviewNameText}
                      >
                        John Smith
                      </Typography>
                      <Typography
                        variant="body2"
                        className={classes.reviewPositionText}
                      >
                        NYSC Corp Member
                      </Typography>
                    </div>
                  </div>
                  <Box
                    style={{ float: "left", marginTop: 15 }}
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                  >
                    <Rating name="read-only" value={5} readOnly />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Reviews;
