import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import ArmorModal from "./ArmorModal";

const ArmorSection = ({ armor, onArmorChange }) => {
  const [showArmorModal, setShowArmorModal] = useState(false);
  const [selectedArmor, setSelectedArmor] = useState(null);
  const [selectedShield, setSelectedShield] = useState(null);

  const handleAddArmor = (newArmor) => {
    onArmorChange([...armor, newArmor]);
  };

  const handleRemoveArmor = (index) => {
    const newArmor = armor.filter((_, i) => i !== index);
    onArmorChange(newArmor);
  };

  const handleArmorSelect = (selectedArmor) => {
    setSelectedArmor(selectedArmor);
  };

  const handleShieldSelect = (selectedShield) => {
    setSelectedShield(selectedShield);
  };

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Armor
      </Typography>
      <Button variant="contained" onClick={() => setShowArmorModal(true)}>
        Add Armor
      </Button>
      {armor.map((item, index) => (
        <Box key={index} className="flex-container">
          <Typography variant="body1">{item.name}</Typography>
          <Typography variant="body2" className="armor-damage">
            AC: {item.AC}
          </Typography>
          {item.type === "shield" ? (
            <Checkbox
              checked={selectedShield === item}
              onChange={() =>
                handleShieldSelect(selectedShield === item ? null : item)
              }
            />
          ) : (
            <Radio
              checked={selectedArmor === item}
              onChange={() =>
                handleArmorSelect(selectedArmor === item ? null : item)
              }
            />
          )}
          <Button variant="outlined" onClick={() => handleRemoveArmor(index)}>
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
