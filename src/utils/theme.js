import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    // Customize Material-UI with your theme
    // See more here: https://material-ui.com/customization/themes/
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
