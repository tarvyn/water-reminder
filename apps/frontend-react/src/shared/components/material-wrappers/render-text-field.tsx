import { TextField } from '@material-ui/core';
import { TextFieldProps } from '@material-ui/core/TextField/TextField';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

export type RenderTextFieldProps = WrappedFieldProps & TextFieldProps;

const renderTextField = ({
  input,
  meta: { touched, invalid, error },
  ...custom
}: RenderTextFieldProps) => (
  <TextField
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export default renderTextField;
