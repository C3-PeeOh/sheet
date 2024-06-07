import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function AttributesBlock({ attributes, onAttributeChange }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    // Validation
    let newErrors = { ...errors };
    if (intValue < 1) {
      newErrors[name] = `${name} must be at least 1`;
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);

    onAttributeChange(name, intValue);
  };

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Attributes
      </Typography>
      {Object.keys(attributes).map((attribute) => (
        <TextField
          key={attribute}
          label={attribute.charAt(0).toUpperCase() + attribute.slice(1)}
          name={attribute}
          type="number"
          value={attributes[attribute]}
          onChange={handleChange}
          error={!!errors[attribute]}
          helperText={errors[attribute]}
          fullWidth
          margin="normal"
        />
      ))}
    </Box>
  );
}

export default AttributesBlock;
