import React from 'react';
import ProfilePhoto from '../profile-photo/profile-photo';
import ProfileDetail from '../profile-detail/profileDetail';
import StatsForm from '../stats-form/stats-form';
import StatsView from '../stats-view/stats-view';
import { Image, Grid, Col, Row } from 'react-bootstrap';



export default class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      position: '',
      role: '',
      bio: '',
      imageSrc: 'https://s3.amazonaws.com/rugbyscout-two/defaultimage.png',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reRender = this.reRender.bind(this);
  }

  componentDidMount() {
    this.props.profileAction.fetchProfile()
      .then(res => {
        this.setState(res.body.profile);
      });
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.profileAction.updateProfile(this.state);
  }

  reRender(imageSrc) {
    this.setState({ imageSrc });
  }

  render() {
    return (
      <section className="profile">
        <div>
          <Grid>
            <Row>
              <Col xs={12} sm={2} className="photo-submit">
                <Image src={this.state.imageSrc} responsive />
                <ProfilePhoto photoSubmit={this.props.photoSubmit} reRender={this.reRender} />
              </Col>
              <Col xs={12} sm={10} className="profile-form">
                <form onSubmit={this.handleSubmit}>
                  <input
                    name='firstName'
                    type='text'
                    placeholder='first name'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <input
                    name='lastName'
                    type='text'
                    placeholder='last name'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                  <input
                    name='position'
                    type='text'
                    placeholder='position'
                    value={this.state.position}
                    onChange={this.handleChange}
                  />
                  <input
                    name='role'
                    type='text'
                    placeholder='player or coach?'
                    value={this.state.role}
                    onChange={this.handleChange}
                  />
                  <textarea
                    name="bio"
                    cols="30"
                    rows="10"
                    value={this.state.bio}
                    onChange={this.handleChange}>
                  </textarea>
                  <button type="submit">submit</button>
                </form>
              </Col>
            </Row>
            <Row>
              {/* PROFILE DETAIL VIEW CAN GO HERE */}
              <ProfileDetail profile={this.state} />
            </Row>
            <Row>
              <Col className="stats-update" xs={12} sm={6} >
                <StatsForm updateStats={this.props.updateStats} fetchProfile={this.props.profileAction.fetchProfile} />
              </Col>
              <Col xs={12} sm={6} className="profile-stats" >
                <StatsView stats={this.props.stats} />
              </Col>
            </Row>
          </Grid>
        </div>

      </section>
    );
  }

}
