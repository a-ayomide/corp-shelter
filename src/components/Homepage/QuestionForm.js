import React from "react";
import {
  makeStyles,
  Button,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: 100,
    paddingBottom: 200,
    // paddingLeft: 100,
    // paddingRight: 100,
  },

  formHeader: {
    fontSize: 40,
    // maxWidth: 500,
    fontWeight: "bold",
    color: "black",
    display: "flex",
    justifyContent: "center",
  },
}));

const Reviews = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.formContainer}>
        <Container>
          <form noValidate autoComplete="off">
            <Typography variant="h2" className={classes.formHeader}>
              Have a question in mind?
            </Typography>
            <Typography variant="h2" className={classes.formHeader}>
              Let us help you.
            </Typography>
            <TextField
              style={{ marginTop: 50 }}
              id="outlined-multiline-static"
              placeholder="Write your question here"
              multiline
              rows={12}
              fullWidth
              variant="outlined"
            />
            <Button
              variant="contained"
              style={{
                marginTop: 30,
                float: "right",
                backgroundColor: "#29a43a",
                color: "white",
              }}
              size="large"
            >
              Send
            </Button>
          </form>
        </Container>
      </section>
    </>
  );
};

export default Reviews;
