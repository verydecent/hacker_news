import React from 'react';
import Story from './Story';
import './Stories.css';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%'
  },
  author: {
    label: 'Title',
    width: '40%'
  },
  comments: {
    label: 'Title',
    width: '40%'
  },
  points: {
    label: 'Title',
    width: '40%'
  },
  archive: {
    label: 'Title',
    width: '40%'
  },
};

const Stories = ({ stories }) =>
  <div className='stories'>
    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
        columns={COLUMNS}
      />
    )}
  </div>

export default Stories;