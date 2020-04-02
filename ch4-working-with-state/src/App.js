import React, { useState, useEffect } from 'react';
import AnalogDisplay from './AnalogDisplay';
import DigitalDisplay from './DigitalDisplay';

function App() {
  const [currentTime, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date().toLocaleString()));

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <AnalogDisplay time={currentTime} />
      <DigitalDisplay time={currentTime} />
    </>
  );
}


export default App;
