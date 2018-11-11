import React from 'react';
import { connect, Provider } from 'react-redux';
import { MemoryRouter, Switch, Route, BrowserRouter } from 'react-router-dom';
import storeCreate from '../lib/store';

import LandingContainer from './landing/landing';
import AuthContainer from './auth-form/auth-form';
import SearchResultsContainer from './search-results/search-results';
import ProfileContainer from './profile/profile';

import * as route from '../actions/route';

const store = storeCreate(); 

export class App extends React.Component {
  render() {
    return (
      <section className="app">
        <Provider store={store}>
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
        </Provider>
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