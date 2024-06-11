import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { calculateModifier } from '../utils';

function SavingThrowCheckbox({ attribute, checked, onChange }) {
  const handleCheckboxChange = (e) => {
    onChange(attribute, e.target.checked);
  };

  return (
    <Checkbox
      name={attribute}
      checked={checked}
      onChange={handleCheckboxChange}
    />
  );
}

function SavingThrowsBlock({ savingThrows, attributes, proficiencyBonus, onSaveThrowChange }) {
  const modifierValues = useMemo(() => {
    return Object.keys(attributes).reduce((acc, attribute) => {
      const modifier = calculateModifier(attributes[attribute]);
      const value = modifier + (savingThrows[attribute] ? Number(proficiencyBonus) : 0);
      acc[attribute] = value;
      return acc;
    }, {});
  }, [savingThrows, attributes, proficiencyBonus]);

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Saving Throws
      </Typography>
      {Object.keys(attributes).map((attribute) => (
        <Box key={attribute} className="flex-container">
          <SavingThrowCheckbox
            attribute={attribute}
            checked={savingThrows[attribute]}
            onChange={onSaveThrowChange}
          />
          <Typography variant="body1" className="margin-right">
            {attribute.charAt(0).toUpperCase() + attribute.slice(1)}:
          </Typography>
          <Typography variant="body1">
            {modifierValues[attribute]}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default SavingThrowsBlock;