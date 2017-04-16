import React, { Component } from 'react';
import './Restaurants.css';
import Restaurantslist from './Restaurantslist';
import firebaseObject from '../../firebase';
import {setRestaurant} from '../../actions/action';
import {connect} from 'react-redux';
import HeadContainer from '../Header/HeadContainer';



const goodeatsRef = firebaseObject.goodeatsRef;


class RestaurantsContainer extends Component {
  componentDidMount(props){
    goodeatsRef.on('value', snap =>{
      const restaurants = [];
      snap.forEach(restaurant => {
        let resturantObj = restaurant.val();
        restaurants.push(resturantObj);
      });
        this.props.setRestaurant(restaurants);
    })
  }
  
  render(props) {
    console.log(this.props.restaurants);
        const restaurantcards = this.props.restaurants.map((restaurantcard, index)=>{
            return(
                <Restaurantslist key={index} name={restaurantcard.name} imageUrl={restaurantcard.imageUrl}
                phone={restaurantcard.phone} rating={restaurantcard.rating} restaurantcard={restaurantcard} type={restaurantcard.type}/>
            )
        });
    return (
            <div>
              <HeadContainer/>
                <div className="restaurantlistcontainer">
                {restaurantcards}
                </div>
            </div>
    );
  }
}
function mapStateToProps(state){
    const {restaurants} = state;
    return {
        restaurants
    }
}

export default connect(mapStateToProps, { setRestaurant })(RestaurantsContainer);
