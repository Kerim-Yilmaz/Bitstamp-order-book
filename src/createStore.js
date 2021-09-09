import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxPromise, thunk)),
  // applyMiddleware(reduxPromise, thunk, logger)
);
