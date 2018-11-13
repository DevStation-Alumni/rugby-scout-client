import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(event){
    event.preventDefault();

    this.props.loginRequest({
      username: this.state.username,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input name='username' type='text' placeholder='username' value={this.state.username} onChange={this.handleChange} />
          <input name='password' type='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
