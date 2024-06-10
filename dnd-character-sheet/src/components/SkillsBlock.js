import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
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
            <Checkbox
              name={skill}
              checked={characterSkills[skill]}
              onChange={handleCheckboxChange}
            />
            <Typography variant="body1" className="margin-right">
              {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1').trim()}:
            </Typography>
            <Typography variant="body1">
              {value}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default SkillsBlock;
