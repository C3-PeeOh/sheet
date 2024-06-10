import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { calculateModifier } from '../utils';

function AttributesBlock({ attributes, onAttributeChange }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    // Validation
    let newErrors = { ...errors };
    if (intValue < 1 || intValue > 20) {
      newErrors[name] = `${name} must be between 1 and 20`;
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);

    onAttributeChange(name, intValue);
  };

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Attributes
      </Typography>
      {Object.keys(attributes).map((attribute) => (
        <Box key={attribute} className="flex-container">
          <TextField
            label={attribute.charAt(0).toUpperCase() + attribute.slice(1)}
            name={attribute}
            type="number"
            value={attributes[attribute]}
            onChange={handleChange}
            error={!!errors[attribute]}
            helperText={errors[attribute]}
            className="input margin-right"
            fullWidth
          />
          <Typography variant="body1">
            Modifier: {calculateModifier(attributes[attribute])}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default AttributesBlock;
