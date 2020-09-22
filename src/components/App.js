import React from 'react';
import Stories from './Stories';

const App = ({
  stories
}) => {
  return (
    <div className=''>
      App
      <Stories stories={stories} />
    </div>
  );
}

export default App;