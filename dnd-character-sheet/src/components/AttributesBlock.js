import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { calculateModifier } from '../utils';
import PointBuyModal from './PointBuyModal';
import attributes from '../data/attributes';

const initialAttributes = { ...attributes };

function AttributesBlock({ attributes, onAttributeChange }) {
  const [errors, setErrors] = useState({});
  const [isEditable, setIsEditable] = useState(true);
  const [showPointBuyModal, setShowPointBuyModal] = useState(false);

  const applyBonuses = (baseAttrs) => {
    const updatedAttributes = { ...baseAttrs };
    // Apply racial and class bonuses here if needed
    onAttributeChange(updatedAttributes);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    let newErrors = { ...errors };
    if (intValue < 1 || intValue > 20) {
      newErrors[name] = `${name} must be between 1 and 20`;
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);

    const newAttributes = { ...attributes, [name]: intValue };
    onAttributeChange(newAttributes);
  };

  const handleLockToggle = () => {
    setIsEditable(!isEditable);
  };

  const handlePointBuyClick = () => {
    setShowPointBuyModal(true);
  };

  const handlePointBuyConfirm = (newAttributes) => {
    const updatedAttributes = { ...attributes, ...newAttributes };
    applyBonuses(updatedAttributes);
    setShowPointBuyModal(false);
  };

  const incrementAttribute = (attribute) => {
    const newValue = attributes[attribute] + 1;
    if (newValue <= 20) {
      onAttributeChange(attribute, newValue);
    }
  };

  const decrementAttribute = (attribute) => {
    const newValue = attributes[attribute] - 1;
    if (newValue >= 1) {
      onAttributeChange(attribute, newValue);
    }
  };

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Attributes
      </Typography>
      <Button variant="contained" onClick={handleLockToggle}>
        {isEditable ? 'Lock' : 'Unlock'}
      </Button>
      <Button variant="contained" onClick={handlePointBuyClick}>
        Point Buy Mode
      </Button>
      {Object.keys(attributes).filter(attr => initialAttributes.hasOwnProperty(attr)).map((attribute) => (
        <Box key={attribute} className="flex-container">
          <Box className="button-container">
            <Button
              variant="contained"
              disabled={!isEditable}
              onClick={() => decrementAttribute(attribute)}
              style={{ height: '50%', width: '100%' }}
            >
              -
            </Button>
            <Button
              variant="contained"
              disabled={!isEditable}
              onClick={() => incrementAttribute(attribute)}
              style={{ height: '50%', width: '100%' }}
            >
              +
            </Button>
          </Box>
          <TextField
            label={attribute.charAt(0).toUpperCase() + attribute.slice(1)}
            name={attribute}
            type="number"
            value={attributes[attribute]}
            onChange={handleChange}
            error={!!errors[attribute]}
            helperText={errors[attribute]}
            className="input margin-right"
            fullWidth
            InputProps={{
              readOnly: !isEditable,
              inputProps: { min: 1, max: 20 },
              style: { height: '100%' }
            }}
          />
          <TextField
            label="Modifier"
            value={calculateModifier(attributes[attribute])}
            className="input margin-right"
            fullWidth
            InputProps={{
              readOnly: true,
              style: { height: '100%' }
            }}
          />
        </Box>
      ))}
      {showPointBuyModal && (
        <PointBuyModal
          initialAttributes={attributes}
          onConfirm={handlePointBuyConfirm}
          onCancel={() => setShowPointBuyModal(false)}
        />
      )}
    </Box>
  );
}

export default AttributesBlock;
