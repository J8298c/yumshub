import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {Col, Thumbnail} from 'react-bootstrap';
import Restaurantslist from './Restaurantslist';

const restaurants = {
  name: 'yum yum',
  phoneAndAddress: 'somewhere',
  rating: '5',
  starRating: '19',
  divStyle: 'colors',
  imageUrl: 'https://somewhere.com',
  dishes: 'boiled something',
}

describe('<Restaurantslist />',()=>{
  it('should render the card components in search page', ()=>{
    const wrapper = shallow(<Restaurantslist to={restaurants.name} restaurantcard={restaurants} imageUrl={restaurants.imageUrl} name={restaurants.name} phone={restaurants.phoneAndAddress} rating={restaurants.rating}/>);
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find(Col)).to.have.length(1);
    expect(wrapper.find(Thumbnail)).to.have.length(1);
  })
})
