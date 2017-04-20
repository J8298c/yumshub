import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import {FormGroup, Col, Form, Button} from 'react-bootstrap';
import InputLabels from './InputLabels';
import LoginContainer from './LoginContainer';
import {SignupContainer} from './SignupContainer';


describe('<InputLabels />', ()=>{
	it('renders form input and label elems', ()=>{
		const wrapper = shallow(<InputLabels />);
		expect(wrapper.find(FormGroup)).to.have.length(1);
		expect(wrapper.find(Col)).to.have.length(2);
	})
})

describe('<LoginContainer />', ()=>{
	it('renders the Login Form', ()=>{
	 	const wrapper = shallow(<LoginContainer />);
	 	expect(wrapper.find(Form)).to.have.length(1);
	 	expect(wrapper.find(FormGroup)).to.have.length(1);
	 	expect(wrapper.find(Col)).to.have.length(1);
	})
	it('Login submit triggers callback when clicked', ()=>{
		const onClick = sinon.spy();
		const wrapper = shallow(<LoginContainer onClick={onClick}/>);
		wrapper.find(Button).simulate('submit');
	})
})

// describe('<SignupContainer />', ()=>{
// 	it('renders the Signup Form', ()=>{
// 		const wrapper = shallow(<SignupContainer />);
// 		expect(wrapper.find(Form)).to.have.length(1);
// 		expect(wrapper.find(FormGroup)).to.have.length(1);
// 		expect(wrapper.find(Col)).to.have.length(1);
// 	})
// 	it('Signup Form submit triggers callback when clicked', ()=>{
// 		const onClick = sinon.spy();
// 		const wrapper = shallow(<SignupContainer onClick={onClick}/>);
// 		wrapper.find(Button).simulate('submit');
// 	})
// })