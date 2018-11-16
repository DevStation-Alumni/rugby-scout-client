import React from 'react';
import { Image, Grid, Col, Row } from 'react-bootstrap';

export default class StatsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state =
      {
        wins: '',
        losses: '',
        tries: '',
        conversions: '',
        penaltyGoals: '',
        dropGoals: '',
        tackles: '',
        offloads: '',
        handlingErrors: '',
        runMeters: '',
        lineBreaks: '',
        penaltiesConceded: '',
        yellowCards: '',
        redCards: '',
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfile()
      .then(res => {
        this.setState(res.body.stats);
      });
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateStats(this.state);
  }

  render() {
    return (
      <section className="stats-form">
        <h1>Edit Your Stats</h1>
        <Grid>
          <Row>

            <form onSubmit={this.handleSubmit}>
              <h2>Wins:</h2>
              <input name='wins' type='number' placeholder='wins' value={this.state.wins} onChange={this.handleChange} />
              <h2>Losses:</h2>
              <input name='losses' type='number' placeholder='losses' value={this.state.losses} onChange={this.handleChange} />
              <h2>Tries:</h2>
              <input name='tries' type='number' placeholder='tries' value={this.state.tries} onChange={this.handleChange} />
              <h2>Conversions:</h2>
              <input name='conversions' type='number' placeholder='conversions' value={this.state.conversions} onChange={this.handleChange} />
              <h2>Penalty Goals:</h2>
              <input name='penaltyGoals' type='number' placeholder='penaltyGoals' value={this.state.penaltyGoals} onChange={this.handleChange} />
              <h2>Drop Goals:</h2>
              <input name='dropGoals' type='number' placeholder='dropGoals' value={this.state.dropGoals} onChange={this.handleChange} />
              <h2>Tackles:</h2>
              <input name='tackles' type='number' placeholder='tackles' value={this.state.tackles} onChange={this.handleChange} />
              <h2>Off loads:</h2>
              <input name='offloads' type='number' placeholder='offloads' value={this.state.offloads} onChange={this.handleChange} />
              <h2>Handling Errors:</h2>
              <input name='handlingErrors' type='number' placeholder='handlingErrors' value={this.state.handlingErrors} onChange={this.handleChange} />
              <h2>Run Meters:</h2>
              <input name='runMeters' type='number' placeholder='runMeters' value={this.state.runMeters} onChange={this.handleChange} />
              <h2>Line Breaks:</h2>
              <input name='lineBreaks' type='number' placeholder='lineBreaks' value={this.state.lineBreaks} onChange={this.handleChange} />
              <h2>Penalties Conceded:</h2>
              <input name='penaltiesConceded' type='number' placeholder='penaltiesConceded' value={this.state.penaltiesConceded} onChange={this.handleChange} />
              <h2>Yellow Cards:</h2>
              <input name='yellowCards' type='number' placeholder='yellowCards' value={this.state.yellowCards} onChange={this.handleChange} />
              <h2>Red Cards:</h2>
              <input name='redCards' type='number' placeholder='redCards' value={this.state.redCards} onChange={this.handleChange} />
              <button type="submit">submit</button>
            </form>
          </Row>
        </Grid>
      </section>
    );
  }
}
