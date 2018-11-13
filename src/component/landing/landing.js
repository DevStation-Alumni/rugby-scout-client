import React from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';


export default class LandingContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="profile">
        <div>
          <Grid>
            <h2>News</h2>
            <Row >
              <Col xs={12} sm={12} className="main-section">
                <p>As a college recruiter I want to use rugby scout to get stats and media related to a player so I can identify talent
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4} className="sidebar-section">
                <ul>
                  <li>Player 1</li>
                  <li>Player 2</li>
                  <li>Player 3</li>
                  <li>Player 1</li>
                  <li>Player 2</li>
                  <li>Player 3</li>
                  <li>Player 1</li>
                  <li>Player 2</li>
                  <li>Player 3</li>
                </ul>
              </Col>
              <Col xs={12} sm={8}>
                <p> this is where our buttons will go</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </section >
    );
  }

}

