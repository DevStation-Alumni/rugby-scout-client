import React from 'react';
import { connect } from 'react-redux';


export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="profile">
        <h1>Profile</h1>
      </section>
    );
  }

}
