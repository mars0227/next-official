import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function(ui = initialState.ui, action) {
  switch (action.type) {
    case types.SCROLL_TO:
      return { ...ui, scrollTo: action.payload };
    default:
      return ui;
  }
}