import React from 'react';
import validator from 'validator';

const Tooltip = props => {
  return (
    <div className='tool-tip'>
      <span className='tool-tip-next'>{props.message}</span>
    </div>
  )
}

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      emailError: '',
      usernameError: '',
      passwordError: '',

    };

    this.validateChange = this.validateChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateChange(e) {
    let { name, value } = e.target;
    let error = null;

    if (name === 'username') {
      if (!value) {
        error = 'username field cannot be empty';
      } else if (!validator.isAlphanumeric(value)){
        error = 'username can only contain numbers and letters';
      }
    } else if (name === 'email') {
      if (!value){error = 'email field cannot be empty';} 
      if (!validator.isEmail(value)){
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
    e.preventDefault();
    this.validateChange(e);

    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.emailError && !this.state.passwordError && !this.state.usernameError){
      this.props.signupRequest({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      });
    }
  }

  render() {
    console.log('SIGNUP PROPS', this.props);
    return (
      <div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <Tooltip message={this.state.emailError} />
          <input name='email' type='email' placeholder='email' value={this.state.email} onChange={this.handleChange} />
          <Tooltip message={this.state.usernameError} />
          <input name='username' type='text' placeholder='username' value={this.state.username} onChange={this.handleChange} />
          <Tooltip message={this.state.passwordError} />
          <input name='password' type='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}