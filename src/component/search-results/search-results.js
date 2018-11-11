import React from 'react';
import { connect } from 'react-redux';


export class SearchResultsContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section className="search-results">
        <h1>Search Results</h1>
      </section>
    );
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);