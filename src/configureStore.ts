/**
 * Create the store with dynamic reducers
 */

import { createStore, compose, combineReducers } from 'redux';
import deviceReducer from 'store/reducers/device.reducer';
import welcomeReducer from 'features/welcome/Welcome/welcome.reducer';
import { DEV } from './constants';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createReducer() {
  const rootReducer = combineReducers({
    device: deviceReducer,
    welcome: welcomeReducer,
  });

  return rootReducer;
}

const configStore = (initialState = {}): any => {
  let composeEnhancers = compose;
  if (DEV) {
    // @ts-ignore
    composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  } else {
    composeEnhancers = compose;
  }
  const middlewares = [] as [];

  const enhancers = [...middlewares];

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));
  return { store };
};

export default configStore;
