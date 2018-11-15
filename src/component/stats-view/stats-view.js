import React from 'react';

export default class StatsView extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    let {stats} = this.props;
    let statList = Object.keys(stats);

    return (
      <div>
        <h1>Rugby Statistics</h1>
        <table className='stats-table'>
          <tr>
            <th>Category</th>
            <th>Stat</th>
          </tr>
          {statList.map(stat => {
            return <tr key={stat}>
              <td>{stat}</td>
              <td>{stats[stat]}</td>
            </tr>;
          })}
        </table>
      </div>
    );
  }
}
