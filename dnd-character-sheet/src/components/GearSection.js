import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function GearSection({ gear, onGearChange }) {
  const handleAddGear = () => {
    const newGear = prompt('Enter gear name');
    if (newGear) {
      onGearChange([...gear, newGear]);
    }
  };

  const handleRemoveGear = (gearName) => {
    onGearChange(gear.filter((item) => item !== gearName));
  };

  return (
    <Box className="box">
      <Typography variant="h6" gutterBottom className="heading">
        Gear
      </Typography>
      <Button onClick={handleAddGear}>Add Gear</Button>
      <ul>
        {gear.map((item) => (
          <li key={item}>
            {item} <Button onClick={() => handleRemoveGear(item)}>Remove</Button>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default GearSection;
