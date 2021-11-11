import React from 'react'
import { makeStyles, Grid, Typography } from "@material-ui/core";
// import style from '../styles/Home.module.css'

const useStyles = makeStyles({

  title: {
    fontSize: 14,
    color: 'black'
  }
})

const Hero = () => {
  const classes = useStyles()

  return (
    <>
    <Grid>
        <Grid item>
        <Typography variant="h6" className={classes.title}>
          Find a Perfect place to Stay
        </Typography>

        </Grid>
        
    </Grid>
    </>
  )
}

export default Hero;