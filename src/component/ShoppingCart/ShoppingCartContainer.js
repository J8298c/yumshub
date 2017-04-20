import React from 'react';
import HeadContainer from '../Header/HeadContainer';
import ShoppingCart from './ShoppingCart';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

class ShoppingCartContainer extends React.Component {
    render(props){
        const {shoppingcart} = this.props.user;
        const shoppingcartDiv = [];
        if(this.props.user.shoppingcart){
            const {shoppingcart} = this.props.user;
            const cartItems = shoppingcart.map((item, index)=>{
                return <ShoppingCart item={item} />
            })
            shoppingcartDiv.push(cartItems);
        } else {
            return <div>
                    <HeadContainer />
                    <h1>Sorry theres nothing in your cart</h1>
                    </div>
        }
        return (
            <div>
                <HeadContainer />
                <div>{shoppingcartDiv}</div>
                <div>your total: </div>
                <Button className="order-btn">Order</Button>
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