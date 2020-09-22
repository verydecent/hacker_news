import React from 'react';
import Stories from './Stories';

const App = ({
  stories
}) => {
  return (
    <div className='app'>
      App
      <Stories stories={stories} />
    </div>
  );
}

export default App;