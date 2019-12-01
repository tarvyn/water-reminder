import { AppBar, Avatar, Button, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { authActions } from '@react-client/store/auth/actions';
import { RootState } from '@react-client/store/reducer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export interface NavBarProps {
  readonly auth: RootState['auth'];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button: {
      color: theme.palette.text.hint
    },
    avatar: {
      backgroundColor: theme.palette.secondary.main,
      marginLeft: theme.spacing(1)
    }
  }),
);

const NavBar = ({ auth }: NavBarProps) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authActions.logout());
  const classes = useStyles(undefined);
  const [firstNameLetter] = (auth.user && auth.user.firstName) || '';
  const [lastNameLetter] = (auth.user && auth.user.lastName) || '';
  const avatarPlaceholder = (`${firstNameLetter}${lastNameLetter}`).toUpperCase();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='subtitle1' className={classes.title}>
          Water Reminder App
        </Typography>
        {
          auth.loggedIn &&
          <>
            <Button color='inherit'
              onClick={onLogout}>
              Logout
            </Button>
            {auth.user.imageUrl &&
            <Avatar alt={auth.user.firstName}
              className={classes.avatar}
              src={auth.user.imageUrl}
            />}
            {!auth.user.imageUrl &&
            <Avatar alt={auth.user.firstName}
              className={classes.avatar}>
              {avatarPlaceholder}
            </Avatar>}
          </>
        }
        {
          !auth.loggedIn &&
          <Button
            component={Link}
            to='/sign-in'
            variant='text'
            color='inherit'>
            Sign in
          </Button>
        }
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
