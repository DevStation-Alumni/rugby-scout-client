import React from 'react';
import { connect } from 'react-redux';
import { MemoryRouter, Switch, Route, BrowserRouter } from 'react-router-dom';


import LandingContainer from './landing/landing';
import AuthContainer from './auth-form/auth-form';
import SearchResultsContainer from './search-results/search-results';
import ProfileContainer from './profile/profile';
import AboutContainer from './about/index';
import CustomNav from './navbar/index';

import * as route from '../actions/route';
import {
  fetchPlayersBegin,
  fetchPlayersSuccess,
  fetchPlayersFailure,
} from '../actions/search-actions';
import { cookieFetch, cookieDelete } from '../lib/util';


export class App extends React.Component {

  componentDidMount() {
    const token = cookieFetch('token');
    if (token) {
      localStorage.setItem('token', token);
      cookieDelete('token');
    }
  }

  render() {
    return (
      <section className="app">
        <BrowserRouter>
          <div>
            <header>
              <CustomNav actions={this.props.actions} />
            </header>
            <MemoryRouter>
              <Switch location={{ pathname: this.props.route }} >
                <Route path='/signup' component={AuthContainer} />
                <Route path='/login' component={AuthContainer} />
                {/* <Route path='/search-results' component={SearchResultsContainer} /> */}
                <Route path='/search-results' render={(props) => <SearchResultsContainer {...props} results={this.props.results} />} />
                <Route path='/profile/me' component={ProfileContainer} />
                <Route path='/profile' component={ProfileContainer} />
                <Route path='/about' component={AboutContainer} />
                <Route path='/' component={LandingContainer} />
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
  results: state.results,
});

const mapDispatchToProps = dispatch => ({
  actions:
  {
    goToAbout: () => dispatch(route.switchRoute('/about')),
    goToLogin: () => dispatch(route.switchRoute('/login')),
    goToSignup: () => dispatch(route.switchRoute('/signup')),
    goToLanding: () => dispatch(route.switchRoute('/')),
    fetchPlayersBegin: () => dispatch(fetchPlayersBegin()),
    fetchPlayersSuccess: players => dispatch(fetchPlayersSuccess(players)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);