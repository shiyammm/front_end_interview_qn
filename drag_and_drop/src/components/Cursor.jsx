import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [value, setValue] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleCursor = (e) => {
      const { clientX, clientY } = e;
      //   console.log(clientX, clientY);
      setValue((prev) => ({
        ...prev,
        x: clientX,
        y: clientY,
      }));
    };
    window.addEventListener('mousemove', handleCursor);

    return () => {
      window.removeEventListener('mousemove', handleCursor);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className="ball" style={{ top: value.y, left: value.x }}></div>
    </div>
  );
};

export default Cursor;
