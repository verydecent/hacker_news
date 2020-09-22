import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import store from './store';

const state = store.getState();

console.log('state', state);

ReactDOM.render(
  <React.StrictMode>
    <App
      stories={state.storyState}
      onArchive={() => { }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);