import React from 'react';

const Story = ({ story }) => {
  const {
    title,
    url,
    author,
    num_comments,
    points
  } = story;

  return (
    <div className=''>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </div>
  );
}
export default Story;