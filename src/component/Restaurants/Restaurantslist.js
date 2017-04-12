import React from 'react';
import {Col, Thumbnail, Glyphicon} from 'react-bootstrap';
import './Restaurants.css';
import {Link} from 'react-router';
export default class Restaurantslist extends React.Component{
    render(props){
      const restaurantsProps = this.props.restaurantcard;
      const {name} = restaurantsProps;
      const menuLink = `restaurants/${name}`;
      const ratingsType = `${this.props.rating} ${this.props.type}`
    return(
      <div className="restaurants-cards">
      <Col xs={12} md={3}>
        <Link to={menuLink} ><Thumbnail src={this.props.imageUrl} alt="242x200">
          <h3>{this.props.name}</h3>
          <p className="phone"><span><Glyphicon glyph="phone" /></span>{this.props.phone}</p><p className="rating">{ratingsType}</p>
        </Thumbnail>
        </Link>
      </Col>
    </div>
    )
  }
}
