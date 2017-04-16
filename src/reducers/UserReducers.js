import {LOGGED_IN, SIGNED_IN, SET_SHOPPING_CART} from '../actions/action';



let user = {
  email: null,
  password: null,
  shoppingcart : [],
  displayName: null
}

export default (state = user, action) => {
  if(action.type === LOGGED_IN){
      const {email, displayName, shoppingcart} = action;
      user = {
        email,
        displayName,
        shoppingcart
      }
      return user;
  }
  else if(action.type === SIGNED_IN){
    const {email, password, shoppingcart}=action;
    user = {
      email,
      password,
      shoppingcart
    }
    return user;
  }

  return state;
}
