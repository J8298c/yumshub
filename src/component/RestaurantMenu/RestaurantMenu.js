import React from 'react';
import '../Restaurants/Restaurants.css';
import {Panel} from 'react-bootstrap';

export default class ResaurantMenu extends React.Component{
    render(props){
        console.log(this.props);
        return(
            <Panel  onClick={this.props.onClick}>
            <div className="menu-Item"><p
           className="dish">{this.props.dish}</p>
           <p className="description">{this.props.description}</p>
           <p className="price"> ${this.props.price}</p>
         </div>
         </Panel>
        )
    }
}