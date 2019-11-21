import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import './app.scss';
import { getUser } from './store/auth/actions';
import { getMessage } from './store/message/actions';
import { RootState } from './store/reducer';
import Login from './ui/login/login';
import NavBar from './ui/root/nav-bar/nav-bar';

// TODO: add import aliases
export const App = () => {
  const message = useSelector((state: RootState) => state.message.message);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getMessage());
      dispatch(getUser());
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
            <div>
              Message from store: {JSON.stringify(message)}
            </div>
          )}
        />
        <Route
          path='/login'
          exact
          render={() => (
            <Login/>
          )}
        />
      </main>
    </div>
  );
};

export default App;
