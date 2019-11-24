import {
  AppBar,
  Avatar,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { authActions } from '@react-client/store/auth/actions';
import { RootState } from '@react-client/store/reducer';
import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { Action } from 'redux';
import './nav-bar.scss';

export interface NavBarProps {
  readonly auth: RootState['auth'];
  readonly dispatch: Dispatch<Action>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      color: theme.palette.text.hint
    }
  }),
);

const NavBar = ({ auth, dispatch }: NavBarProps) => {
  const onLogout = () => dispatch(authActions.logout());
  const classes = useStyles(undefined);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <Menu/>
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Welcome to Water Reminder App
          </Typography>
          {
            auth.loggedIn &&
            <>
              <span>{auth.user.email}</span>
              <Button color='inherit'
                onClick={onLogout}>
                Logout
              </Button>
              <Avatar alt={auth.user.firstName}
                src={auth.user.imageUrl}
              />
            </>
          }
          {
            !auth.loggedIn &&
            <Button
              component={ Link }
              to='/sign-in'
              variant='text'
              color='inherit'>
              Sign in
            </Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
