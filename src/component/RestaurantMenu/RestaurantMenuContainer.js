import React from 'react';
import firebaseObject from '../../firebase';
import {Link} from 'react-router';
import {Glyphicon, Panel} from 'react-bootstrap';
import RestaurantMenuBanner from './RestaurantMenuBanner';
import HeadContainer from '../Header/HeadContainer';
import '../Restaurants/Restaurants.css';
import {connect} from 'react-redux';
import RestaurantMenu from './RestaurantMenu';

const goodeatsRef = firebaseObject.goodeatsRef;
let restaurant;

export default class RestaurantMenuContainer extends React.Component {
   componentWillMount(props){
       const {name} = this.props.params;
       console.log(name);
       goodeatsRef.orderByChild('name').startAt(name).endAt(name).on('child_added', (snapshot)=>{
         restaurant = snapshot.val();
       })
   }
   constructor(props){
     super(props);
     this.addToCart = this.addToCart.bind(this);
     
   }
  addToCart(event){
    const cart = [];
    if(cart.length === 0){
      cart.push(event.target);
    } else {
      cart.unshift(event.target);
    }
  
    console.log(cart);
  }
   render(props) {
     const {name, phone, rating, imageUrl, menu } = restaurant;
     const {address} = restaurant.location;
     const menuItem =[];
       menu.forEach((dish, index)=>{
         const listSet = <RestaurantMenu key={index} onClick={this.addToCart}
                   dish={dish.dish} description={dish.description} 
                   price={dish.price} />
         menuItem.push(listSet);
     });
     const phoneAndAddress = `${address} ${phone} `;
     const roundedRating = Math.round(rating);
     let starRating = [];
     for (let i = 0; i < roundedRating; i++){
       starRating.push(<Glyphicon glyph="star" key={i}/>);
     }
     const divStyle = {
                   color: '#fcfcfc',
                   backgroundImage: 'url(' + imageUrl + ')',
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center',
                   backgroundSize: 'cover'
                   };
       return (
           <div>
                <HeadContainer />
                <RestaurantMenuBanner divStyle={divStyle} name={name} phoneAndAddress={phoneAndAddress} starRating={starRating}
                  rating={rating}/>
               <div className="delivery-time">
                 <h5>Delivery Time 30 Mins</h5>
               </div>
               <div className="menu">
                 {menuItem}
               </div>
               <div className="go-home"><Link to="/">Return to Results</Link></div>
           </div>
       )
   }
}

