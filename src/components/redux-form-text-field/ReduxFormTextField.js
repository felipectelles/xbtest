import React from 'react';
import { TextField } from "@material-ui/core";

export default function ReduxFormTextField({
  label,
  input,
  placeholder,
  meta: { touched, invalid, error },
  ...custom
}) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      error={touched && invalid}
      margin="normal"
      helperText={touched && error}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      {...input}
      {...custom}
    />
  );
}