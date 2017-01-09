import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import posts from './modules/posts';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  online: (state = true) => state,
  form,
  notifs,
  auth,
  counter: multireducer({
    counter1: counter,
    counter2: counter,
    counter3: counter
  }),
  info,
  widgets,
  survey,
  chat
});
export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    reduxAsyncConnect,
    online: (v = true) => v,
    posts,
    ...asyncReducers
  });
}
