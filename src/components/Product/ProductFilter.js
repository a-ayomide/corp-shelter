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
    maxWidth: 200,
    minWidth: 250,
  },
  FilterContainer: {
    // display: "flex",
    // justifyContent: 'space-between'
    // alignItems: "center",
  },
}));

function ProductFilter() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.FilterContainer}>
        <form>
          <Grid
            container
            direction=" column"
            spacing={9}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item sm={3} xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  // style={{ maxWidth: "600px" }}
                  labelId="Location"
                  label="Location"
                  variant="outlined"
                ></Select>
              </FormControl>
            </Grid>
            <Grid item sm={3} xs={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  // style={{ maxWidth: "600px" }}
                  labelId="Location"
                  label="Location"
                ></Select>
              </FormControl>
            </Grid>
            <Grid item sm={3} xs={6}>
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
            <Grid item sm={3} xs={6}>
              <Button disableElevation size="large" variant="contained">
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default ProductFilter;
