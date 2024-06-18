import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ArmorSection({ armor, onArmorChange }) {
  const handleAddArmor = () => {
    const newArmor = prompt('Enter armor name');
    if (newArmor) {
      onArmorChange([...armor, newArmor]);
    }
  };

  const handleRemoveArmor = (armorName) => {
    onArmorChange(armor.filter((item) => item !== armorName));
  };

  return (
    <Box className="box">
      <Typography variant="h6" gutterBottom className="heading">
        Armor
      </Typography>
      <Button onClick={handleAddArmor}>Add Armor</Button>
      <ul>
        {armor.map((item) => (
          <li key={item}>
            {item} <Button onClick={() => handleRemoveArmor(item)}>Remove</Button>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default ArmorSection;
