import React from 'react'
import { makeStyles,Container, CardContent, Typography,Grid, Card, NativeSelect, Button, FormControl} from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from 'next/image'
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import HeroImg from '../../assets/heroImg2.png'
import heroImg from '../../../public/hero-image.png'
import * as url from "url";
import '../../../styles/Hero.module.css'

const useStyles = makeStyles({

heroContainer: {
    // display: 'flex',
    alignItems: 'center',
    // height: "100vh",
    position: "relative",

},
//
heroText: {
    fontSize: 45,
    fontWeight: 'bold',
    maxWidth: '30rem',
    position: "absolute",
    left: "5%",
    top: "30%",
    color: "#1F1D36"
  },

  heroTextParagraph: {
    fontSize: 20,
    maxWidth: '25rem',
    fontWeight: 'lighter',
    position: "absolute",
    left: "5%",
    top: "50%",
  },

  searchParams: {
    backgroundColor: "white",
    // display: 'flex',
    marginRight: "auto"
  },

  heroImg: {
    display: "flex",
    alignItems: "center",
  },

  cardContainer : {
    display: 'flex',
    justifyContent: 'center',
  },

  form: {
  minWidth: 190,
    marginTop: -10,
    marginLeft: 0
  },

  card: {
  paddingLeft: 30,
    paddingRight: 30,
  },

  button: {
      position: 'absolute',
      top: "68%",
      backgroundColor: "#89B5AF",
      color: "white",
      left: "5%",
      display: 'flex',
      paddingTop: 10,
      paddingBottom: 10,
  },
  button2: {
    position: 'absolute',
    top: "68%",
    borderColor: "#89B5AF",
    color: "#89B5AF",
    left: "16%",
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,
  }
})

const Hero = () => {
  const classes = useStyles()

  return (
    <>
    <section className={classes.heroContainer}>
      <div style={{}}>
        <div className="heroImg" style={{borderRadius: "50px"}}>
          <Container maxWidth="2xl"><Image width={1400} height={750} src={HeroImg} objectFit="cover" /></Container>

          <Grid>
            <Grid item sm={6} xs={12}>
              <Typography variant="h2"  className={classes.heroText}>
                Find a <span style={{color: "#89B5AF"}}>Perfect</span> place to Stay
              </Typography>
              <Typography className={classes.heroTextParagraph}>
                You can easily find the best affordable properties for you based on original images, evaluations, and insights.
              </Typography>
              <Button variant="contained" size="large" disableElevation className={classes.button}> Sign Up </Button>
              <Button variant="outlined" size="large" disableElevation className={classes.button2}> Sign In </Button>
            </Grid>
            <Grid item sm={6} xs={12}></Grid>
          </Grid>

        </div>
      </div>
    </section>
    </>
  )
}

export default Hero;
