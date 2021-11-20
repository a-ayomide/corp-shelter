import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container, Avatar } from '@material-ui/core';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
    alignItems: 'center'
  },
  navContainer: {
    // display: 'flex',
    // justifyContent: 'space-between'
  },

  navbar: {
    background: '#f2f2f2',
    paddingTop: 10,
    paddingBottom: 10

  },

  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  

}));

function Appbar(props) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <div className={classes.root}>
        <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
        {/* <AppBar color="transparent"  position="static" className={classes.navbar} elevation={0}>
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
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
              </div>      
            </Toolbar>
          </Container>
        </AppBar> */}
      </div>
    </>
  );
}

export default Appbar;
