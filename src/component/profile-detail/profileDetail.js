import React from 'react';
import { Image } from 'react-bootstrap';

export default class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    const { profile } = this.props.profileDetail ? this.props.profileDetail : this.props;
    return (
      <div className="profilePreview">
        <h1>Profile Preview</h1>
        <Image src={profile.imageSrc} responsive />
        <h1>{profile.firstName + ' ' + profile.lastName}</h1>
        <h2>{profile.position}</h2>
        <p>{profile.bio}</p>
      </div>
    );
  }
}