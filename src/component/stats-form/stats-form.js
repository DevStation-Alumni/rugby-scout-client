import React from 'react';

export default class StatsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.stats ?
      { ...props.stats } :
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
        <form onSubmit={this.handleSubmit}>
          <input name='wins' type='number' placeholder='wins' value={this.state.wins} onChange={this.handleChange} />
          <input name='losses' type='number' placeholder='losses' value={this.state.losses} onChange={this.handleChange} />
          <input name='tries' type='number' placeholder='tries' value={this.state.tries} onChange={this.handleChange} />
          <input name='conversions' type='number' placeholder='conversions' value={this.state.conversions} onChange={this.handleChange} />
          <input name='penaltyGoals' type='number' placeholder='penaltyGoals' value={this.state.penaltyGoals} onChange={this.handleChange} />
          <input name='dropGoals' type='number' placeholder='dropGoals' value={this.state.dropGoals} onChange={this.handleChange} />
          <input name='tackles' type='number' placeholder='tackles' value={this.state.tackles} onChange={this.handleChange} />
          <input name='offloads' type='number' placeholder='offloads' value={this.state.offloads} onChange={this.handleChange} />
          <input name='handlingErrors' type='number' placeholder='handlingErrors' value={this.state.handlingErrors} onChange={this.handleChange} />
          <input name='runMeters' type='number' placeholder='runMeters' value={this.state.runMeters} onChange={this.handleChange} />
          <input name='lineBreaks' type='number' placeholder='lineBreaks' value={this.state.lineBreaks} onChange={this.handleChange} />
          <input name='penaltiesConceded' type='number' placeholder='penaltiesConceded' value={this.state.penaltiesConceded} onChange={this.handleChange} />
          <input name='yellowCards' type='number' placeholder='yellowCards' value={this.state.yellowCards} onChange={this.handleChange} />
          <input name='redCards' type='number' placeholder='redCards' value={this.state.redCards} onChange={this.handleChange} />
          <button type="submit">submit</button>
        </form>
      </section>
    );
  }
}
