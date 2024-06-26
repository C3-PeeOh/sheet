import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { calculateModifier } from '../utils';
import skills from '../data/skills';

function SkillsBlock({ skills: characterSkills, attributes, proficiencyBonus, onSkillChange }) {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onSkillChange(name, checked);
  };

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Skills
      </Typography>
      {Object.keys(characterSkills).map((skill) => {
        const modifier = calculateModifier(attributes[skills[skill]]);
        const value = modifier + (characterSkills[skill] ? Number(proficiencyBonus) : 0);
        return (
          <Box key={skill} className="flex-container">
            <Box className="button-container">
              <Checkbox
                name={skill}
                checked={characterSkills[skill]}
                onChange={handleCheckboxChange}
              />
              <TextField
                label={skill.charAt(0).toUpperCase() + skill.slice(1)}
                value={value}
                className="input margin-right"
                InputProps={{
                  readOnly: true,
                  style: { height: '100%' }
                }}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default SkillsBlock;
