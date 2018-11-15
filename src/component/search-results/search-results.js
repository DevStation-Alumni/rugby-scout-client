import React from 'react';
import { Image } from 'react-bootstrap';


export default class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderResults(results) {
    return results.map(item => {
      return (
        <li key={item._id}>
          <Image src={item.imageSrc} responsive thumbnail />
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
          {this.renderResults(this.props.results)}
        </ul>
      </section>
    );
  }
}