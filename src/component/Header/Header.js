import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, Glyphicon} from 'react-bootstrap';
import './Header.css';
import {LinkContainer} from 'react-router-bootstrap';



 class Header extends React.Component {
  render(props){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" className="site-title"><span className="firstletter">Y</span><span className="secondletter">U</span><span className="thirdletter">M</span>
                <span className="fourthletter">S</span></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="nav-drop">
          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" className="app-search-bar" onChange={this.props.onChange}/>
                <Button onClick={this.props.onSubmit}>Search</Button>
            </FormGroup>
            {' '}
          </Navbar.Form>
          <Nav pullRight>
          <NavItem eventKey={1} href="#"><Glyphicon className="shoppingcart" glyph="shopping-cart"/></NavItem>
            <LinkContainer to={{pathname:'/contact'}}>
            <NavItem eventKey={1} href="#">Contact Us</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
          <LinkContainer to={{pathname:'/profile'}}><MenuItem eventKey={3.2}>Profile</MenuItem></LinkContainer>
          <MenuItem eventKey={3.3} onClick={this.props.onClick}>Sign Out</MenuItem>
        </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header;
