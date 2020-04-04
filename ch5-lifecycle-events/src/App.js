import React, { useEffect, useState, useRef } from 'react';

function Note( { secondsLeft }) {
  function confirmLeave(e) {
    const confirmationMessage = 'Do you really want to close?';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
  }

  useEffect(() => {
    console.log('Add event listener');
    window.addEventListener('beforeunload', confirmLeave);
    return () => {
      console.log('Remove event listener');
      window.removeEventListener('beforeunload', confirmLeave)
    };
  }, [])

  return (
    <div>Parent will remove in {secondsLeft} seconds</div>
  );
}

function useInterval(callback, delay) {
  const interval = useRef();

  useEffect(() => {
    interval.current = callback;
  }, [callback]);

  useEffect(() => {
    function getRefValue() {
      interval.current();
    }
    if (delay !== null) {
      console.log('set interval');
      const id = setInterval(getRefValue, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
}

function App() {
  const [secondsLeft, setSeconds] = useState(5);

  useInterval(
    () => setSeconds(secondsLeft - 1),
    secondsLeft === 0 ? null : 1000,
  );
    
  return (
    <div>
      {secondsLeft > 0
      ? <Note secondsLeft={secondsLeft} />
      : <div> Note was removed after {secondsLeft} </div>}
    </div>
  );
}

export default App;
