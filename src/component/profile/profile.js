import React from 'react';
import { connect } from 'react-redux';


export class ProfileContainer extends React.Component {
  constructor(props){
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);