import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function NumberTextField() {
  const [number, setNumber] = React.useState('');

  const handleChange = (event) => setNumber(event.target.value.replace(/[^0-9]/ig, ''));
  
  return (
    <div>
      <TextField 
        label="Account Number"
        placeholder="123456"
        value={number}
        onChange={handleChange}
      />
    </div>
  );
}
