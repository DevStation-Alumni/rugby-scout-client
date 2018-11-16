import React from 'react';

export default class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { profile } = this.props;
    return (
      <div className="profileItem">
        <img src={profile.imageSrc} />
        <p>{profile.firstName + ' ' + profile.lastName}</p>
      </div>
    );
  }
}