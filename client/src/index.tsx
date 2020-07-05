import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './Redux/Store';
import { Provider } from 'react-redux';

const reduxStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

