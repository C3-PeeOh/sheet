// Inventory.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WeaponsSection from "./WeaponsSection";
import ArmorSection from "./ArmorSection";
import CoinPurseSection from "./CoinPurseSection";
import GearSection from "./GearSection";

function Inventory({
  inventory,
  onInventoryChange,
  onArmorSelect,
  onShieldSelect,
  attributes, // Add attributes prop
}) {
  const handleWeaponsChange = (newWeapons) => {
    onInventoryChange({ ...inventory, weapons: newWeapons });
  };

  const handleArmorChange = (newArmor) => {
    onInventoryChange({ ...inventory, armor: newArmor });
  };

  const handleCoinPurseChange = (newCoinPurse) => {
    onInventoryChange({ ...inventory, coinPurse: newCoinPurse });
  };

  const handleGearChange = (newGear) => {
    onInventoryChange({ ...inventory, gear: newGear });
  };

  return (
    <Box className="box">
      <Typography variant="h5" gutterBottom className="heading">
        Inventory
      </Typography>
      <WeaponsSection
        weapons={inventory.weapons}
        onWeaponsChange={handleWeaponsChange}
      />
      <ArmorSection
        armor={inventory.armor}
        onArmorChange={handleArmorChange}
        onArmorSelect={onArmorSelect}
        onShieldSelect={onShieldSelect}
        attributes={attributes} // Pass attributes to ArmorSection
      />
      <CoinPurseSection
        coinPurse={inventory.coinPurse}
        onCoinPurseChange={handleCoinPurseChange}
      />
      <GearSection gear={inventory.gear} onGearChange={handleGearChange} />
    </Box>
  );
}

export default Inventory;
