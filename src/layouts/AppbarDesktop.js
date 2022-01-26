import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Avatar,
} from "@material-ui/core";
// import avatarImg from "../../public/reviewImg.png";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "black",
    alignItems: "center",
    cursor: "pointer",
  },
  navText: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    gap: "30px",
    alignItems: "center",
    color: "#29a43a",
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
      <div style={{ borderBottom: "2px solid #F1F1F1" }}>
        <Container disableGutters maxWidth="lg">
          <nav className={classes.root}>
            <AppBar
              color="transparent"
              position="static"
              className={classes.navbar}
              elevation={0}
            >
              <Toolbar component="ul">
                <Link href="/" passHref>
                  <Box>
                    <Typography variant="h5" className={classes.title}>
                      CorpShelter
                    </Typography>
                  </Box>
                </Link>

                <div className={classes.navText}>
                  <Typography>Search for accommodation</Typography>
                  <Typography>Post an advert</Typography>
                  <Typography>About Us</Typography>
                  <Typography>Contact Us</Typography>
                  <Link href="/auth/user" passHref>
                    <Box style={{ cursor: "pointer" }}>
                      <Avatar
                        alt="Remy Sharp"
                        // src={avatarImg}
                        className={classes.large}
                      />
                    </Box>
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
          </nav>
        </Container>
      </div>
    </>
  );
}

export default Appbar;
