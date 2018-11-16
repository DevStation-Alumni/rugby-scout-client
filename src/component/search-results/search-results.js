import React from 'react';
import { Image } from 'react-bootstrap';
import ProfileItem from '../profile-item/profileItem';
import './search-results.scss';


export default class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  renderResults(results) {
    return results.map(profile => {
      return (
        <li key={profile._id}>
          <ProfileItem profile={profile} onClick={this.props.api.fetchOneProfile} />
        </li>
      );
    });
  }

  render() {
    return (
      <section className="searchResults">
        <h1>Search Results</h1>
        <ul>
          {this.renderResults(this.props.results)}
        </ul>
      </section>
    );
  }
}