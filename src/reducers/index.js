import { combineReducers } from 'redux';
import user from './UserReducers';
import restaurants from './ResturantReducer';

export default combineReducers({
  user,
  restaurants
})
