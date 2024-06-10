import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import races from '../data/races';
import { calculateModifier, getNextLevelExperience } from '../utils';

function CharacterInfo({ character, onCharacterChange, onRaceChange }) {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const dexModifier = calculateModifier(character.attributes.dexterity);
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

  const handleRaceChange = (e) => {
    const { value } = e.target;
    onRaceChange(value);
  };

  const nextLevelExperience = getNextLevelExperience(character.level);

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
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
        className="input"
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
        className="input"
      />
      <TextField
        label="Level"
        name="level"
        type="number"
        value={character.level}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
        className="input textfield-readonly"
      />
      <FormControl fullWidth margin="normal" className="form-control">
        <InputLabel shrink>Race</InputLabel>
        <Select
          label="Race"
          name="race"
          value={character.race}
          onChange={handleRaceChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Race
          </MenuItem>
          {races.map((race) => (
            <MenuItem key={race.name} value={race.name}>
              {race.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Size"
        name="size"
        value={character.size}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
        className="input textfield-readonly"
      />
      <TextField
        label="Speed"
        name="speed"
        type="number"
        value={character.speed}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
        className="input textfield-readonly"
      />
      <TextField
        label="Initiative"
        name="initiative"
        type="number"
        value={character.initiative}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
        className="input textfield-readonly"
      />
      <TextField
        label="Armor Class"
        name="armorClass"
        type="number"
        value={character.armorClass}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
        className="input textfield-readonly"
      />
      <TextField
        label="Proficiency Bonus"
        name="proficiencyBonus"
        type="number"
        value={character.proficiencyBonus}
        InputProps={{ readOnly: true }}
        fullWidth
        margin="normal"
        className="input textfield-readonly"
      />
      <TextField
        label="Experience"
        name="experience"
        type="number"
        value={character.experience}
        onChange={handleChange}
        fullWidth
        margin="normal"
        className="input"
        helperText={nextLevelExperience !== null ? `Next level at ${nextLevelExperience} XP` : 'Max level reached'}
        FormHelperTextProps={{ className: 'helper-text' }}
      />
    </Box>
  );
}

export default CharacterInfo;
