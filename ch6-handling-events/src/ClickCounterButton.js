import React from 'react';
import { Button } from '@material-ui/core';

function ClickCounterButton({ counter, count}) {
  
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={counter}
    >
      Don't click me {count} times
    </Button>
  );
}

export default ClickCounterButton;