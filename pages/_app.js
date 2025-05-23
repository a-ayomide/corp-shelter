import React from "react";
import App from "next/app";
import Head from "next/head";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import wrapper from "../src/redux/store";
import { makeStyles } from "@material-ui/core";
import "../styles/globals.css";
import theme from "../src/utils/theme";
import Layout from "../src/layouts/Layout";

class _App extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <title>NextJS - With Redux and Material UI</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <CssBaseline />

        <Component {...pageProps} />
      </MuiThemeProvider>
    );
  }
}

// export default wrapper.withRedux(_App);
export default _App;
