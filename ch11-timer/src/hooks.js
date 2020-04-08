import { useRef, useEffect } from 'react';

export function useInterval(callback, delay) {
  const interval = useRef();

  useEffect(() => {
    interval.current = callback;
  }, [callback]);

  useEffect(() => {
    function getRefValue() {
      interval.current();
    }
    if (delay !== null) {
      const id = setInterval(getRefValue, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
}
