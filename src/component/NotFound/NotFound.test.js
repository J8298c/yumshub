import React from 'react';
import NotFound from './NotFound';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('<NotFound />', ()=>{
	it('should render correctly', ()=>{
		const wrapper = shallow(<NotFound />);
		expect(wrapper.find('div')).to.have.length(1);
		expect(wrapper.find('h1')).to.have.length(1);
	})
})