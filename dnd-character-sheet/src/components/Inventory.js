import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WeaponsSection from './WeaponsSection';
import ArmorSection from './ArmorSection';
import CoinPurseSection from './CoinPurseSection.js';
import GearSection from './GearSection';

function Inventory({ inventory, onInventoryChange }) {
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
      <WeaponsSection weapons={inventory.weapons} onWeaponsChange={handleWeaponsChange} />
      <ArmorSection armor={inventory.armor} onArmorChange={handleArmorChange} />
      <CoinPurseSection coinPurse={inventory.coinPurse} onCoinPurseChange={handleCoinPurseChange} />
      <GearSection gear={inventory.gear} onGearChange={handleGearChange} />
    </Box>
  );
}

export default Inventory;
