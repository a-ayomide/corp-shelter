import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },

}));

function Footer() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>

      </div>
    </>
  );
}

export default Footer;
