import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
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
    alignItems: 'center',
    color: '#1F1D36'
  },
  navContainer: {
    // display: 'flex',
    // justifyContent: 'space-between'
  },

  navbar: {
    // background: '#f2f2f2',
    paddingTop: 1,
    paddingBottom: 1,

  },

  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

}));

function Appbar(props) {

  const classes = useStyles();

  return (
    <>
      <nav className={classes.root}>
        <AppBar color="transparent"  position="static" className={classes.navbar} elevation={0}>
           <Container maxWidth="lg">
            <Toolbar component="ul">
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
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </nav>
    </>
  );
}

export default Appbar;
