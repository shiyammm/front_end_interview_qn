import React from 'react';

const Note = ({ content, ...props }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        border: '1px solid white',
        userSelect: 'none',
        padding: '2rem',
        backgroundColor: 'lightyellow',
        color: 'black',
        width: '200px',
        cursor: 'move',
      }}
      {...props}
    >
      📌{content}
    </div>
  );
};

export default Note;
