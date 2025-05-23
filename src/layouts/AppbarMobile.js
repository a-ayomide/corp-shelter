import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Avatar,
} from "@material-ui/core";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "black",
    alignItems: "center",
  },
  navText: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    gap: "30px",
    alignItems: "center",
  },
  navContainer: {
    // display: 'flex',
    // justifyContent: 'space-between'
  },

  navbar: {
    background: "#f2f2f2",
    paddingTop: 10,
    paddingBottom: 10,
  },

  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function AppbarMobile(props) {
  return (
    <>
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
    </>
  );
}

export default AppbarMobile;
