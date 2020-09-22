import React from 'react';
import './Story.css';

const ButtonInline = ({
  onClick,
  type = 'button',
  children
}) => {
  return (
    <button
      type={type}
      className='button-inline'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

const Story = ({ story, columns }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points,
    objectID,
    onArchive
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
export default Story;