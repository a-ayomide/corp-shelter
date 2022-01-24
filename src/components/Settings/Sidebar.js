import React from "react";
import { makeStyles, useTheme, Card, Box, Typography } from "@material-ui/core";
import Link from "next/link";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    maxWidth: "500px",
    // maxHeight: "500px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      // margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(80),
    },
  },
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
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              paddingLeft: 30,
              borderBottom: "1px solid #F3F3F3",
            }}
          >
            <span style={{ fontSize: 35, marginRight: 10, color: "#29a43a" }}>
              <ArrowBackIcon />
            </span>
            <Typography> Settings</Typography>
          </Box>
          <Link href="/auth/User" passHref>
            <Box
              style={{
                height: "60px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                paddingLeft: 30,
                borderBottom: "1px solid #F3F3F3",
              }}
            >
              <Typography>Personal details</Typography>
            </Box>
          </Link>

          <Link href="/auth/addProperty" passHref>
            <Box
              style={{
                height: "60px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                paddingLeft: 30,
                borderBottom: "1px solid #F3F3F3",
              }}
            >
              <Typography>Post a Property</Typography>
            </Box>
          </Link>

          <Link href="/auth/userProperties" passHref>
            <Box
              style={{
                cursor: "pointer",
                height: "60px",
                display: "flex",
                alignItems: "center",
                paddingLeft: 30,
                borderBottom: "1px solid #F3F3F3",
              }}
            >
              <Typography>Property Lists</Typography>
            </Box>
          </Link>
        </Card>
      </Box>
    </>
  );
};

export default Sidebar;
