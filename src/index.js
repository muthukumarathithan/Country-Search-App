import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './component/store/store';
import HomePage from './component/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/css/styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('root')
);
