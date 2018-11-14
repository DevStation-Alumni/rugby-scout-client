import React from 'react';


export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ?
      { ...props.profile } :
      { firstName: '', lastName: '', role: '', bio: '' };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }



  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.profileAction.createProfile(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <section className="profile">
        <form onSubmit={this.handleSubmit}>
          <input
            name='firstName'
            type='text'
            placeholder='first name'
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <input
            name='lastName'
            type='text'
            placeholder='last name'
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          <input
            name='role'
            type='text'
            placeholder='player or coach?'
            value={this.state.role}
            onChange={this.handleChange}
          />
          <textarea
            name="bio"
            cols="30"
            rows="10"
            value={this.state.bio}
            onChange={this.handleChange}>
          </textarea>
          <button type="submit">submit</button>
        </form>


      </section>
    );
  }

}
