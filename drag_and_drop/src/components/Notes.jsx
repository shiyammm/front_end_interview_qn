import React from 'react';
import Note from './Note';

const Notes = ({ notes, setNotes }) => {
  return (
    <div>
      {notes.map((note) => (
        <Note content={note.content} key={note.id} />
      ))}
    </div>
  );
};

export default Notes;
