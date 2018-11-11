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
              <CustomNav />
            </header>
            <h1>Hello Alex!</h1>
            <MemoryRouter>
              <Switch location={{ pathname: this.props.route }} >
                <Route path='/landing' Component={LandingContainer} />
                <Route path='/signup' Component={AuthContainer} />
                <Route path='/login' Component={AuthContainer} />
                <Route path='/search-results' Component={SearchResultsContainer} />
                <Route path='/profile' Component={ProfileContainer} />
                <Route path='/about' Component={AboutContainer} />
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
  // logout:
  // login:
  goToAbout: () => dispatch(route.switchRoute('/about')),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);