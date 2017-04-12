import React from 'react';
import InputLabels from './InputLabels';
import Logo from '../Logo/Logo';
import {Form, Button, FormGroup, Col} from 'react-bootstrap';
import firebaseObj from '../../firebase';
import {Link} from 'react-router';
import './Login.css';
const firebaseApp = firebaseObj.firebaseApp;
export default class LoginContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(event){
    event.preventDefault();
    const {email, password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
    .catch(err=>{
      this.setState({err})
    })
  }
  render(props){
    return(
        <div>
        <Logo />
        <Form onSubmit={this.onFormSubmit} className="login-form" horizontal>
          <InputLabels labeClass="input-label" type="text"
            placeholder="Enter your Email" inputClass="form-input"
            onChange={event=>this.setState({email: event.target.value})} labelName="Email"/>

          <InputLabels labeClass="input-label" type="password"
            placeholder="Enter your password" inputClass="password-input"
            onChange={event=>this.setState({password: event.target.value})} labelName="Password"/>

            <FormGroup>
                <Col>
                    <Button className="login-button" type="submit" onClick={this.signUp}>
                        Login
                    </Button>
                </Col>
            </FormGroup>
          <div className="signuplink"><Link to="/signup">Create New Account</Link></div>
        </Form>
        </div>
    )
  }
}
