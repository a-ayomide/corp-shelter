import React from "react";
import {
  makeStyles,
  useTheme,
  Card,
  Box,
  Grid,
  FormControl,
  TextField,
  MenuItem,
  Select,
  Button,
  InputLabel,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {},
  root: {
    // minWidth: 245,
    // borderColor: "gray",
    // borderWidth: "1px",
    // borderStyle: "solid",
    // "& > *": {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(40),
    //   height: theme.spacing(80),
    // },
  },
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 200,
  },
}));

const AddProperty = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [selectState, setSelectState] = React.useState("");
  const [stateLGA, setStateLGA] = React.useState("");
  const [selectCategory, setSelectCategory] = React.useState("");
  const [propertyCategory, setPropertyCategory] = React.useState("");
  const [selectCountry, setSelectCountry] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Container></Container>
      <Box>
        <Card className={classes.root}>
          <Box m={4}>
            <Typography style={{ fontWeight: "bold" }}>
              Property Description
            </Typography>
            <Box style={{ marginTop: 10 }}>
              <Grid container spacing={2}>
                <Grid item sm={12} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    // margin="dense"
                  />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Description"
                    multiline
                    rows={6}
                    variant="outlined"
                    // margin="dense"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box style={{ marginTop: 10 }}>
              <Grid container direction="row" spacing={2}>
                <Grid item sm={4} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    // margin="dense"
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={selectCategory}
                      onChange={handleChange}
                      label="Select Category"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Bungalow</MenuItem>
                      <MenuItem value={20}>Duplex</MenuItem>
                      <MenuItem value={30}>Mansion</MenuItem>
                      <MenuItem value={40}>Selfcon</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <FormControl
                    variant="outlined"
                    style={{ width: "100%" }}
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Property Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={propertyCategory}
                      onChange={handleChange}
                      label="Property Category"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Free</MenuItem>
                      <MenuItem value={20}>Paid</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
            <Box style={{ marginTop: 30 }}>
              <Typography style={{ fontWeight: "bold" }}>
                Property Location
              </Typography>
              <Box style={{ marginTop: 10 }}>
                <Grid container direction="row" spacing={2}>
                  <Grid item sm={12} xs={12}>
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-basic"
                      label="Property Address"
                      variant="outlined"
                      // margin="dense"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box style={{ marginTop: 10 }}>
                <Grid container direction="row" spacing={2}>
                  <Grid item sm={4} xs={12}>
                    <FormControl
                      variant="outlined"
                      style={{ width: "100%" }}
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select Country
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={selectCountry}
                        onChange={handleChange}
                        label="Select Country"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Free</MenuItem>
                        <MenuItem value={20}>Paid</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <FormControl
                      variant="outlined"
                      style={{ width: "100%" }}
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={selectState}
                        onChange={handleChange}
                        label="Select State"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Free</MenuItem>
                        <MenuItem value={20}>Paid</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <FormControl
                      variant="outlined"
                      style={{ width: "100%" }}
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Select LGA
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={stateLGA}
                        onChange={handleChange}
                        label="Select LGA"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Free</MenuItem>
                        <MenuItem value={20}>Paid</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Button
              style={{
                backgroundColor: "#29a43a",
                color: "white",
                marginTop: 20,
                paddingTop: 10,
                paddingBottom: 10,
                marginBottom: 20,
                float: "right",
              }}
              variant="contained"
            >
              POST PROPERTY
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default AddProperty;
