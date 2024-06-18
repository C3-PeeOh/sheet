import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import WeaponsModal from "./WeaponsModal";

const WeaponsSection = ({ weapons, onAddWeapon }) => {
  const [showWeaponsModal, setShowWeaponsModal] = useState(false);

  const handleAddWeapon = (weapon) => {
    onAddWeapon(weapon);
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
        <Box key={index} className="flex-container">
          <Typography variant="body1">{weapon.name}</Typography>
          <Button
            variant="outlined"
            onClick={() => console.log("Remove weapon functionality here")}
          >
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
