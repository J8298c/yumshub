import {SET_RESTAURANTS} from '../actions/action';

export default (state = [], action)=> {
  if(action.type === SET_RESTAURANTS){
    const {restaurants} = action;
    return restaurants;
  }
  return state;
}
