import { Avatar, Button, Container, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import renderLink from '@react-client/shared/components/material-wrappers/render-link';
import { authActions } from '@react-client/store/auth/actions';
import { RootState } from '@react-client/store/reducer';
import SignInForm, { SignInFormData } from '@react-client/ui/auth/sign-in/sign-in-form/sign-in-form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signUpLink: {
    marginLeft: 'auto'
  }
}));

const SignIn = () => {
  const classes = useStyles(undefined);
  const loginInErrorMessage = useSelector(
    (state: RootState) => state.auth.loginInErrorMessage
  );
  const dispatch = useDispatch();
  const login = (values: SignInFormData) => {
    dispatch(authActions.login(values));
  };
  const loginWithGoogle = () => {
    window.open('/api/auth/login/google', '_self');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <SignInForm
          errorMessage={loginInErrorMessage}
          onSubmit={login}
        />
        <Button
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={loginWithGoogle}
        >
          Sign In With Google
        </Button>
        <Link
          className={classes.signUpLink}
          component={renderLink}
          to='/sign-up'
        >
          Don’t have an account? Sign Up
        </Link>
      </div>
    </Container>
  );
};

export default SignIn;
