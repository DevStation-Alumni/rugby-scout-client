import React from 'react';
import { connect } from 'react-redux';


export class LandingContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section className="profile">
        <h1>Landing</h1>
      </section>
    );
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);