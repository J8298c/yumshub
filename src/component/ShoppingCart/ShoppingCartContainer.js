import React from 'react';
import HeadContainer from '../Header/HeadContainer';
import ShoppingCart from './ShoppingCart';
import {connect} from 'react-redux';
import {Panel} from 'react-bootstrap';

class ShoppingCartContainer extends React.Component {
    render(props){
        // console.log(this.props.user);
        const shoppingcartDiv = [];
        if(this.props.user.shoppingcart){
            const {shoppingcart} = this.props.user;
            const cartItems = shoppingcart.map((item, index)=>{
                console.log(item.dish, 'the dish');
                console.log(item.description, 'the description');
                console.log(item.price, 'the price');
                return <ShoppingCart item={item} />
            })
            shoppingcartDiv.push(cartItems);
        }
        return (
            <div>
                <HeadContainer />
                <div>{shoppingcartDiv}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user} = state;
    console.log(user);
    return {
        user
    }
}
export default connect(mapStateToProps, null)(ShoppingCartContainer);