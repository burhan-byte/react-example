import React, { useReducer } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';

// Define action types (optional)
const actionTypes = {
  SET_HOSPITAL: 'SET_HOSPITAL',
  SET_PROVINCE: 'SET_PROVINCE',
  // Add other action types...
};

// Define initial state
const initialState = {
  hospital: '',
  province: '',
  // Add other states...
  install: false,
  md: false,
  pm: false,
  re: false,
  fm: false,
  call: false,
  sd: false,
  sol: false,
  takec: false,
  check: false,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_HOSPITAL:
      return { ...state, hospital: action.payload };
    case actionTypes.SET_PROVINCE:
      return { ...state, province: action.payload };
    default:
      return state;
  }
};

export default function About() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { hospital } = {}

  // Usage example
  const handleHospitalChange = (e) => {
    dispatch({ type: actionTypes.SET_HOSPITAL, payload: e.target.value });
  };

  const handleProvinceChange = (e) => {
    dispatch({ type: actionTypes.SET_PROVINCE, payload: e.target.value });
  };

  // Handlers for checkbox changes
  const handleCheckboxChange = (name) => (e) => {
    dispatch({ type: name, payload: e.target.checked });
  };

  return (
    <div>
      <TextField
        id="outlined-basic-hospital"
        label="โรงพยาบาล"
        value={hospital}
        variant="outlined"
      />
    </div>
  );
}
