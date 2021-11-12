import React from 'react'
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from 'next/image'
import HeroImg from '../../assets/heroImg.png'

const useStyles = makeStyles({

heroContainer: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center'
},

heroText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: '40rem'
  },

  heroTextParagraph: {
    fontSize: 20,
    maxWidth: '35rem',
    fontWeight: 'lighter',
    marginTop: 40
  },

  button: {
      marginTop: 30,
      display: 'flex',
      justifyContent: 'g',
  }
})

const Hero = () => {
  const classes = useStyles()

  return (
    <>
    <section className={classes.heroContainer}>
        <Grid container>
            <Grid item sm={6}>
                <Typography variant="h2" className={classes.heroText}>
                Find a Perfect place to Stay
                </Typography>
                <Typography className={classes.heroTextParagraph}>
                go into the details and find the best properties for you based on original images, evaluations, and insights.
                </Typography>
                <div className={classes.button}>
                <Button variant="outlined" size='large' style={{marginRight: 20}} color="secondary">Sign In</Button>
                <Button variant="outlined" size='large' color="secondary">Sign Up</Button>
                </div>
                
            </Grid>
            <Grid item sm={6}>
                <Image src={HeroImg} alt="" width={1500} height={900} placeholder="blur"/>
            </Grid>
        </Grid>
        
    </section>
    </>
  )
}

export default Hero;