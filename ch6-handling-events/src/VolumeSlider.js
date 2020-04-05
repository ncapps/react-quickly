import React from 'react';
import { Slider } from '@material-ui/core';

function VolumeSlider({ volume, step, min, max, handleChange}) {
  return <Slider
    step={step}
    min={min}
    max={max}
    value={volume}
    marks
    valueLabelDisplay="auto"
    onChange={handleChange}
  />;
}

export default VolumeSlider;