import React from 'react';
import ReactDOM from 'react-dom';

require('./index.html');

const container = document.querySelector('#app-container');
const App = () =>
  <div>
    <p>Hello Alex</p>
  </div>;

ReactDOM.render(<App />, container);
