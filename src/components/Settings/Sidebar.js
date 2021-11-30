import React from "react";
import { makeStyles, useTheme, Paper, Card, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    maxWidth: "500px",
    maxHeight: "500px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    borderColor: "green",
    borderWidth: "2px",
    borderStyle: "solid",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(100),
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
        <Box className={{ width: "400px" }}>Cardbduc</Box>
      </Box>
    </>
  );
};

export default Sidebar;
