import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const getPointCost = (score) => {
  if (score >= 8 && score <= 13) return 1;
  if (score === 14 || score === 15) return 2;
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

  const handleIncrement = (attribute) => {
    const oldValue = attributes[attribute];
    const newValue = oldValue + 1;
    const cost = getPointCost(newValue);

    if (newValue <= 15 && pointsLeft >= cost) {
      setAttributes((prevAttributes) => ({
        ...prevAttributes,
        [attribute]: newValue,
      }));
      setPointsLeft((prevPoints) => prevPoints - cost);
    }
  };

  const handleDecrement = (attribute) => {
    const oldValue = attributes[attribute];
    const newValue = oldValue - 1;
    const cost = getPointCost(oldValue);

    if (newValue >= 8) {
      setAttributes((prevAttributes) => ({
        ...prevAttributes,
        [attribute]: newValue,
      }));
      setPointsLeft((prevPoints) => prevPoints + cost);
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
          <Box key={attribute} className="flex-container">
            <Box className="button-container">
              <Button
                variant="contained"
                onClick={() => handleIncrement(attribute)}
                style={{ height: '50%', width: '100%' }}
              >
                +
              </Button>
              <Button
                variant="contained"
                onClick={() => handleDecrement(attribute)}
                style={{ height: '50%', width: '100%' }}
              >
                -
              </Button>
            </Box>
            <TextField
              label={attribute.charAt(0).toUpperCase() + attribute.slice(1)}
              name={attribute}
              type="number"
              value={attributes[attribute]}
              inputProps={{ min: 8, max: 15, readOnly: true }}
              fullWidth
              margin="normal"
            />
          </Box>
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
