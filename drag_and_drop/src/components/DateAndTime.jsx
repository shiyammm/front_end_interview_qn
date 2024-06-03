import React, { useEffect, useState } from 'react';

const DateAndTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <span className="hour">{date.getHours()}</span>
      <span>:</span>
      <span className="minutes">{date.getMinutes()}</span>
      <span>:</span>
      <span className="seconds">{date.getSeconds()}</span>
      <span>:</span>
      <span>{date.getHours() > 12 ? 'PM' : 'AM'}</span>
    </div>
  );
};

export default DateAndTime;
