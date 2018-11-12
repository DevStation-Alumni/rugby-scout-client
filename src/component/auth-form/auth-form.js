import React from 'react';
import { connect } from 'react-redux';

import authActions from '../../actions/auth';
import SignupForm from '../signup/signup';
import LoginForm from '../login/login';

export class AuthFormContainer extends React.Component {
  constructor(props){
    super(props);

  }



  render() {
    return (
      <section className="auth-form">
        {this.props.route === '/signup' ?
          <SignupForm /> :
          <LoginForm />}
      </section>
    );
  }

}

const mapStateToProps = state => ({
  route: state.route,
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer);