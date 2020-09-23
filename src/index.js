import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import store from './store';
import { STORY_ARCHIVE } from './constants/actionsTypes';
import { getReadableStories } from './selectors/story';

const state = store.getState();

console.log('state', state);

ReactDOM.render(
  <React.StrictMode>
    <App
      stories={getReadableStories(store.getState())}
      onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
    />
  </React.StrictMode>,
  document.getElementById('root')
);