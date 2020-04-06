import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    angular: true,
    react: false,
    polymer: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Library</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={state.angular} onChange={handleChange} name="angular" />}
            label="Angular"
          />
          <FormControlLabel
            control={<Checkbox checked={state.react} onChange={handleChange} name="react" />}
            label="React"
          />
          <FormControlLabel
            control={<Checkbox checked={state.polymer} onChange={handleChange} name="polymer" />}
            label="Polymer"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
