import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './redux';
import { getCharacters } from './redux/characters/actions';

require('./index.html');

// Create redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk),
));

// Kick off things by getting all characters
store.dispatch(getCharacters());

// Create app
const container = document.querySelector('#app-container');

// Render app
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
  , container
);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
      , container
    );
  });
}
