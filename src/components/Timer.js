import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeout }) => {
  const [time, setTime] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          onTimeout(); // Auto-submit quiz
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeout]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='text-center text-lg font-bold'>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
