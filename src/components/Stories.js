import React from 'react';
import Story from './Story';
import './Stories.css';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';
import { getReadableStories } from '../selectors/story';

const mapStateToProps = state => ({
  stoies: getReadableStories(state)
});

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%'
  },
  author: {
    label: 'Author',
    width: '40%'
  },
  comments: {
    label: 'Comments',
    width: '40%'
  },
  points: {
    label: 'Points',
    width: '40%'
  },
  archive: {
    width: '40%'
  },
};

const Stories = ({ stories, onArchive }) =>
  <div className='stories'>
    <div className='stories-header'>
      {Object.keys(COLUMNS).map(key =>
        <span
          key={key}
          style={{ width: COLUMNS[key].width }}
        >
          {COLUMNS[key].label}
        </span>
      )}
    </div>
    {(stories || []).map(story =>
      <Story
        key={story.objectID}
        story={story}
        columns={COLUMNS}
        onArchive={onArchive}
      />
    )}
  </div>

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);