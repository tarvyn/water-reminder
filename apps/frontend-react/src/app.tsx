import { authActions } from '@react-client/store/auth/actions';
import { RootState } from '@react-client/store/reducer';
import SignIn from '@react-client/ui/auth/sign-in/sign-in';
import SignUp from '@react-client/ui/auth/sign-up/sign-up';
import Doses from '@react-client/ui/hydration/doses/doses';
import NavBar from '@react-client/ui/root/nav-bar/nav-bar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

export const App = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(authActions.getUser());
    },
    []
  );

  return (
    <div className='app'>
      <NavBar auth={auth} />
      <main className='app__main'>
        <Route
          path='/'
          exact
          render={() => (
            <Doses/>
          )}
        />
        <Route
          path='/sign-in'
          exact
          render={() => (
            <SignIn/>
          )}
        />
        <Route
          path='/sign-up'
          exact
          render={() => (
            <SignUp/>
          )}
        />
      </main>
    </div>
  );
};

export default App;
