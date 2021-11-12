import React from 'react'
import { makeStyles, Grid, Typography, Button, Card } from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from 'next/image'
import HeroImg from '../../assets/heroImg.png'

const useStyles = makeStyles({

    propContainer: {
        paddingTop: 10,
        paddingBottom: 70,
    },

    propHeaderText: {
        fontSize: 30,
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: 'black',
  },

    buttonsContainer: {
        marginTop: 40,
    }

})

const ListedProperties = () => {
  const classes = useStyles()

  return (
    <>
    <section className={classes.propContainer}>
        <Typography variant="h2" className={classes.propHeaderText}>
            Listed Apartments
        </Typography>
        <div className={classes.buttonsContainer}>
            <Grid container spacing={3}>
                <Grid item sm={2.5}>
                    <Button variant="contained" size='large' component="button" style={{paddingRight: 50, paddingLeft: 50 }} color="secondary">Free Apartments</Button>
                </Grid>
                <Grid item sm={2.5}>
                    <Button variant="contained" size='large' component="button" style={{paddingRight: 50, paddingLeft: 50 }} color="secondary">Free Apartments</Button>
                </Grid>
                <Grid item sm={2.5}>
                    <Button variant="contained" size='large' component="button" style={{paddingRight: 50, paddingLeft: 50 }} color="secondary">Free Apartments</Button>
                </Grid>
                <Grid item sm={2.5}>
                    <Button variant="contained" size='large' component="button" style={{paddingRight: 50, paddingLeft: 50 }} color="secondary">Free Apartments</Button>
                </Grid>
                <Grid item sm={2.5} style={{display: 'flex',alignItems: 'center'}}>
                    <Typography> Explore all &#8594;</Typography>
                </Grid>
            </Grid>
        </div>
        {/* <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card> */}

        {/* <Grid container>
            <Grid item sm={6}>
                <Typography variant="h2" className={classes.heroText}>
                Find a Perfect place to Stay
                </Typography>
                <Typography className={classes.heroTextParagraph}>
                go into the details and find the best properties for you based on original images, evaluations, and insights.
                </Typography>
                <div className={classes.button}>
                <Button variant="outlined" style={{marginRight: 20}} color="secondary">Sign In</Button>
                <Button variant="outlined" color="secondary">Sign Up</Button>
                </div>
                
            </Grid>
            <Grid item sm={6}>
                <Image src={HeroImg} alt="" width={1500} height={900} placeholder="blur"/>
            </Grid>
        </Grid> */}
        
    </section>
    </>
  )
}

export default ListedProperties;