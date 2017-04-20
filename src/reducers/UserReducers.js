import {LOGGED_IN, SIGNED_IN, ADD_TO_CART} from '../actions/action';

let user = {
  email: null,
  password: null,
  displayName: null,
  shoppingcart : []
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
  else if (action.type === ADD_TO_CART){
    const {dish} = action;
    user.shoppingcart = {
      dish: dish.dish,
      description: dish.description,
      price: dish.price
    }
    const newState = Object.assign({}, state, {
      shoppingcart: [user.shoppingcart, ...state.shoppingcart]  
    });
    console.log(newState, 'the new state');
    return newState;
  }

  return state;
}
//polyfill for spread operator
//insert spread operator within object assign