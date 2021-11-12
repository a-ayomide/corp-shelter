import React from 'react'
import { makeStyles } from "@material-ui/core";
import { Typography, Container } from "@material-ui/core";
import Layout from "../src/layouts/Layout";
import style from '../styles/Home.module.css'
import Hero from '../src/components/Homepage/Hero'
import HowItWorks from '../src/components/Homepage/HowItWorks'
import ListedProperties from '../src/components/Homepage/ListedProperties'

const useStyles = makeStyles({

  title: {
    fontSize: 14,
    color: 'black'
  }
})

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Layout />
      <Container>
        <Hero />
        <HowItWorks />
        <ListedProperties />
      </Container>
    </>
  )
}

export default Home;
