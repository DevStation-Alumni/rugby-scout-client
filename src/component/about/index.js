import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import ReactCardFlipper from 'react-card-flipper';

export class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="about">
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <ReactCardFlipper levitate>
                <div><Image src="https://s3.amazonaws.com/rugbyscout-two/connor_rs_about.png" className="profile-pic" /> </div>
                <div><Image src="https://s3.amazonaws.com/rugbyscout-two/connor_rs_about.png" className="profile-pic" /> </div>
              </ReactCardFlipper>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="https://s3.amazonaws.com/rugbyscout-two/sharon_rs_about.png" className="profile-pic" />
              <h3> Sharon Miller</h3>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="https://s3.amazonaws.com/rugbyscout-two/alex_rs_about.png" className="profile-pic" />
              <h3> Alex Hanson</h3>
            </Col>
          </Row>
        </Grid >
      </section >

    );
  }
}


const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);