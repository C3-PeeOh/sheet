import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CoinPurseSection({ coinPurse, onCoinPurseChange }) {
  const [coins, setCoins] = useState(coinPurse);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCoins({ ...coins, [name]: parseInt(value) || 0 });
  };

  const handleUpdate = () => {
    onCoinPurseChange(coins);
  };

  return (
    <Box className="box">
      <Typography variant="h6" gutterBottom className="heading">
        Coin Purse
      </Typography>
      <TextField label="Copper" name="copper" type="number" value={coins.copper} onChange={handleChange} />
      <TextField label="Silver" name="silver" type="number" value={coins.silver} onChange={handleChange} />
      <TextField label="Gold" name="gold" type="number" value={coins.gold} onChange={handleChange} />
      <Typography variant="h6" gutterBottom className="heading">
        Gemstones
      </Typography>
      <Button onClick={handleUpdate}>Update Coins</Button>
    </Box>
  );
}

export default CoinPurseSection;
