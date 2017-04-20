
export const LOGGED_IN = 'LOGGED_IN';
export function logIn(email,displayName){
    const action = {
      type: LOGGED_IN,
            email,
            displayName
    };
    return action;
}
export const SIGNED_IN = 'SIGNED_IN';
export function signin(email,password){
  const action = {
    type: SIGNED_IN,
    email,
    password
  };
  return action
}
export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export function setRestaurant(restaurants){
  const action = {
    type: SET_RESTAURANTS,
    restaurants
  };
  return action;
}
export const ADD_TO_CART = 'ADD_TO_CART';
export function addToCart(dish){
  const action = {
    type: ADD_TO_CART,
    dish
  };
  return action;
}
