import React from 'react';
import "../Restaurants/Restaurants.css";

export default class RestaurantMenuBanner extends React.Component {
  render(props){
    return(
      <div>
        <div className="banner" style={this.props.divStyle}>
            <div className="banner-info">
                <h3 className="banner-title">{this.props.name}</h3>
                <p className="banner-address">{this.props.phoneAndAddress}</p>
                <p className="banner-ratings"><span>{this.props.starRating}</span>{this.props.rating}</p>
            </div>
        </div>
      </div>
    )
  }
}
