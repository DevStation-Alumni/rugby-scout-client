import React from 'react';

export default class ProfileItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(this.props.profile._id);
  }

  render() {
    const { profile } = this.props;
    return (
      <div className="profileItem" onClick={this.handleClick}>
        <img src={profile.imageSrc} />
        <p>{profile.firstName + ' ' + profile.lastName}</p>
      </div>
    );
  }
}