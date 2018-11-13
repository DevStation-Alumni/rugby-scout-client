import React from 'react';
import { connect } from 'react-redux';
import { Image, Grid, Col, Row } from 'react-bootstrap';


export class LandingContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="profile">
        <div>
          <Image src="/assets/rugby1.png" className="rubyheader2" />
          <Grid>
            <h2>News</h2>
            <Row>
              <Col xs={12} sm={8} className="main-section">
                <p>As a college recruiter I want to use rugby scout to get stats and media related to a player so I can identify talent
                </p>
              </Col>
              <Col xs={12} sm={4} className="sidebar-section">
                <Image src="/assets/image-1.jpg" className="sharon-photo" rounded />
                <ul>
                  <li>Player 1</li>
                  <li>Player 2</li>
                  <li>Player 3</li>
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
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