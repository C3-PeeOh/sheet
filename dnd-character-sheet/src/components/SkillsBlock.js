import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SkillsBlock({ skills, onSkillChange }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    // Validation
    let newErrors = { ...errors };
    if (intValue < 0 || intValue > 20) {
      newErrors[name] = `${name} must be between 0 and 20`;
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);

    onSkillChange(name, intValue);
  };

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      {Object.keys(skills).map((skill) => (
        <TextField
          key={skill}
          label={skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1').trim()}
          name={skill}
          type="number"
          value={skills[skill]}
          onChange={handleChange}
          error={!!errors[skill]}
          helperText={errors[skill]}
          fullWidth
          margin="normal"
        />
      ))}
    </Box>
  );
}

export default SkillsBlock;
