import React from 'react';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import RestaurantMenuBanner from './RestaurantMenuBanner';
import RestaurantMenuContainer from './RestaurantMenuContainer';

const restaurants = {
  name: 'yum yum',
  phoneAndAddress: 'somewhere',
  rating: '5',
  starRating: '19',
  divStyle: 'colors',
  imageUrl: 'https://somewhere.com',
  dishes: 'boiled something',
}

describe('<RestaurantMenuBanner />', ()=>{
  it('should render the banner area in the store front', ()=>{
    const wrapper = shallow(<RestaurantMenuBanner divStyle={restaurants.divStyle} name={restaurants.name} phoneAndAddress={restaurants.phoneAndAddress} starRating={restaurants.starRating} rating={restaurants.rating}/>);
    expect(wrapper.find('div')).to.have.length(3);
  })
})

describe('<RestaurantMenuContainer />', ()=>{
  it('should render the indiviual restaursnt page', ()=>{

  })
})
