import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import posts from './modules/posts';

export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    reduxAsyncConnect,
    online: (v = true) => v,
    posts,
    ...asyncReducers
  });
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
