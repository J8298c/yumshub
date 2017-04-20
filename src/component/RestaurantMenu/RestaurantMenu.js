import React from 'react';
import '../Restaurants/Restaurants.css';
import {Panel, Button} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addToCart} from '../../actions/action';

 class ResaurantMenu extends React.Component{
    constructor(props){
     super(props);
     this.addToCart = this.addToCart.bind(this);
   }
    addToCart(event){
    this.props.addToCart(this.props.dish);
    }

    render(props){
        const {dish, description, price} = this.props.dish; 
        return(
            <Panel>
            <div className="menu-Item"><p
           className="dish">{dish}</p>
           <p className="description">{description}</p>
           <p className="price"> ${price}</p>
         </div>
         <Button onClick={this.addToCart}>Add to cart</Button>
         </Panel>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart}, dispatch)
}
function mapStateToProps(state){
    const {user} = state;
    console.log(user, 'the user state');
    return {
        user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResaurantMenu);