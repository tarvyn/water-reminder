import { createStore, Store, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epic';
import { rootReducer } from './reducer';

export default function configureStore(): Store {
  const epicMiddleware = createEpicMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  );

  epicMiddleware.run(rootEpic);

  return store;
}
