import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { calculateModifier } from '../utils';

function AttributesBlock({ attributes, onAttributeChange }) {
  const [errors, setErrors] = useState({});
  const [pointsToDistribute, setPointsToDistribute] = useState(27);
  const [mode, setMode] = useState('free');
  const [baseAttributes, setBaseAttributes] = useState({ ...attributes });

  useEffect(() => {
    if (mode === 'point-buy') {
      setPointsToDistribute(27);
      const newAttributes = { ...baseAttributes };
      Object.keys(newAttributes).forEach((attribute) => {
        newAttributes[attribute] = 8;
      });
      setBaseAttributes(newAttributes);
      applyBonuses(newAttributes);
    } else {
      const newAttributes = { ...baseAttributes };
      Object.keys(newAttributes).forEach((attribute) => {
        newAttributes[attribute] = 10;
      });
      setBaseAttributes(newAttributes);
      applyBonuses(newAttributes);
    }
  }, [mode]);

  const applyBonuses = (baseAttrs) => {
    const updatedAttributes = { ...baseAttrs };
    // Apply racial and class bonuses here if needed
    onAttributeChange(updatedAttributes);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value);

    let newErrors = { ...errors };
    if (mode === 'point-buy' && (intValue < 8 || intValue > 18)) {
      newErrors[name] = `${name} must be between 8 and 18`;
    } else if (mode === 'free' && (intValue < 1 || intValue > 20)) {
      newErrors[name] = `${name} must be between 1 and 20`;
    } else {
      delete newErrors[name];
    }
    setErrors(newErrors);

    if (mode === 'point-buy') {
      const baseScore = attributes[name];
      let pointCost = 0;

      if (intValue > baseScore) {
        for (let i = baseScore + 1; i <= intValue; i++) {
          pointCost += getPointCost(i);
        }
      } else if (intValue < baseScore) {
        for (let i = baseScore; i > intValue; i--) {
          pointCost -= getPointCost(i);
        }
      }

      if (pointsToDistribute - pointCost >= 0) {
        onAttributeChange(name, intValue);
        setPointsToDistribute(pointsToDistribute - pointCost);
      }
    } else {
      onAttributeChange(name, intValue);
    }
  };

  const getPointCost = (score) => {
    if (score >= 8 && score <= 13) return 1;
    if (score === 14 || score === 15) return 2;
    if (score >= 16) return 3;
    return 0;
  };

  const handleModeChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Attributes
      </Typography>
      <RadioGroup
        name="mode"
        value={mode}
        onChange={handleModeChange}
        row
      >
        <FormControlLabel value="free" control={<Radio />} label="Free Mode" />
        <FormControlLabel value="point-buy" control={<Radio />} label="Point Buy Mode" />
      </RadioGroup>
      <Typography variant="h6" gutterBottom className="heading">
        Points to Distribute: {mode === 'free' ? '∞' : pointsToDistribute}
      </Typography>
      {Object.keys(attributes).map((attribute) => (
        <Box key={attribute} className="flex-container">
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
            InputProps={{ inputProps: { min: mode === 'point-buy' ? 8 : 1, max: mode === 'point-buy' ? 18 : 20 } }}
          />
          <Typography variant="body1">
            Modifier: {calculateModifier(attributes[attribute])}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default AttributesBlock;