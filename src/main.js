import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';
import { Provider } from 'react-redux';
import storeCreate from './lib/store';
import './style/main.scss';

const AppContainer = () => (
  <Provider store={storeCreate()}>
    <App />
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));