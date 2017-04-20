import React from 'react';
import {Panel} from 'react-bootstrap';

export default class ShoppingCart extends React.Component{
    render(props){
        console.log(this.props.item)
        const {dish, description, price} = this.props.item;
        return (
                <Panel>
                     <div className="menu-Item">
                        <p className="dish">{dish}</p>
                        <p className="description">{description}</p>
                        <p className="price"> ${price}</p>
                     </div>
                </Panel>

        )
    }
}