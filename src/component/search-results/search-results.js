import React from 'react';
import { Image } from 'react-bootstrap';
import ProfileItem from '../profile-item/profileItem';


export default class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderResults(results) {
    return results.map(profile => {
      return (
        <li key={profile._id}>
          <ProfileItem profile={profile} />
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