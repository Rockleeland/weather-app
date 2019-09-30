import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  max-width: 300px;
`;

export const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#FFA500"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFA500"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#FFA500"
      },
      "&:hover fieldset": {
        borderColor: "#FFA500"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFA500"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

const Form = ({ loadWeather }) => {
  const classes = useStyles();

  return (
    <StyledForm onSubmit={loadWeather}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <CssTextField
            className={classes.margin}
            type="text"
            name="city"
            id="input-with-icon-grid"
            label="City"
          />
        </Grid>
      </Grid>
    </StyledForm>
  );
};
export default Form;
