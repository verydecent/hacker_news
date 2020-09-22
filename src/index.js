import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import store from './store';

const storiesData = store.getState();

ReactDOM.render(
  <React.StrictMode>
    <App
      // stories={stories}
      stories={storiesData}
      onArchive={() => { }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);