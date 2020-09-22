import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import store from './store';

const stories = store.getState();

ReactDOM.render(
  <React.StrictMode>
    <App
      stories={stories}
      onArchive={() => { }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);