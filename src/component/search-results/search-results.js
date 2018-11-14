import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';


export class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderResults(results) {
    results.map(item => {
      return (
        <li key={item._id}>
          <Image src={item.imageUrl} responsive thumbnail />
          <p>{item.firstName + ' ' + item.lastName}</p>
        </li>
      );
    });
  }
  render() {
    return (
      <section className="search-results">
        <h1>Search Results</h1>
        <ul>
          renderResults(this.props.query);
        </ul>
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