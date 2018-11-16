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
import { fetchResultsRequest, fetchTopTenRequest, fetchOneProfile } from '../actions/search-actions';
import * as profileActions from '../actions/profile';
import * as authActions from '../actions/auth';
import * as statsActions from '../actions/stats';
import { cookieFetch, cookieDelete, tokenFetch } from '../lib/util';

import * as profilePhoto from '../actions/profile-photo';
import ProfileDetail from './profile-detail/profileDetail';



export class App extends React.Component {

  componentDidMount() {
    let token = cookieFetch('token');

    if (token) {
      localStorage.setItem('token', token);
      cookieDelete('token');
      console.log(token);
      this.props.actions.goToProfile();
    }
    token = tokenFetch();
    console.log(token);
    this.props.authActions.login(token);

    this.props.profileAction.fetchProfile();

  }

  render() {
    console.log(this.props);
    return (
      <section className="app">
        <BrowserRouter>
          <div>
            <header>
              <CustomNav actions={this.props.actions} state={this.props} authActions={this.props.authActions} />
            </header>
            <MemoryRouter>
              <Switch location={{ pathname: this.props.route }} >
                <Route path='/signup' component={AuthContainer} />
                <Route path='/login' component={AuthContainer} />
                <Route path='/search-results' render={(props) => <SearchResultsContainer {...props} results={this.props.results} />} />

                <Route path='/profile/me' render={(props) => <ProfileContainer {...props} profileAction={this.props.profileAction} photoSubmit={this.props.profilePhotoActions.createProfilePhoto}  updateStats={this.props.statsActions.updateStats} stats={this.props.stats}/>} />

                <Route path='/profileDetail' render={(props) => <ProfileDetail {...props} profileDetail={this.props.profileDetail} />} />

                <Route path='/profile' component={ProfileContainer} />
                <Route path='/about' component={AboutContainer} />
                <Route path='/' render={(props) => <LandingContainer {...props} results={this.props.topTen} api={this.props.api} />} />
              </Switch>
            </MemoryRouter>
          </div>
        </BrowserRouter>
      </section>
    );
  }

}

const mapStateToProps = state => ({
  stats: state.stats,
  auth: state.auth,
  route: state.route,
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error,
  topTen: state.search.topTen,
  profileDetail: state.search.profileDetail,
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
    fetchTopTenRequest: () => dispatch(fetchTopTenRequest()),
    fetchOneProfile: id => dispatch(fetchOneProfile(id)),
  },
  profileAction:
  {
    updateProfile: (profile) => dispatch(profileActions.profileUpdateRequest(profile)),
    fetchProfile: () => dispatch(profileActions.profileFetchRequest()),
  },

  authActions:
  {
    login: token => dispatch(authActions.login(token)),
    logout: () => dispatch(authActions.logout()),
  },
  profilePhotoActions:
  {
    createProfilePhoto: (profile) => dispatch(profilePhoto.profilePhotoRequest(profile)),
  },
  statsActions:
  {
    updateStats: (stats) => dispatch(statsActions.statsUpdateRequest(stats)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);