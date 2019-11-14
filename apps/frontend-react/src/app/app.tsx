import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './app.scss';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  const [message, setMessage] = useState({});

  useEffect(
    () => {
      fetch('http://localhost:3333/api/hello')
        .then(res => res.json())
        .then(setMessage)
    },
    []
  );

  return (
    <div className="app">
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            Message: { JSON.stringify(message) }
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
    </div>
  );
};

export default App;
