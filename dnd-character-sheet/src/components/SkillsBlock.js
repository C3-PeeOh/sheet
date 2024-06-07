import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { calculateModifier } from '../utils';

const skillModifiers = {
  acrobatics: 'dexterity',
  animalHandling: 'wisdom',
  arcana: 'intelligence',
  athletics: 'strength',
  deception: 'charisma',
  history: 'intelligence',
  insight: 'wisdom',
  intimidation: 'charisma',
  investigation: 'intelligence',
  medicine: 'wisdom',
  nature: 'intelligence',
  perception: 'wisdom',
  performance: 'charisma',
  persuasion: 'charisma',
  religion: 'intelligence',
  sleightOfHand: 'dexterity',
  stealth: 'dexterity',
  survival: 'wisdom',
};

function SkillsBlock({ skills, attributes, proficiencyBonus, onSkillChange }) {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onSkillChange(name, checked);
  };

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      {Object.keys(skills).map((skill) => {
        const modifier = calculateModifier(attributes[skillModifiers[skill]]);
        const value = modifier + (skills[skill] ? proficiencyBonus : 0);
        return (
          <Box key={skill} display="flex" alignItems="center" mb={2}>
            <Checkbox
              name={skill}
              checked={skills[skill]}
              onChange={handleCheckboxChange}
            />
            <Typography variant="body1" style={{ marginRight: '20px' }}>
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
