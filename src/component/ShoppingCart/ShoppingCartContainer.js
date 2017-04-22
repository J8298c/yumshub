import React from 'react';
import HeadContainer from '../Header/HeadContainer';
import ShoppingCart from './ShoppingCart';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {browserHistory, Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {clearCart} from '../../actions/action';
import './ShoppingCart.css'

class ShoppingCartContainer extends React.Component {
    constructor(props){
        super(props);
        this.checkOut = this.checkOut.bind(this);
    }
    checkOut(event){
        event.preventDefault();
        console.log('clicked');
        this.props.clearCart(this.props.user.shoppingcart);
        browserHistory.push('/');

    }
    render(props){
        const {shoppingcart} = this.props.user;
        const shoppingcartDiv = [];
        if(this.props.user.shoppingcart && this.props.user.shoppingcart.length >0){
            const {shoppingcart} = this.props.user;
            const cartItems = shoppingcart.map((item, index)=>{
                return <ShoppingCart item={item} />
            })
            shoppingcartDiv.push(cartItems);
        } else {
            return <div>
                    <HeadContainer />
                    <h1 className="empty-cart">Sorry theres nothing in your cart </h1>
                    <div className="empty-cart-link"><Link to="/">Click here to return to search </Link></div>
                    </div>
        }
        return (
            <div>
                <HeadContainer />
                <div className="shoppingcart-container">{shoppingcartDiv}</div>
                <Button className="login-button" onClick={this.checkOut}>Order</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({clearCart}, dispatch);
}

function mapStateToProps(state){
    const {user} = state;
    console.log(user);
    return {
        user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);