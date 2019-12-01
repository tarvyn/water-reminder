import { Avatar, Button, Container, Link, makeStyles, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import renderLink from '@react-client/shared/components/material-wrappers/render-link';
import { authActions } from '@react-client/store/auth/actions';
import { RootState } from '@react-client/store/reducer';
import SignUpForm, { SignUpFormData } from '@react-client/ui/auth/sign-up/sign-up-form/sign-up-form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
  signInLink: {
    marginLeft: 'auto'
  }
}));

const SignUp = () => {
  const history = useHistory();
  const classes = useStyles(undefined);
  const signUpErrorMessage = useSelector(
    (state: RootState) => state.auth.signUpErrorMessage
  );
  const dispatch = useDispatch();
  const signUp = (values: SignUpFormData) => {
    dispatch(authActions.signUp(values));
  };
  const signUpWithGoogle = () => {
    window.open('/api/auth/login/google', '_self');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <SignUpForm
          errorMessage={signUpErrorMessage}
          onSubmit={signUp}
        />
        <Button
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={signUpWithGoogle}
        >
          Sign Up With Google
        </Button>
        <Link
          className={classes.signInLink}
          component={renderLink}
          to='/sign-in'
        >
          Already have an account? Sign in
        </Link>
      </div>
    </Container>
  );
};

export default SignUp;
