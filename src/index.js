import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRouters from './routers/AppRouters'
import './Css/main.css'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <AppRouters />
  </Provider>,
  document.getElementById('root')
);
