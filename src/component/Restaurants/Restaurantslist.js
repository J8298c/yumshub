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
      <Col xs={12} md={3} className="cards">
        <Link to={menuLink} ><Thumbnail className="restaurntcardimage" src={this.props.imageUrl} alt="300x200">
          <p className="restaurantcardtitle">{this.props.name}</p>
          <p className="restaurantcardphone"><span><Glyphicon glyph="phone" /></span>{this.props.phone}</p><p>{ratingsType}</p>
        </Thumbnail>
        </Link>
      </Col>
    </div>
    )
  }
}
