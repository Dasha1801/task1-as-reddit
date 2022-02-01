import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './components/redux';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import Spinner from './components/spinner/spinner';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
