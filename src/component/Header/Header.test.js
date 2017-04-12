import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import Header from './Header';
import {Navbar, FormGroup, FormControl, Nav, NavItem, NavDropdown} from 'react-bootstrap';

describe('<Header />', ()=> {
	it('should render the header elements', ()=>{
		const wrapper = shallow(<Header />);
		expect(wrapper.find(Navbar)).to.have.length(1);
		expect(wrapper.find(Navbar.Header)).to.have.length(1);
		expect(wrapper.find(Navbar.Brand)).to.have.length(1);
		expect(wrapper.find(Navbar.Collapse)).to.have.length(1);
		expect(wrapper.find(Navbar.Form)).to.have.length(1);
		expect(wrapper.find(FormGroup)).to.have.length(1);
		expect(wrapper.find(FormControl)).to.have.length(1);
		expect(wrapper.find(Nav)).to.have.length(1);
		expect(wrapper.find(NavItem)).to.have.length(1);
		expect(wrapper.find(NavDropdown)).to.have.length(1);
	})
})
