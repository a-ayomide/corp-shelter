import React from 'react'
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from 'next/image'
import AboutImg from '../../assets/aboutImg.png'

const useStyles = makeStyles({

aboutContainer: {
    marginTop: 50
},

aboutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#89B5AF',
    maxWidth: '40rem'
  },

  aboutTextParagraph1: {
    fontSize: 40,
    fontWeight: 'bold',
    maxWidth: '40rem',
    marginTop: 20,
    color: '#022f1b'
  },

  aboutTextParagraph2: {
    fontSize: 20,
    fontWeight: 'normal',
    maxWidth: '38rem',
    color: '#808588',
    marginTop: 20
  },

  button: {
      marginTop: 30,
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <>
    <section className={classes.aboutContainer}>
        <Grid container spacing={8}>
            <Grid item sm={5}>
                <Image src={AboutImg} alt='Corper Image ' placeholder="blur"></Image>
                
                {/* <Typography className={classes.heroTextParagraph}>
                go into the details and find the best properties for you based on original images, evaluations, and insights.
                </Typography>
                <div className={classes.button}>
                <Button variant="outlined" size='large' style={{marginRight: 20}} color="secondary">Sign In</Button>
                <Button variant="outlined" size='large' color="secondary">Sign Up</Button>
                </div> */}
                
            </Grid>
            <Grid item sm={7}>
                <Typography variant="h2" className={classes.aboutText}>
                    ABOUT US
                </Typography>
                <Typography variant="body1" component="p" className={classes.aboutTextParagraph1}>
                    Helping Corp Members to Find Their Home.
                </Typography>
                <Typography variant="body1" component="p" className={classes.aboutTextParagraph2}>
                    On the first corps member rental network for corps members in Abuja, 
                    we're devoted to delivering digital accessibility and a flawless online experience.
                </Typography>
                <div className={classes.button}>
                    <Button style={{backgroundColor: '#89B5AF', color: 'white'}} variant="contained" size='large'>Know more</Button>
                </div>
            </Grid>
        </Grid>
        
    </section>
    </>
  )
}

export default About;