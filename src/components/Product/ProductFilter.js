import React from "react";
import {
  makeStyles,
  useTheme,
  Grid,
  Button,
  FormControl,
  MenuItem,
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
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            <Grid item sm={3} xs={12}>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  // style={{ maxWidth: "600px" }}
                  labelId="Location"
                  label="Location"
                  variant="outlined"
                ></Select>
              </FormControl>
            </Grid>
            <Grid item sm={3} xs={12}>
              <FormControl
                variant="outlined"
                style={{ width: "100%" }}
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  State of Residence
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={state}
                  onChange={handleChange}
                  label="State of Residence"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Abia</MenuItem>
                  <MenuItem value={20}>Anambra</MenuItem>
                  <MenuItem value={30}>Adamawa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={3} xs={12}>
              <FormControl
                variant="outlined"
                style={{ width: "100%" }}
                className={classes.formControl}
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={state}
                  onChange={handleChange}
                  label="State of Residence"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Abia</MenuItem>
                  <MenuItem value={20}>Anambra</MenuItem>
                  <MenuItem value={30}>Adamawa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={3} xs={6}>
              <Button
                style={{ backgroundColor: "#29a43a", color: "white" }}
                disableElevation
                size="large"
                variant="contained"
              >
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
