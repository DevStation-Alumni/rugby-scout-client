import React from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import Slideshow from '../slideshow/slideshow.js';
import ProfileItem from '../profile-item/profileItem';

import ActionButton from '../action-button/actionButton';

export default class LandingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.api.fetchTopTenRequest();
  }

  renderTopTen(results) {
    return results.map(result => {
      return (
        <li key={result._id}>
          <ProfileItem profile={result.profile} />
        </li>
      );
    });
  }

  render() {
    const { results } = this.props;

    return (
      <section className="profile">
        <div>
          <Grid>
            <Row >
              <Col xs={0} sm={2} className="main-section"></Col>
              <Col xs={12} sm={8} className="main-section">
                <Slideshow className="slideshow" />
              </Col>
              <Col xs={0} sm={2} className="main-section"></Col>

            </Row>
            <Row className="landing-row-2">
              <Col xs={0} sm={2}></Col>
              <Col xs={12} sm={1} className="sidebar-section">
                <h1>Top 10 Rankings</h1>
                <ul>
                  {this.renderTopTen(results)}
                </ul>
              </Col>
              <Col className="button-section" xs={12} sm={7}>
                <ActionButton className="landing-buttons" src="https://s3.amazonaws.com/rugbyscout-two/landingbuttons/coach.jpg" api={this.props.api} query='player' />
                <ActionButton iclassName="landing-buttons" src="https://s3.amazonaws.com/rugbyscout-two/landingbuttons/player.jpg" api={this.props.api} query='coach' />
              </Col>
              <Col xs={0} sm={2}></Col>
            </Row>
          </Grid>
        </div>
      </section >
    );
  }

}

