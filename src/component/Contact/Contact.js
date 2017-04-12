import React from 'react'
import {Button} from 'react-bootstrap'
import Header from '../Header/Header';
import {Link} from 'react-router';
import './Contact.css'

export default class Contact extends React.Component{
  render(){
    return(
      <div>
        <div>
        <Header />
      </div>
        <div>
        <h2 className="contact-header">How Can we help serve you better</h2>
        <p className="service-statement">Our Customer Service team is ready to help 24/7</p>
        <Button className='support-button'>
          Email
        </Button>
        <div className="orDiv">
          Or
        </div>
        <Button className='support-button'>
          Email
        </Button>
      </div>
        <Link className="back-home" to="/">Back to search</Link>
      </div>
    )
  }
}
