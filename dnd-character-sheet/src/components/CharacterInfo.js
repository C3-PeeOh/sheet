import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { calculateModifier } from '../utils';

function CharacterInfo({ character, onCharacterChange }) {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const dexModifier = calculateModifier(character.attributes.dexterity);
    console.log(`Dex Modifier: ${dexModifier}`);  // Debugging output
    onCharacterChange('initiative', dexModifier);
    onCharacterChange('armorClass', 10 + dexModifier);
  }, [character.attributes.dexterity]);

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
      <TextField
        label="Speed"
        name="speed"
        type="number"
        value={character.speed}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Initiative"
        name="initiative"
        type="number"
        value={character.initiative}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Armor Class"
        name="armorClass"
        type="number"
        value={character.armorClass}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Proficiency Bonus"
        name="proficiencyBonus"
        type="number"
        value={character.proficiencyBonus}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
    </Box>
  );
}

export default CharacterInfo;
