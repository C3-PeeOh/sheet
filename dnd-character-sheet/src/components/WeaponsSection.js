import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WeaponsModal from "./WeaponsModal";

const WeaponsSection = ({ weapons, onWeaponsChange }) => {
  const [showWeaponsModal, setShowWeaponsModal] = useState(false);

  const handleAddWeapon = (weapon) => {
    onWeaponsChange([...weapons, weapon]);
  };

  const handleRemoveWeapon = (index) => {
    const newWeapons = weapons.filter((_, i) => i !== index);
    onWeaponsChange(newWeapons);
  };

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Weapons
      </Typography>
      <Button variant="contained" onClick={() => setShowWeaponsModal(true)}>
        Add Weapon
      </Button>
      {weapons.map((weapon, index) => (
        <Box key={index} className="flex-container weapon-item">
          <Typography variant="body1">{weapon.name}</Typography>
          <Typography variant="body2" className="weapon-damage">
            Damage: {weapon.damage}
          </Typography>
          <Button variant="outlined" onClick={() => handleRemoveWeapon(index)}>
            Remove
          </Button>
        </Box>
      ))}
      <WeaponsModal
        open={showWeaponsModal}
        onClose={() => setShowWeaponsModal(false)}
        onAddWeapon={handleAddWeapon}
      />
    </Box>
  );
};

export default WeaponsSection;
