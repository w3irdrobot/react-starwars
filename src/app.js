import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './redux';
import { getCharacters } from './redux/characters/actions';

require('./index.html');

// Create redux store
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Kick off things by getting all characters
store.dispatch(getCharacters());

// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , container
);
