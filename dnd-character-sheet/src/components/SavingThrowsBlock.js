import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { calculateModifier } from '../utils';

function SavingThrowsBlock({ savingThrows, attributes, proficiencyBonus, onSaveThrowChange }) {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onSaveThrowChange(name, checked);
  };

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>
        Saving Throws
      </Typography>
      {Object.keys(attributes).map((attribute) => {
        const modifier = calculateModifier(attributes[attribute]);
        const value = modifier + (savingThrows[attribute] ? Number(proficiencyBonus) : 0);
        return (
          <Box key={attribute} display="flex" alignItems="center" mb={2}>
            <Checkbox
              name={attribute}
              checked={savingThrows[attribute]}
              onChange={handleCheckboxChange}
            />
            <Typography variant="body1" style={{ marginRight: '20px' }}>
              {attribute.charAt(0).toUpperCase() + attribute.slice(1)}:
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

export default SavingThrowsBlock;
