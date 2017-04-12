import React from 'react';
import firebaseObject from '../../firebase';
import {Link} from 'react-router';
import {Glyphicon, Panel} from 'react-bootstrap';
import RestaurantMenuBanner from './RestaurantMenuBanner';
import '../Restaurants/Restaurants.css';

const goodeatsRef = firebaseObject.goodeatsRef;
let restaurant;

export default class RestaurantMenuContainer extends React.Component {
   componentWillMount(props){
       const {name} = this.props.params;
       goodeatsRef.orderByChild('name').startAt(name).endAt(name).on('child_added', (snapshot)=>{
         restaurant = snapshot.val();
       })
   }
   render(props) {
     const {name, dishes, imageUrl, phone, rating, type} = restaurant;
     const {address} = restaurant.location;
     const menuItem =[];
      dishes.forEach((dish, index)=>{
         const listSet = <Panel><div className="menu-Item" key={index}><p
           className="dish">{dish}</p><p className="description">Amet ex nisi ipsum ut dolore velit laborum consequat nostrud anim pariatur.</p><p className="price"> ${index + 20}</p><p className="type">Type: {type}</p>
         </div></Panel>
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
