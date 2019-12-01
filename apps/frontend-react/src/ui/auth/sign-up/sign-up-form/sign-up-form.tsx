import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import renderTextField from '@react-client/shared/components/material-wrappers/render-text-field';
import { validate } from '@react-client/ui/auth/sign-up/sign-up-form/validate';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export interface SignUpFormData {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
}

export interface NativeSignUpFormProps {
  readonly errorMessage: string;
}

export type SignUpFormProps =
  InjectedFormProps<SignUpFormData>
  & NativeSignUpFormProps;

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const BaseSignUpForm = ({ handleSubmit, errorMessage, pristine, invalid }: SignUpFormProps) => {
  const classes = useStyles(undefined);

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field
            component={renderTextField}
            autoComplete='fname'
            name='firstName'
            variant='outlined'
            required
            fullWidth
            id='firstName'
            label='First Name'
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={renderTextField}
            variant='outlined'
            required
            fullWidth
            id='lastName'
            label='Last Name'
            name='lastName'
            autoComplete='lname'
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
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
        Sign Up
      </Button>
    </form>
  );
};

const SignUnForm = reduxForm<SignUpFormData, NativeSignUpFormProps>({
  form: 'sign-up',
  validate
})(BaseSignUpForm);

export default SignUnForm;
