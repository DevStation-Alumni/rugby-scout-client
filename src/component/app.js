import React from 'react';
import { connect } from 'react-redux';
import { MemoryRouter, Switch, Route, BrowserRouter } from 'react-router-dom';

import LandingContainer from './landing/landing';
import AuthContainer from './auth-form/auth-form';
import SearchResultsContainer from './search-results/search-results';
import ProfileContainer from './profile/profile';

import * as route from '../actions/route';


export class App extends React.Component {
  render() {
    return (
      <section className="app">
        <BrowserRouter>
          <div>
            <h1>Hello Alex!</h1>
            <MemoryRouter>
              <Switch location={{ pathname: this.props.route }} >
                <Route path='/landing' Component={LandingContainer} />
                <Route path='/signup' Component={AuthContainer} />
                <Route path='/login' Component={AuthContainer} />
                <Route path='/search-results' Component={SearchResultsContainer} />
                <Route path='/profile' Component={ProfileContainer} />
              </Switch>
            </MemoryRouter>
          </div>
        </BrowserRouter>
      </section>
    );
  }

}

const mapStateToProps = state => ({
  route: state.route,
});

const mapDispatchToProps = dispatch => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(App);