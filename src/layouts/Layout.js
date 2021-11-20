import React from 'react';
import {makeStyles, Container, Hidden, CssBaseline} from "@material-ui/core";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

const useStyles = makeStyles({

})


function Layout({ children }) {
  const classes = useStyles()
  return (
    <>
      <div>
          <CssBaseline />
          <AppbarDesktop />
          <Hidden xsUp><AppbarMobile/></Hidden>
              {children}
      </div>
    </>
  );
}

export default Layout;
