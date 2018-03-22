import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {       //default of state when don't know whether logged in or not, return null
  console.log(action);
  switch (action.type){
    case FETCH_USER:
      return action.payload || false;                 // added false to consider case when user logged out
    default:
      return state;
  }
}
