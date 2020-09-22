import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import store from './store';
import { STORY_ARCHIVE } from './constants/actionsTypes';

const state = store.getState();

console.log('state', state);

ReactDOM.render(
  <React.StrictMode>
    <App
      stories={state.storyState}
      onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
    />
  </React.StrictMode>,
  document.getElementById('root')
);