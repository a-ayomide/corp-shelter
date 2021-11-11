import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    marginTop: '10px',
  },

  title: {
    flexGrow: 1,
    color: 'black',
    alignItems: 'center'
  },
  navText: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
    gap: '30px',
    alignItems: 'center'
  },
  navContainer: {
    // display: 'flex',
    // justifyContent: 'space-between'
  },

  // navbar: {
  //   background: '#f2f2f2',
  // },

}));

function Appbar(props) {

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar color="transparent"  position="static" className={classes.navbar} elevation={0}>
           <Container>
            <Toolbar>
              <div>
              <Typography variant="h5" className={classes.title}>
                CorpShelter
              </Typography>
              </div>
              
              <div className={classes.navText}>
                <Typography>
                  Search for accommodation
                </Typography>
                <Typography>
                  Post an advert
                </Typography>
                <Typography>
                  About Us
                </Typography>
                <Typography>
                  Contact Us
                </Typography>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>      
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}

export default Appbar;
