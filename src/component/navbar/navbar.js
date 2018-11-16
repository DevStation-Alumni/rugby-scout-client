import React from 'react';
import { Navbar, Nav, NavItem, Image, FormGroup, FormControl, Button } from 'react-bootstrap';
import './_navbar.scss';
import { renderIf } from '../../lib/util';

export default class CustomNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { goToAbout, goToLanding, goToLogin, goToSignup, goToProfile } = this.props.actions;
    let { state } = this.props;
    return (
      <Navbar className="sticky-nav" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src="https://s3.amazonaws.com/rugbyscout-two/rslogoonline.svg" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={goToLanding} >Home</NavItem>
            <NavItem eventKey={2} onClick={goToAbout} >About</NavItem>
            {renderIf(!state.auth, <NavItem eventKey={3} onClick={goToLogin} >Login</NavItem>)}
            {renderIf(!state.auth, <NavItem eventKey={4} onClick={goToSignup} >Register</NavItem>)}
            {renderIf(state.auth, <NavItem eventKey={5} onClick={goToProfile} >{this.props.profile ? <img id="nav-profile" src={this.props.profile.imageSrc}></img>: 'Profile'}</NavItem>)}
            {renderIf(state.auth, <NavItem eventKey={6} onClick={this.props.authActions.logout} >Logout</NavItem>)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
