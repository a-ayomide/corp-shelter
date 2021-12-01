import React from "react";
import { makeStyles, useTheme, Card, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    maxWidth: "500px",
    // maxHeight: "500px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    // borderColor: "gray",
    // borderWidth: "1px",
    // borderStyle: "solid",
    "& > *": {
      // margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(80),
    },
  },

  //   formfields: {
  //     [theme.breakpoints.up("sm")]: {
  //       width: "600px",
  //     },
  //     width: "300px",
  //     display: "flex",
  //     alignItems: "center",
  //     flexDirection: "column",
  //     "& > *": {
  //       margin: theme.spacing(1.5),
  //     },
  //   },
}));

const Sidebar = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Card>
          <Box
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              paddingLeft: 30,
              borderBottom: "1px solid #F3F3F3",
            }}
          >
            <span style={{ fontSize: 35, marginRight: 10, color: "#29a43a" }}>
              &lt;
            </span>
            <Typography> Settings</Typography>
          </Box>
          <Box
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              paddingLeft: 30,
              borderBottom: "1px solid #F3F3F3",
            }}
          >
            <Typography>Personal details</Typography>
          </Box>
          <Box
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              paddingLeft: 30,
              borderBottom: "1px solid #F3F3F3",
            }}
          >
            <Typography>Property Lists</Typography>
          </Box>
          <Box
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              paddingLeft: 30,
              borderBottom: "1px solid #F3F3F3",
            }}
          >
            <Typography>Post a Property</Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Sidebar;
