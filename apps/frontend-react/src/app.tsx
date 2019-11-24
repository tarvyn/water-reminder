import { Container } from '@material-ui/core';
import { authActions } from '@react-client/store/auth/actions';
import { messageActions } from '@react-client/store/message/actions';
import { RootState } from '@react-client/store/reducer';
import SignIn from '@react-client/ui/auth/sign-in/sign-in';
import SignUp from '@react-client/ui/auth/sign-up/sign-up';
import NavBar from '@react-client/ui/root/nav-bar/nav-bar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import './app.scss';

export const App = () => {
  const message = useSelector((state: RootState) => state.message.message);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(messageActions.getMessage());
      dispatch(authActions.getUser());
    },
    []
  );

  return (
    <div className='app'>
      <NavBar auth={auth} dispatch={dispatch}/>
      <main className='app__main'>
        <Route
          path='/'
          exact
          render={() => (
            <Container component='main' maxWidth='xs'>
              <div>
                Message from store: {JSON.stringify(message)}
              </div>
            </Container>
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
