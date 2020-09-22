import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import store from './store';

const stories = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

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