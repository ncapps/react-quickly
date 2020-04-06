import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('react');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Library</FormLabel>
      <RadioGroup aria-label="library" name="library" value={value} onChange={handleChange}>
        <FormControlLabel value="angular" control={<Radio />} label="Angular" />
        <FormControlLabel value="react" control={<Radio />} label="React" />
        <FormControlLabel value="polymer" control={<Radio />} label="Polymer" />
      </RadioGroup>
    </FormControl>
  );
}

