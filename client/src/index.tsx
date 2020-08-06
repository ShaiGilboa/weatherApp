import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './Redux/Store';
import { Provider } from 'react-redux';
import * as serviceWorker from './PWA/serviceWorker';

const reduxStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
