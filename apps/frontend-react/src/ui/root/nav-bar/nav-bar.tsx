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

export const NavBar = ({ auth, dispatch }: NavBarProps) => {
  const onLogout = () => dispatch(authActions.logout());

  return (
    <nav className='app__nav'>
      Navigation Bar
      {auth.loggedIn && <span>{auth.user.email}</span>}
      {auth.loggedIn && <button onClick={onLogout}>Logout</button>}
      {!auth.loggedIn && <Link to='/login'>Login</Link>}
    </nav>
  );
};

export default NavBar;
