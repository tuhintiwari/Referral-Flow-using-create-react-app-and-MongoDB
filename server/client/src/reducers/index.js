import { combineReducers } from 'redux';
import authReducer from './authReducer.js';

export default combineReducers({
  auth: authReducer                                          // keys exist inside state object
});
