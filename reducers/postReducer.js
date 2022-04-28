import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function(post = initialState.post, action) {
  switch (action.type) {
    case types.GET_POST_SUCCEEDED:
      return action.payload;
    default:
      return post;
  }
}