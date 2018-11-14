import React from 'react';
import validator from 'validator';
import queryString from 'querystring';

const Tooltip = props => {
  return (
    <div className='tool-tip'>
      <span className='tool-tip-next'>{props.message}</span>
    </div>
  );
};

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };

    this.validateChange = this.validateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateChange(e) {
    let { name, value } = e.target;
    let error = null;

    if (name === 'email') {
      if (!value){error = 'email field cannot be empty';} 
      else if (!validator.isEmail(value)){
        error = 'email is not a valid email';
      }
    } else if (name === 'password') {
      if (!value) {
        error = 'password field cannot be empty';
      } else if (!validator.isAlphanumeric(value)){
        error = 'password can only contain numbers and letters';
      }
    }

    this.setState({[`${name}Error`]: error});
  }

  handleChange(e) {
    this.validateChange(e);

    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.emailError && !this.state.passwordError ){
      this.props.signupRequest({
        email: this.state.email,
        password: this.state.password,
      });
    }
  }

  render() {

    let googleLoginBaseURL = 'https://accounts.google.com/o/oauth2/v2/auth';

    let googleLoginQuery = queryString.stringify({
      client_id:__GOOGLE_CLIENT_ID__,
      response_type: 'code',
      redirect_uri: `${__API_URL__}/oauth`,
      scope: `openid profile email`,
      prompt: __DEBUG__ ? 'consent' : null,
    });

    let googleLoginURL = `${googleLoginBaseURL}?${googleLoginQuery}`;

    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <Tooltip message={this.state.emailError} />
          <input name='email' type='email' placeholder='email' value={this.state.email} onChange={this.handleChange} />
          <Tooltip message={this.state.passwordError} />
          <input name='password' type='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
          <button type="submit">Register</button>
        </form>
        <h3>Or, signup using Google</h3>
        <a href={googleLoginURL}>Google Link</a>
      </div>
    );
  }
}
