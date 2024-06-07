import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CharacterInfo({ character, onCharacterChange }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    onCharacterChange(name, value);

    // Validation
    let newErrors = { ...errors };
    if (value.trim() === '') {
      newErrors[name] = `${name} is required`;
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);
  };

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Character Info
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={character.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Class"
        name="class"
        value={character.class}
        onChange={handleChange}
        error={!!errors.class}
        helperText={errors.class}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Level"
        name="level"
        type="number"
        value={character.level}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Race"
        name="race"
        value={character.race}
        onChange={handleChange}
        error={!!errors.race}
        helperText={errors.race}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Background"
        name="background"
        value={character.background}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
}

export default CharacterInfo;
