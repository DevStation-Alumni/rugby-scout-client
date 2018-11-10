import React from 'react';
import { connect } from 'react-redux';
import { MemoryRouter, Switch, Route, BrowserRouter } from 'react-router-dom';

import * as route from '../actions/route';

export class App extends React.Component {
  render() {
    return (
      <section className="app">
        <BrowserRouter>
          <div>
            <h1>Hello App!</h1>
            <MemoryRouter>
              <Switch location={{ pathname: this.props.route }}>
              </Switch>
            </MemoryRouter>
          </div>
        </BrowserRouter>
      </section>
    );
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);