import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducer';
import { getCharacters } from './components/CharacterList/actions';

require('./index.html');

// Create redux store
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

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
