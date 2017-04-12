import {LOGGED_IN, SIGNED_IN} from '../actions/action';



let user = {
  email: null,
  password: null
}

export default (state = user, action) => {
  if(action.type === LOGGED_IN){
      const {email, displayName} = action;
      user = {
        email,
        displayName
      }
      return user;
  }
  else if(action.type === SIGNED_IN){
    const {email, password}=action;
    user = {
      email,
      password
    }
    return user;
  }
  return state;
}
