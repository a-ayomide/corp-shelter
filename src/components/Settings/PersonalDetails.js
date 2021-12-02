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

const Sidebar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Container></Container>
      <Box>
        <Card className={classes.root}>
          <Box m={4}>
            <Typography>Personal Deatils</Typography>
            <Box style={{ marginTop: 10 }}>
              <Grid container direction="row" spacing={2}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    // margin="dense"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Last Name"
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
                    label="Email"
                    variant="outlined"
                    // margin="dense"
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Mobile Number"
                    variant="outlined"
                    // margin="dense"
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Whatsapp"
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
                    label="State Code"
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
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={age}
                      onChange={handleChange}
                      label="Age"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={4} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="Date of Birth"
                    variant="outlined"
                    // margin="dense"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box style={{ marginTop: 10 }}>
              <Grid container direction="row" spacing={2}>
                <Grid item sm={6} xs={12}>
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
                <Grid item sm={6} xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-basic"
                    label="User Type"
                    variant="outlined"
                    // margin="dense"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box style={{ marginTop: 30 }}>
              <Typography>Social Profile</Typography>
              <Box style={{ marginTop: 10 }}>
                <Grid container direction="row" spacing={2}>
                  <Grid item sm={4} xs={12}>
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-basic"
                      label="Facebook Profile"
                      variant="outlined"
                      // margin="dense"
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-basic"
                      label="Twitter Profile"
                      variant="outlined"
                      // margin="dense"
                    />
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-basic"
                      label="Instagram Profile"
                      variant="outlined"
                      // margin="dense"
                    />
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
              UPDATE PROFILE
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Sidebar;
