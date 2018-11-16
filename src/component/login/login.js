import React from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';

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

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.loginRequest({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div>
        <Grid className="login-grid">
          <Row>
            <Col xs={12} sm={2} className="auth-input">
              <form className="login-form" onSubmit={this.handleSubmit}>
                <input name='email' type='text' placeholder='email' value={this.state.email} onChange={this.handleChange} />
                <input name='password' type='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
                <button type="submit">Login</button>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
