import React from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';
import StatsView from '../stats-view/stats-view';


export default class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { profile, stats } = this.props.profileDetail ? this.props.profileDetail : this.props;

    return (

      <div className="profilePreview">
        <Grid>
          <Row>
            <Col xs={12} sm={2} className="profile-photo">
              <h1>Profile Preview</h1>
              <Image src={profile.imageSrc} responsive />
            </Col>
            <Col xs={12} sm={10} className="profile-info">
              <h1>{profile.firstName + ' ' + profile.lastName}</h1>
              <h2>{profile.position}</h2>
              <p>{profile.bio}</p>
            </Col>

            <div className="statsView">
              <Row>
                <Col xs={12} sm={12} className="stats-view">
                  {stats ? <StatsView stats={stats[0]} /> : null}
                </Col>
              </Row>
            </div>
          </Row>
        </Grid>
      </div >
    );
  }
}