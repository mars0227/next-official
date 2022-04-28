import * as types from '../constants/actionTypes';

export const scrollTo = payload => ({
  type: types.SCROLL_TO,
  payload
});

export const clearScrollTo = () => ({
  type: types.SCROLL_TO,
  payload: 'none'
});