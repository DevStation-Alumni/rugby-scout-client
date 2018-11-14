import React from 'react';
import { connect } from 'react-redux';
import { MemoryRouter, Switch, Route, BrowserRouter } from 'react-router-dom';

import LandingContainer from './landing/landing';
import AuthContainer from './auth-form/auth-form';
import SearchResultsContainer from './search-results/search-results';
import ProfileContainer from './profile/profile';
import AboutContainer from './about/about';
import CustomNav from './navbar/navbar';

import * as route from '../actions/route';
import { fetchResultsRequest } from '../actions/search-actions';
import * as profileActions from '../actions/profile';
import * as profilePhoto from '../actions/profile-photo';

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
                <Route path='/search-results' render={(props) => <SearchResultsContainer {...props} results={this.props.results} />} />
                <Route path='/profile/me' render={(props) => <ProfileContainer {...props} profileAction={this.props.profileAction} photoSubmit={this.props.profilePhotoActions.createProfilePhoto} />} />
                <Route path='/profile' component={ProfileContainer} />
                <Route path='/about' component={AboutContainer} />
                <Route path='/' render={(props) => <LandingContainer {...props} api={this.props.api} />} />
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
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error,
});

const mapDispatchToProps = dispatch => ({
  actions:
  {
    goToAbout: () => dispatch(route.switchRoute('/about')),
    goToLogin: () => dispatch(route.switchRoute('/login')),
    goToSignup: () => dispatch(route.switchRoute('/signup')),
    goToLanding: () => dispatch(route.switchRoute('/')),
    goToProfile: () => dispatch(route.switchRoute('/profile/me')),
  },
  api: {
    fetchResultsRequest: query => dispatch(fetchResultsRequest(query)),
  },
  profileAction:
  {
    createProfile: (profile) => dispatch(profileActions.profileCreateRequest(profile)),

    fetchProfile: (profile) => dispatch(profileActions.profileFetchRequest(profile)),
  },
  profilePhotoActions:
  {
    createProfilePhoto: (profile) => dispatch(profilePhoto.profilePhotoRequest(profile)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);