import React from 'react';
import firebasebObject from './firebase';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logIn} from './actions/action';
import appReducers from './reducers/index';
import Profile from './component/Profile/Profile';
import LoginContainer from './component/LoginAndReg/LoginContainer';
import SignupContainer from './component/LoginAndReg/SignupContainer';
import NotFound from './component/NotFound/NotFound';
import RestaurantsContainer from './component/Restaurants/RestaurantsContainer';
import RestaurantMenuContainer from './component/RestaurantMenu/RestaurantMenuContainer';
import Contact from './component/Contact/Contact';
import ShoppingCartContainer from './component/ShoppingCart/ShoppingCartContainer';
import Intro from './component/Header/Intro';


const initialAppState = {
    user: {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
      shoppingcart: []
    },
    restaurants: []
};
export const store = createStore(appReducers, initialAppState, applyMiddleware(thunk));
const firebaseApp = firebasebObject.firebaseApp;
firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user) {
    const {email, displayName, shoppingcart} = user;
    store.dispatch(logIn(email, displayName, shoppingcart));
    browserHistory.push('/');
  } else {
    browserHistory.replace('/login');
  }
});

 const Routes = (
   <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={RestaurantsContainer}/>
        <Route path="/profile" component={Profile} />
        <Route path="/intro" component={Intro} />
        <Route path="restaurants/:name"  component={RestaurantMenuContainer} />
        <Route path="/login" component={LoginContainer}/>
        <Route path="/signup" component={SignupContainer} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={ShoppingCartContainer} />
        <Route path="*" component={NotFound}/>
    </Router>
  </Provider>
);

export default Routes;
