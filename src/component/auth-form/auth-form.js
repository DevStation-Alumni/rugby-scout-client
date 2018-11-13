import React from 'react';
import { connect } from 'react-redux';

import * as authActions from '../../actions/auth';
import SignupForm from '../signup/signup';
import LoginForm from '../login/login';

export class AuthFormContainer extends React.Component {
  constructor(props){
    super(props);

  }



  render() {
    console.log('PROPS', this.props.loginRequest);
    return (
      <section className="auth-form">
        {this.props.route === '/signup' ?
          <SignupForm signupRequest={this.props.signupRequest}/> :
          <LoginForm loginRequest={this.props.loginRequest}/>}
      </section>
    );
  }

}

const mapStateToProps = state => ({
  route: state.route,
});

const mapDispatchToProps = dispatch => ({
  loginRequest: user => dispatch(authActions.loginRequest(user)),
  signupRequest: user => dispatch(authActions.signupRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer);