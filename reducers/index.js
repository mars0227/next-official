import { combineReducers } from 'redux';

import ui from './uiReducer';
import post from './postReducer';

import * as types from '../constants/actionTypes';
import initialState from './initialState';

const appReducer = combineReducers({
  ui,
  post
});

const rootReducer = (state, action) => {
  const isLogout = action.type === types.LOGOUT;

  if(isLogout) window.history.replaceState({}, '', '/');

  const nextState = isLogout ? initialState : state;

  return appReducer(nextState, action);
};

export default rootReducer;
