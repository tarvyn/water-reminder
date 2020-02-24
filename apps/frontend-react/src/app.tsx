import DateFnsUtils from '@date-io/date-fns';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { authActions } from '@react-client/store/auth/actions';
import { RootState } from '@react-client/store/reducer';
import SignIn from '@react-client/ui/auth/sign-in/sign-in';
import SignUp from '@react-client/ui/auth/sign-up/sign-up';
import Main from '@react-client/ui/root/main/main';
import NavBar from '@react-client/ui/root/nav-bar/nav-bar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '100vh'
  },
  main: {
    flexGrow: 1
  }
}));

export const App = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const classes = useStyles(undefined);

  useEffect(() => {
    dispatch(authActions.getUser());
  }, []);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={classes.app}>
        <NavBar auth={auth} />
        <main className={classes.main}>
          <Route path='/' exact render={() => <Main />} />
          <Route path='/sign-in' exact render={() => <SignIn />} />
          <Route path='/sign-up' exact render={() => <SignUp />} />
        </main>
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default App;
