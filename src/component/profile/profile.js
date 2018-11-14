import React from 'react';
import { photoToDataUrl } from '../../lib/util';


export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile ?
      { ...props.profile, preview: '' } :
      { profilePhoto: null, preview: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { type, name, value, files } = e.target;
    let profilePhoto = files[0];
    this.setState({ profilePhoto });

    photoToDataUrl(profilePhoto)
      .then(preview => this.setState({ preview }))
      .catch(console.error);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.profileAction.createProfile(this.state);
  }

  render() {
    return (
      <section className="profile">
        <form className="profile-photo" onSubmit={this.handleSubmit}>
          <img src={this.state.preview} style={{ 'width': '25%' }} />
          <input type="file" name="profilePhoto" onChange={this.handleChange}></input>
          <button type="submit">submit</button>
        </form>
        <form>
          <input
            name='first name'
            type='text'
            placeholder='first name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>


      </section>
    );
  }

}
