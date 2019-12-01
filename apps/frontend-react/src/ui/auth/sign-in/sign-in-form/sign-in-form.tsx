import { Button, makeStyles, Typography } from '@material-ui/core';
import renderTextField from '@react-client/shared/components/material-wrappers/render-text-field';
import { validate } from '@react-client/ui/auth/sign-in/sign-in-form/validate';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export interface SignInFormData {
  readonly email: string;
  readonly password: string;
}

export interface NativeSignInFormProps {
  readonly errorMessage: string;
}

export type SignInFormProps =
  InjectedFormProps<SignInFormData>
  & NativeSignInFormProps;

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const BaseSignInForm = ({ handleSubmit, errorMessage, pristine, invalid }: SignInFormProps) => {
  const classes = useStyles(undefined);

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={handleSubmit}>
      <Field
        component={renderTextField}
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
      />
      <Field
        component={renderTextField}
        variant='outlined'
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
      />
      {errorMessage &&
      <Typography component='span' variant='caption' color='error'>
        {errorMessage}
      </Typography>}
      <Button
        fullWidth
        variant='contained'
        color='primary'
        type='submit'
        className={classes.submit}
        disabled={pristine || invalid}
      >
        Sign In
      </Button>
    </form>
  );
};

const SignInForm = reduxForm<SignInFormData, NativeSignInFormProps>({
  form: 'sign-in',
  validate
})(BaseSignInForm);

export default SignInForm;
