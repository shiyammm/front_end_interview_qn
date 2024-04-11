import React, { useState } from 'react';
import Notes from './components/Notes';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'Do this',
    },
    {
      id: 2,
      content: "Don't do this",
    },
  ]);
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
