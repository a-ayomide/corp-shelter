import React from 'react'
import { makeStyles, Grid, Typography, Button, Card, CardActionArea, CardMedia, CardContent } from "@material-ui/core";
// import style from '../styles/Home.module.css'
import Image from 'next/image'
import propImg from '../../assets/propImage.png'

const useStyles = makeStyles({

    propContainer: {
        marginTop: 40,
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
    },

    root: {
        maxWidth: 250,
        borderRadius: 5
    },
    
    carouselContainer: {
        marginTop: 40,
        display: 'flex',
        gap: 20

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
            <Grid container spacing={6}>
                <Grid item >
                    <Button variant="contained" size='large' component="button" style={{paddingRight: 30, paddingLeft: 30 }} color="secondary">Free Apartments</Button>
                </Grid>
                <Grid item >
                    <Button variant="contained" size='large' component="button" style={{paddingRight: 30, paddingLeft: 30 }} color="secondary">Free Apartments</Button>
                </Grid>
                <Grid item >
                    <Button variant="contained" size='large' component="button" style={{paddingRight: 30, paddingLeft: 30 }} color="secondary">Free Apartments</Button>
                </Grid>
                <Grid item >
                    <Button variant="contained" size='large' component="button" style={{paddingRight: 30, paddingLeft: 30 }} color="secondary">Free Apartments</Button>
                </Grid>
                <Grid item style={{display: 'flex',alignItems: 'center'}}>
                    <Typography> Explore all &#8594;</Typography>
                </Grid>
            </Grid>
        </div>
        <div>
            <Grid className={classes.carouselContainer} spacing={5}>
                <Grid item>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image className={classes.cardImg} src={propImg} alt="property image"></Image>
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image className={classes.cardImg} src={propImg} alt="property image"></Image>
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image className={classes.cardImg} src={propImg} alt="property image"></Image>
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image className={classes.cardImg} src={propImg} alt="property image"></Image>
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
                    <Card className={classes.root}>
                        <CardActionArea>
                            <Image className={classes.cardImg} src={propImg} alt="property image"></Image>
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
            </Grid>
        </div>
        
    </section>
    </>
  )
}

export default ListedProperties;