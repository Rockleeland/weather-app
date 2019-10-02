import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";

import { withStyles, makeStyles } from "@material-ui/core/styles";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 300px;
`;

export const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#3b78e7"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3b78e7"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3b78e7"
      },
      "&:hover fieldset": {
        borderColor: "#3b78e7"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3b78e7"
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

const StyledButton = styled(Button)`
  && {
    color: white;
    max-height: 80px;
    display: flex;
    border-radius: 0 20px 20px 0;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #3b78e7;
    border: 1px solid #3b78e7;
    flex: 0 0 auto;

    &:hover {
      background-color: #3b78e7;
    }
    /* @media screen and (max-width: 500px) {
      display: flex;
      border-radius: 0 20px 20px 0;
      padding-left: 8px;
      padding-right: 8px;
      background-color: #3b78e7;
      border: 1px solid #3b78e7;
      flex: 0 0 auto;
      &:hover {
        background-color: #3b78e7;
      }
    } */
  }
`;

const Form = ({ loadWeather }) => {
  const classes = useStyles();

  return (
    <StyledForm onSubmit={loadWeather}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <CssTextField
            className={classes.margin}
            type="text"
            name="city"
            id="input-with-icon-grid"
            label="City"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
      </Grid>
      <StyledButton
        type="submit"
        size="medium"
        variant="contained"
        onSubmit={loadWeather}
      >
        Search
      </StyledButton>
    </StyledForm>
  );
};
export default Form;
