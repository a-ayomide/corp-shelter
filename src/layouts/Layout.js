import React from "react";
import { makeStyles, Container, Hidden } from "@material-ui/core";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";
import Footer from "./Footer";

const useStyles = makeStyles({});

function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <AppbarDesktop />
      {/* <Hidden xsUp>
          <AppbarMobile />
        </Hidden> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
