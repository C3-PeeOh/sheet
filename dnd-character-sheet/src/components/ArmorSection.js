import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ArmorModal from "./ArmorModal";
import armors from "../data/armors";
import { calculateModifier } from "../utils";

const ArmorSection = ({
  armor,
  onArmorChange,
  onArmorSelect,
  onShieldSelect,
  selectedArmor,
  selectedShields = [],
  attributes,
}) => {
  const [showArmorModal, setShowArmorModal] = useState(false);

  const handleAddArmor = (newArmor) => {
    onArmorChange([...armor, newArmor]);
  };

  const handleRemoveArmor = (armorName) => {
    const updatedArmor = armor.filter(
      (armorItem) => armorItem.name !== armorName,
    );
    onArmorChange(updatedArmor);
    if (selectedArmor && selectedArmor.name === armorName) {
      onArmorSelect(null);
    }
  };

  const handleRemoveShield = (shieldName) => {
    const updatedShields = selectedShields.filter(
      (shield) => shield.name !== shieldName,
    );
    const updatedArmor = armor.filter(
      (armorItem) => armorItem.name !== shieldName,
    );
    onShieldSelect(updatedShields);
    onArmorChange(updatedArmor);
  };

  const handleArmorSelectChange = (event) => {
    const selectedArmor = armors.find(
      (armor) => armor.name === event.target.value,
    );
    onArmorSelect(selectedArmor);
  };

  const handleShieldSelectChange = (event) => {
    const selectedShield = armors.find(
      (armor) => armor.name === event.target.value,
    );
    let updatedShields = [...selectedShields];
    if (event.target.checked) {
      updatedShields.push(selectedShield);
    } else {
      updatedShields = updatedShields.filter(
        (shield) => shield.name !== selectedShield.name,
      );
    }
    onShieldSelect(updatedShields);
  };

  const calculateAC = (baseAC, modifier, maxModifier) => {
    let modifierValue = 0;
    if (modifier !== "none") {
      modifierValue = calculateModifier(attributes[modifier]);
      if (maxModifier !== "max" && maxModifier !== "none") {
        modifierValue = Math.min(modifierValue, maxModifier);
      }
    }
    return baseAC + modifierValue;
  };

  useEffect(() => {
    // Recalculate AC if attributes change
    if (selectedArmor) {
      onArmorSelect(selectedArmor);
    }
    if (selectedShields.length > 0) {
      onShieldSelect(selectedShields);
    }
  }, [attributes]);

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Armor
      </Typography>
      <Button variant="contained" onClick={() => setShowArmorModal(true)}>
        Add Armor
      </Button>
      <RadioGroup
        value={selectedArmor ? selectedArmor.name : ""}
        onChange={handleArmorSelectChange}
      >
        {armor
          .filter((armorItem) => armorItem.type !== "shield")
          .map((armorItem, index) => (
            <Box key={index} className="flex-container">
              <FormControlLabel
                value={armorItem.name}
                control={<Radio />}
                label={`${armorItem.name} (AC: ${calculateAC(
                  armorItem.AC,
                  armorItem.ACmodifier,
                  armorItem.MaxDexterity,
                )})`}
              />
              <Typography variant="body1">{armorItem.description}</Typography>
              <Button
                variant="outlined"
                onClick={() => handleRemoveArmor(armorItem.name)}
              >
                Remove
              </Button>
            </Box>
          ))}
      </RadioGroup>
      <Typography variant="h6" gutterBottom>
        Shields
      </Typography>
      {armor
        .filter((item) => item.type === "shield")
        .map((shield, index) => (
          <Box key={index} className="flex-container">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedShields.some(
                    (selected) => selected.name === shield.name,
                  )}
                  onChange={handleShieldSelectChange}
                  value={shield.name}
                />
              }
              label={`${shield.name} (AC: ${shield.AC})`}
            />
            <Button
              variant="outlined"
              onClick={() => handleRemoveShield(shield.name)}
            >
              Remove
            </Button>
          </Box>
        ))}
      <ArmorModal
        open={showArmorModal}
        onClose={() => setShowArmorModal(false)}
        onAddArmor={handleAddArmor}
      />
    </Box>
  );
};

export default ArmorSection;
