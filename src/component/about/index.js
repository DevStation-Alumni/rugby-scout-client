import React from 'react';
import { connect } from 'react-redux';

export class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="about">
        <h1>Get to know the team</h1>
      </section>

    );
  }
}


const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);