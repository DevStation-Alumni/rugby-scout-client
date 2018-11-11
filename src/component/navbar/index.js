import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './navbar.scss';





export default class CustomNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src="/assets/rslogoonline.svg" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} onClick>
              About</NavItem>
            <NavItem eventKey={2} onClick={this.props.}>
              Home</NavItem>
            <NavItem eventKey={3} onClick>
              Login</NavItem>
            <NavItem eventKey={3} onClick>
              SignUp</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}