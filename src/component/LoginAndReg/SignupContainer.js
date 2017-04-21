import React from 'react';
import InputLabels from './InputLabels';
import firebaseObj from '../../firebase';
import Logo from '../Logo/Logo';
import { Link } from 'react-router';
import {Form, FormGroup, Button, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import './Login.css';

const firebaseApp = firebaseObj.firebaseApp;

class SignupContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: ""
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  onFormSubmit(event){
      event.preventDefault()
  }

  signUp(){
      const {email, password, firstname, lastname} = this.state;
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
          .then(()=> {
          const user = firebaseApp.auth().currentUser;
          user.updateProfile({
              displayName: `${firstname} ${lastname}`
          }).then(()=>{
            console.log('success');
          }, err => {
            console.log(`sorry ${err} happened`);
          })
          })
          .catch(err=> {
            console.log(`sorry ${err} happened`);
          });
  }
    render(){
      return(
          <div className="logincontainer">
                <Logo />
          <Form onSubmit={this.onFormSubmit} className="signup-form" horizontal>

              <InputLabels  labelClass="input-label" type="text" placeholder="Enter Your Email" className="form-input"
                      onChange={event => this.setState({email: event.target.value})} labelName="Email"/>

              <InputLabels  labelClass="input-label" type="password" placeholder="Enter A Password"
                            className="form-input"
                            onChange={event => this.setState({password: event.target.value})} labelName="Password"/>

              <InputLabels  labelClass="input-label" type="text" placeholder="Enter Your FirstName"
                            className="form-input" onChange={event => this.setState({firstname: event.target.value})} labelName="First Name"/>

              <InputLabels  labelClass="input-label" type="text" placeholder="Enter Your LastName"
                            className="form-input" onChange={event => this.setState({lastname: event.target.value})} labelName="Last Name"/>

              <FormGroup>
                  <Col smOffset={2} sm={10}>
                      <Link to="/intro"><Button className="login-button signup-button" type="submit" onClick={this.signUp}>
                          Sign Up
                      </Button></Link>
                  </Col>
              </FormGroup>
              <div className="signuplink"><Link to="/login">Already a member</Link></div>
        </Form>
        </div>
          )
    }
}

const mapStateToProps = (state)=>{
    const {email, password, firstname, lastname, shoppingcart} = state;
    return {
        email,
        password,
        firstname,
        lastname,
        shoppingcart
    }
}

export default connect(mapStateToProps, null)(SignupContainer);
