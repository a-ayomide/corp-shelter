import React from 'react';
import { makeStyles, Container } from "@material-ui/core";
import Appbar from "./Appbar";

const useStyles = makeStyles({

})


function Layout({ children }) {
  const classes = useStyles()
  return (
    <>
      <div>
        <Appbar/>
          <Container>
              {children}
          </Container>
      </div>
    </>
  );
}

export default Layout;
