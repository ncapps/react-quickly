import React from 'react';
import { Button } from '@material-ui/core';

function VolumeButton({ volume, volumeUp, volumeDown, min, max, step }){

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={volumeDown}
        disabled={volume === min ? true : false }
      >
        1 less ({volume - step})
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={volumeUp}
        disabled={volume === max ? true : false}
      >
        1 more ({volume + step})
      </Button>
    </>
  );
}

export default VolumeButton;