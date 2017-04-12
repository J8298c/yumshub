import React from 'react';
import {FormGroup, FormControl, Col, ControlLabel} from 'react-bootstrap';
import './Login.css';

export default class InputLabels extends React.Component{
  render(props){
    return(
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2} className={this.props.labeClass}>
          {this.props.labelName}
        </Col>
        <Col sm={8}>
          <FormControl type={this.props.type} placeholder={this.props.placeholder} className={this.props.inputClass} onChange={this.props.onChange}/>
        </Col>
      </FormGroup>
    )
  }
}
