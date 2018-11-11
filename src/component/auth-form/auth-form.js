import React from 'react';
import { connect } from 'react-redux';


export class AuthFormContainer extends React.Component {
  constructor(props){
    super(props);
  }

  

  render() {
    return (
      <section className="auth-form">
        <h1>Signup/Login</h1>
      </section>
    );
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormContainer);