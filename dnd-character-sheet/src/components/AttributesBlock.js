import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { calculateModifier } from '../utils';
import PointBuyModal from './PointBuyModal';
import attributes from '../data/attributes';
import races from '../data/races';

const initialAttributes = { ...attributes };

function AttributesBlock({ attributes, onAttributeChange, race }) {
  const [errors, setErrors] = useState({});
  const [isEditable, setIsEditable] = useState(true);
  const [showPointBuyModal, setShowPointBuyModal] = useState(false);

  const applyBonuses = (baseAttrs) => {
    const updatedAttributes = { ...baseAttrs };
    if (race) {
      const selectedRace = races.find(r => r.name === race);
      if (selectedRace) {
        Object.keys(selectedRace.abilityBonuses).forEach((key) => {
          updatedAttributes[key] += selectedRace.abilityBonuses[key];
        });
      }
    }
    onAttributeChange(updatedAttributes);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    let newErrors = { ...errors };
    if (intValue < 0 || intValue > 99) {
      newErrors[name] = `${name} must be between 0 and 99`;
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
    if (newValue <= 99) {
      const newAttributes = { ...attributes, [attribute]: newValue };
      onAttributeChange(newAttributes);
    }
  };

  const decrementAttribute = (attribute) => {
    const newValue = attributes[attribute] - 1;
    if (newValue >= 0) {
      const newAttributes = { ...attributes, [attribute]: newValue };
      onAttributeChange(newAttributes);
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
        <Box key={attribute} className="flex-container attribute-container">
          <Box className="button-container">
            <Button
              variant="contained"
              disabled={!isEditable}
              onClick={() => incrementAttribute(attribute)}
              style={{ height: '50%', width: '100%' }}
            >
              +
            </Button>
            <Button
              variant="contained"
              disabled={!isEditable}
              onClick={() => decrementAttribute(attribute)}
              style={{ height: '50%', width: '100%' }}
            >
              -
            </Button>
          </Box>
          <Box className="attribute-box">
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
                inputProps: { min: 0, max: 99 },
                style: { height: '100%' }
              }}
            />
            <Box className="modifier-circle">
              <Typography variant="body2">
                {calculateModifier(attributes[attribute])}
              </Typography>
            </Box>
          </Box>
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
