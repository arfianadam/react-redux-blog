import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import posts from './modules/posts';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  online: (v = true) => v,
  posts
});
