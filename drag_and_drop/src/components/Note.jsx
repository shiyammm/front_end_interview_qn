import React, { forwardRef } from 'react';

const Note = forwardRef(({ content, initialPosition, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: `${initialPosition?.x}px`,
        left: `${initialPosition?.y}px`,
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
});

export default Note;
