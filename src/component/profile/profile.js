import React from 'react';
import ProfilePhoto from '../profile-photo/profile-photo';


export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      role: '',
      bio: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.profileAction.fetchProfile()
      .then(res => {
        this.setState(res.body.profile);
      });
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.profileAction.updateProfile(this.state);
    console.log(this.state);
  }

  render() {
    return (
      <section className="profile">
        <ProfilePhoto photoSubmit={this.props.photoSubmit} />
        <form onSubmit={this.handleSubmit}>
          <input
            name='firstName'
            type='text'
            placeholder='first name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            name='lastName'
            type='text'
            placeholder='last name'
            value={this.state.lastName}
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

        {/* PROFILE DETAIL VIEW CAN GO HERE */}

        {/* STATS FORM CAN GO HERE */}
        {/* STATS VIEW CAN GO HERE */}
      </section>
    );
  }

}
