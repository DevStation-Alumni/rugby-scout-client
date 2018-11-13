import React from 'react';
import { Navbar, Nav, NavItem, Image, FormGroup, FormControl, Button } from 'react-bootstrap';
import './_navbar.scss';





export default class CustomNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Navbar className="sticky-nav" default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src="https://s3.amazonaws.com/rugbyscout-two/rslogoonline.svg" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={this.props.actions.goToLanding} >
              Home</NavItem>
            <NavItem eventKey={2} onClick={this.props.actions.goToAbout} >
              About</NavItem>
            <NavItem eventKey={3} onClick={this.props.actions.goToLogin}>
              Login</NavItem>
            <NavItem eventKey={4} onClick={this.props.actions.goToSignup} >
              Register</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
