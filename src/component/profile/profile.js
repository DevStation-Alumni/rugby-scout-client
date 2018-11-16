import React from 'react';
import ProfilePhoto from '../profile-photo/profile-photo';
import ProfileDetail from '../profile-detail/profileDetail';
import StatsForm from '../stats-form/stats-form';
import StatsView from '../stats-view/stats-view';


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
    this.props.profileAction.updateProfile(this.state);
  }

  render() {
    console.log(this.props)
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
            name='position'
            type='text'
            placeholder='position'
            value={this.state.position}
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

        <ProfileDetail profile={this.state} />
        <StatsForm updateStats={this.props.updateStats} fetchProfile={this.props.profileAction.fetchProfile}/>
        <StatsView stats={this.props.stats}/>
      </section>
    );
  }

}
