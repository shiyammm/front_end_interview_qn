import React, { useState } from 'react';
import Notes from './components/Notes';
import Form from './components/Form';
import DateAndTime from './components/DateAndTime';
import Cursor from './components/Cursor';

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
    <div className="app">
      {/* <Notes notes={notes} setNotes={setNotes} /> */}
      <Form />
      <DateAndTime />
      <Cursor />
    </div>
  );
};

export default App;
