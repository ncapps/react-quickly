import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useInterval } from './hooks';

function Timer({ time }) {
  if (time === null || time === 0) {
    return <div/>
  }

  return <Typography variant='h2'>Time left: {time}</Typography>;
}

export default function TimerWrapper() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [paused, setPaused] = useState(true);

  useInterval(
    () => {
      if (timeLeft === 0) {
        setPaused(true);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    },
    paused ? null : 1000
  );

  function startTimer(time){
    setPaused(false);
    setTimeLeft(time);
  }

  const durations = [5, 10, 15];

  return (
    <>
      <Typography variant='h2'>Timer</Typography>
      <ButtonGroup variant="contained" color="primary">
        {durations.map((v,i) => <Button key={i} onClick={() => startTimer(v)}>
        {v}
        </Button>
        )}
      </ButtonGroup>
      <Timer time={timeLeft} />
    </>
  );
}