import React from 'react';
import { FormHelperText, FormControl, InputLabel, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const useStyles = makeStyles(() => ({
  label: {
    backgroundColor: 'white',
    paddingLeft: 4,
    paddingRight: 4,
  }
}));

export default function ReduxFormSelect({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}){
  const classes = useStyles();
  
  return (
    <FormControl
      variant="outlined"
      margin="normal"
      error={touched && error}>
      <InputLabel
        className={classes.label}
        shrink
        htmlFor="gender-selection">{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: 'gender-selection'
        }}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
}