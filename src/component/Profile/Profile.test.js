import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {Profile} from './Profile';

const user = {
  email: 'someone@mail.com',
  displayName: 'someone'
}

describe('<Profile />', ()=>{
  it('should render the profile page', ()=>{
    const wrapper = shallow(<Profile user={user} />);
    expect(wrapper.find('div')).to.have.length(4);
    expect(wrapper.find('img')).to.have.length(1);
    expect(wrapper.find('label')).to.have.length(3);
    expect(wrapper.find('input')).to.have.length(3);
  })
})
