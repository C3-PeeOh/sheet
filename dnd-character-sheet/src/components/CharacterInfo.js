import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CustomTextField from './CustomTextField';
import races from '../data/races';
import classes from '../data/classes';
import { calculateModifier, getNextLevelExperience } from '../utils';

function CharacterInfo({ character, onCharacterChange, onRaceChange, onClassChange }) {
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

  const handleClassChange = (e) => {
    const { value } = e.target;
    onClassChange(value);
  };

  const handleHPMethodChange = (e) => {
    const { value } = e.target;
    onCharacterChange('hpCalcMethod', value);
  };

  const nextLevelExperience = getNextLevelExperience(character.level);

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Character Info
      </Typography>
      <CustomTextField
        label="Name"
        name="name"
        value={character.name}
        onChange={handleChange}
        error={errors.name}
        helperText={errors.name}
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
      <FormControl fullWidth margin="normal" className="form-control">
        <InputLabel shrink>Class</InputLabel>
        <Select
          label="Class"
          name="class"
          value={character.class}
          onChange={handleClassChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Class
          </MenuItem>
          {classes.map((cls) => (
            <MenuItem key={cls.name} value={cls.name}>
              {cls.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <CustomTextField
        label="Level"
        name="level"
        type="number"
        value={character.level}
        readOnly
      />
      <CustomTextField
        label="Size"
        name="size"
        value={character.size}
        readOnly
      />
      <CustomTextField
        label="Speed"
        name="speed"
        type="number"
        value={character.speed}
        readOnly
      />
      <CustomTextField
        label="Initiative"
        name="initiative"
        type="number"
        value={character.initiative}
        readOnly
      />
      <CustomTextField
        label="Armor Class"
        name="armorClass"
        type="number"
        value={character.armorClass}
        readOnly
      />
      <CustomTextField
        label="Proficiency Bonus"
        name="proficiencyBonus"
        type="number"
        value={character.proficiencyBonus}
        readOnly
      />
      <CustomTextField
        label="Experience"
        name="experience"
        type="number"
        value={character.experience}
        onChange={handleChange}
        helperText={nextLevelExperience !== null ? `Next level at ${nextLevelExperience} XP` : 'Max level reached'}
      />
      <Typography variant="h6" gutterBottom className="heading">
        Hit Points
      </Typography>
      <RadioGroup
        name="hpCalcMethod"
        value={character.hpCalcMethod}
        onChange={handleHPMethodChange}
      >
        <FormControlLabel value="maximum" control={<Radio />} label="Maximum" />
        <FormControlLabel value="average" control={<Radio />} label="Average" />
        <FormControlLabel value="random" control={<Radio />} label="Random" />
      </RadioGroup>
      <CustomTextField
        label="Hit Points"
        name="hitPoints"
        type="number"
        value={character.hitPoints}
        readOnly
      />
      <CustomTextField
        label="Current HP"
        name="currentHP"
        type="number"
        value={character.currentHP}
        onChange={handleChange}
      />
    </Box>
  );
}

export default CharacterInfo;
