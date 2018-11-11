import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import * as route from '../../actions/route';
import './_navbar.scss';





export class CustomNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src="https://s3.amazonaws.com/rugbyscout-two/rslogoonline.svg" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={2} onClick={this.props.goToLanding} >
              Home</NavItem>
            <NavItem eventKey={1} onClick={this.props.goToAbout} >
              About</NavItem>
            <NavItem eventKey={3} >
              Login</NavItem>
            <NavItem eventKey={3} >
              SignUp</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export const mapStateToProps = (state) => ({
});

export const mapDispatchToProps = (dispatch) => ({
  goToAbout: () => dispatch(route.switchRoute('/about')),
  goToLanding: () => dispatch(route.switchRoute('/')),


});

export default connect(mapStateToProps, mapDispatchToProps)(CustomNav);
