import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
// import ReactCardFlipper from 'react-card-flipper';
// import { library } from '@fortawesome/fontawesome-svg-core';
// library.add(faGithubSquare);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="about">
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="https://s3.amazonaws.com/rugbyscout-two/aboutphotos/connor.png" className="profile-pic" />
              <h3> Connor Crossley</h3><span><a href='https://github.com/Concross'> <FontAwesomeIcon icon={faGithubSquare} /></a> <a href='https://www.linkedin.com/in/connorcrossley/'> <FontAwesomeIcon icon={faLinkedinIn} /></a> </span>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="https://s3.amazonaws.com/rugbyscout-two/aboutphotos/sharon.png" className="profile-pic" />
              <h3> Sharon Miller</h3><span><a href='https://github.com/SharonMiller'> <FontAwesomeIcon icon={faGithubSquare} /></a> <a href='https://www.linkedin.com/in/millersharonk/'> <FontAwesomeIcon icon={faLinkedinIn} /></a> </span>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="https://s3.amazonaws.com/rugbyscout-two/aboutphotos/alex.png" className="profile-pic" />
              <h3> Alex Hanson</h3><span><a href='https://github.com/alexlhanson'> <FontAwesomeIcon icon={faGithubSquare} /></a> <a href='https://www.linkedin.com/in/alex-hanson1/'> <FontAwesomeIcon icon={faLinkedinIn} /></a> </span>
            </Col>
          </Row>
        </Grid >
      </section >

    );
  }
}
