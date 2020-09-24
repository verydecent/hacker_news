import React from 'react';
import './Story.css';
import ButtonInline from './Button';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(doArchiveStory(id))
});

const Story = ({ story, columns, onArchive }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    objectID,
  } = story;
  return (
    <div className='story'>
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.title.width }}>
        {author}
      </span>
      <span style={{ width: columns.title.width }}>
        {num_comments}
      </span>
      <span style={{ width: columns.title.width }}>
        {points}
      </span>
      <span style={{ width: columns.title.width }}>
        <ButtonInline onClick={() => onArchive(objectID)} >
          Archive
        </ButtonInline>
      </span>
    </div>
  );
}

export default connect(mapDispatchToProps)(Story);