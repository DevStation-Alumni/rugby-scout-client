import React from 'react';
import { connect } from 'react-redux';


export class AuthFormContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isNewAccount: true,
    };
  }

  componentWillMount(){
    this.props.location === 'signup' ?
      this.setState({isNewAccount: true}) : 
      this.setState({isNewAccount: false});
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