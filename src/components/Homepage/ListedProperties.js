import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  CardContent,
  Paper,
} from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from "next/image";
import propImg from "../../assets/propImage.png";
import Link from "next/link";

const useStyles = makeStyles({
  propContainer: {
    paddingTop: 50,
    paddingBottom: 70,
    backgroundColor: "white",
  },

  propHeaderText: {
    fontSize: 30,
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#022f1b",
  },

  buttonsContainer: {
    marginTop: 40,
  },

  root: {
    maxWidth: 250,
    borderRadius: 5,
  },

  carouselContainer: {
    marginTop: 40,
    display: "flex",
    gap: 20,
  },
});

const ListedProperties = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.propContainer}>
        <Container maxWidth="lg">
          <Typography variant="h2" className={classes.propHeaderText}>
            Listed Apartments
          </Typography>
          <div className={classes.buttonsContainer}>
            <Grid container spacing={6}>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  component="button"
                  disableElevation
                  style={{
                    paddingRight: 30,
                    paddingLeft: 30,
                    backgroundColor: "#29a43a",
                    color: "white",
                  }}
                >
                  Free Apartments
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  component="button"
                  disableElevation
                  style={{
                    paddingRight: 30,
                    paddingLeft: 30,
                    backgroundColor: "#29a43a",
                    color: "white",
                  }}
                >
                  Free Apartments
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  component="button"
                  disableElevation
                  style={{
                    paddingRight: 30,
                    paddingLeft: 30,
                    backgroundColor: "#29a43a",
                    color: "white",
                  }}
                >
                  Free Apartments
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  component="button"
                  style={{
                    paddingRight: 30,
                    paddingLeft: 30,
                    backgroundColor: "#29a43a",
                    color: "white",
                  }}
                >
                  Free Apartments
                </Button>
              </Grid>
              <Grid
                item
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#29a43a",
                }}
              >
                <Link href="/productlist" passHref>
                  <Button>
                    <Typography style={{ color: "#29a43a" }}>
                      {" "}
                      Explore all &#8594;
                    </Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid className={classes.carouselContainer} spacing={5}>
              <Grid item>
                <Card variant="outlined" elevation={0} className={classes.root}>
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
              <Grid item>
                <Card variant="outlined" elevation={0} className={classes.root}>
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
              <Grid item>
                <Card variant="outlined" elevation={0} className={classes.root}>
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
              <Grid item>
                <Card variant="outlined" elevation={0} className={classes.root}>
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
              <Grid item>
                <Card variant="outlined" elevation={0} className={classes.root}>
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
      </section>
    </>
  );
};

export default ListedProperties;
