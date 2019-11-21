import React, { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { Action } from 'redux';
import { logout } from '../../../store/auth/actions';
import './nav-bar.scss';
import { RootState } from '../../../store/reducer';

export interface NavBarProps {
  readonly auth: RootState['auth'];
  readonly dispatch: Dispatch<Action>;
}

export const NavBar = ({ auth, dispatch }: NavBarProps) => {
  const onLogout = () => dispatch(logout());

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
