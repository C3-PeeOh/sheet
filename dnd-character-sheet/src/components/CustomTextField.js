import React from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ label, name, value, onChange, error, helperText, readOnly, type = 'text' }) => {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={helperText}
      fullWidth
      margin="normal"
      className={`input ${readOnly ? 'textfield-readonly' : ''}`}
      InputProps={readOnly ? { readOnly: true } : {}}
      FormHelperTextProps={{ className: 'helper-text' }}
    />
  );
};

export default CustomTextField;
