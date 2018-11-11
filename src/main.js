import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app';
import { Provider } from 'react-redux';

import './style/main.scss';
import storeCreate from './lib/store';

let AppContainer = () => (
  <Provider store={storeCreate()}>
    <App/>
  </Provider>
)

ReactDOM.render(<AppContainer />, document.getElementById('root'));