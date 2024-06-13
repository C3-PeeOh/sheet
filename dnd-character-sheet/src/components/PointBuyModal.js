import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const getPointCost = (score) => {
  if (score >= 8 && score <= 13) return 1;
  if (score === 14 || score === 15) return 2;
  if (score >= 16) return 3;
  return 0;
};

const PointBuyModal = ({ initialAttributes, onConfirm, onCancel }) => {
  const [attributes, setAttributes] = useState({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  });
  const [pointsLeft, setPointsLeft] = useState(27);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    const oldScore = attributes[name];
    let newPointsLeft = pointsLeft + getPointCost(oldScore) - getPointCost(intValue);

    if (newPointsLeft >= 0 && intValue >= 8 && intValue <= 18) {
      setAttributes({ ...attributes, [name]: intValue });
      setPointsLeft(newPointsLeft);
    }
  };

  const handleConfirm = () => {
    onConfirm(attributes);
  };

  return (
    <Modal open onClose={onCancel}>
      <Box className="modal">
        <Typography variant="h6" gutterBottom>
          Point Buy Mode
        </Typography>
        <Typography gutterBottom>
          Points Left: {pointsLeft}
        </Typography>
        {Object.keys(attributes).map((attribute) => (
          <TextField
            key={attribute}
            label={attribute.charAt(0).toUpperCase() + attribute.slice(1)}
            name={attribute}
            type="number"
            value={attributes[attribute]}
            onChange={handleChange}
            inputProps={{ min: 8, max: 18 }}
            fullWidth
            margin="normal"
          />
        ))}
        <Button variant="contained" onClick={handleConfirm} style={{ marginRight: '10px' }}>
          Confirm
        </Button>
        <Button variant="contained" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default PointBuyModal;
