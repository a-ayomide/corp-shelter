import React from "react";
import {
  makeStyles,
  useTheme,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
  },
}));

function ProductFilter() {
  const classes = useStyles();

  return (
    <>
      <form>
        <Grid container spacing={3}>
          <Grid item sm={3}>
            <FormControl variant="outlined">
              <Select
                // style={{ maxWidth: "600px" }}
                labelId="Location"
                label="Location"
                variant="outlined"
              ></Select>
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl variant="outlined">
              <Select
                // style={{ maxWidth: "600px" }}
                labelId="Location"
                label="Location"
              ></Select>
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Age"
              ></Select>
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <Button variant="contained">Search</Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default ProductFilter;
