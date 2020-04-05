import React, { useState } from 'react';
import ClickCounterButton from './ClickCounterButton';
import Counter from './Counter';
import VolumeButton from './VolumeButton';
import VolumeSlider from './VolumeSlider';

function App() {
  const [count, setCount] = useState(0);
  const [volume, setVolume] = useState(5);

  const volumeProps = {
    min: 0,
    max: 10,
    step: 1
  };

  return (
    <div>
      <ClickCounterButton 
        counter={() => setCount(count + 1)}
        count={count}
      />
      <Counter count={count} />
      <VolumeButton 
        volume={volume}
        volumeUp={() => setVolume(volume + volumeProps.step)}
        volumeDown={() => setVolume(volume - volumeProps.step)}
        min={volumeProps.min}
        max={volumeProps.max}
        step={volumeProps.step}
      />
      <VolumeSlider
        volume={volume}
        min={volumeProps.min}
        max={volumeProps.max}
        step={volumeProps.step}
        handleChange={(event, newValue) => setVolume(newValue)}
      />
    </div>
  );
}

export default App;
