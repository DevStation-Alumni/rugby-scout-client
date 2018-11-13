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


export class App extends React.Component {
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
                <Route path='/search-results' component={SearchResultsContainer} />
                <Route path='/profile' component={ProfileContainer} />
                <Route path='/profile/me' component={ProfileContainer} />
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
});

const mapDispatchToProps = dispatch => ({
  actions:
  {
    goToAbout: () => dispatch(route.switchRoute('/about')),
    goToLogin: () => dispatch(route.switchRoute('/login')),
    goToSignup: () => dispatch(route.switchRoute('/signup')),
    goToLanding: () => dispatch(route.switchRoute('/')),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);