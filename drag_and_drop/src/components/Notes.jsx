import React, { createRef, useEffect, useRef } from 'react';
import Note from './Note';

const Notes = ({ notes, setNotes }) => {
  // What we're doing:

  /*

  - First we're getting every single note and populating it in Note component and giving some styles.
  - Then we are setting an random position for the every single note using Math.random method
  - Add then we're updating that updated notes to the setNotes and then we are storing it into the local storage, then we are parsing the notes from the local storage
    to stop switching it to the random position, to make it happen only when we drag.

  */

  const notesRef = useRef([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

    const updateNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id === note.id);

      if (savedNote) {
        return {
          ...note,
          position: savedNote.position,
        };
      } else {
        const position = determinePosition();
        return {
          ...note,
          position,
        };
      }
    });

    setNotes(updateNotes);
    localStorage.setItem('notes', JSON.stringify(updateNotes));
  }, [notes.length]);

  const determinePosition = () => {
    const maxX_Axis = window.innerWidth - 250;
    const maxY_Axis = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX_Axis),
      y: Math.floor(Math.random() * maxY_Axis),
    };
  };

  const handleMouseDragStart = (note, e) => {
    const { id } = note;
    console.log('Note:', note);

    const noteRef = notesRef.current[id].current;
    const rect = noteRef.getBoundingClientRect();
    const offSetX = e.clientX - rect.left;
    const offSetY = e.clientY - rect.top;

    const handleMouseMove = (e) => {
      const newX = e.clientX - offSetX;
      const newY = e.clientY - offSetY;

      noteRef.style.left = newX + 'px';
      noteRef.style.top = newY + 'px';
    };

    const handleMouseUp = (e) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      const finalRect = noteRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };

      updateNotesPosition(id, newPosition);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const updateNotesPosition = (id, newPosition) => {
    const updateNotes = notes.map((note) =>
      note.id === id ? { ...note, position: newPosition } : note,
    );

    setNotes(updateNotes);
    localStorage.setItem('notes', JSON.stringify(updateNotes));
  };

  return (
    <div>
      {notes.map((note) => (
        <Note
          ref={(element) => (notesRef.current[note.id] = element)}
          content={note.content}
          initialPosition={note.position}
          key={note.id}
          onMouseUp={(e) => handleMouseDragStart(note, e)}
        />
      ))}
    </div>
  );
};

export default Notes;
