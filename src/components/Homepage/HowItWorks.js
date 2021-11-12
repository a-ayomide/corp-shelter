import React from 'react'
import { makeStyles, Grid, Typography, Card, CardContent } from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from 'next/image'
import HeroImg from '../../assets/heroImg.png'
import signUp from '../../assets/signUp.png'
import searchProperty from '../../assets/searchProperty.png'
import contactLandlord from '../../assets/contactLandlord.png'
import closeDeal from '../../assets/closeDeal.png'


const useStyles = makeStyles({

worksContainer: {
  paddingTop: 10,
  paddingBottom: 70,
},

cardContainer: {
  minWidth: 180,
  maxHeight: 240,
  paddingBottom: 270,
},

aboutTextHeader1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
  },

  aboutTextHeader2: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,
    marginBottom: 50,

  },

  aboutCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10
  },

  cardImg: {
    display: 'flex',
    justifyContent: 'center'
  },
})

const HowItWorks = () => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.worksContainer}>
        <Typography variant="body1" className={classes.aboutTextHeader1}>
                How it Works
        </Typography>
        <Typography variant="body2" className={classes.aboutTextHeader2}>
        How Corp Shelter can help you
        </Typography>
        <Grid container spacing={2}>
            <Grid item sm={3}>
              <Card variant="outlined" className={classes.cardContainer}>
                <CardContent>
                  <Typography variant="body1" className={classes.aboutCardText}>
                    Sign Up
                  </Typography>
                  <div className={classes.cardImg}>
                    <Image src={signUp} alt="signUpImg" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card variant="outlined" className={classes.cardContainer}>
                <CardContent>
                  <Typography variant="body1" className={classes.aboutCardText}>
                    Search & Evaluate property 
                  </Typography>
                  <div className={classes.cardImg}>
                    <Image src={searchProperty} alt="searchProperty" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card variant="outlined" className={classes.cardContainer}>
                <CardContent>
                  <Typography variant="body1" className={classes.aboutCardText}>
                    Contact your Landlord 
                  </Typography>
                  <div className={classes.cardImg}>
                    <Image src={contactLandlord} alt="contactLandlord" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card variant="outlined" className={classes.cardContainer}>
                <CardContent>
                  <Typography variant="body1" className={classes.aboutCardText}>
                    Close the deal
                  </Typography>
                  <div className={classes.cardImg}>
                    <Image src={closeDeal} alt="closeDeal" />
                  </div>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
    </section >
    </>
  )
}

export default HowItWorks;