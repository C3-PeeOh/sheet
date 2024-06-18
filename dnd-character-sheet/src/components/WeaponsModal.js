import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import weapons from "../data/weapons";

const WeaponsModal = ({ open, onClose, onAddWeapon }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredWeapons = weapons
    .filter((weapon) => {
      if (filter === "simple") return weapon.type === "simple";
      if (filter === "martial") return weapon.type === "martial";
      if (filter === "melee") return !weapon.ranged;
      if (filter === "ranged") return weapon.ranged;
      return true;
    })
    .filter(
      (weapon) =>
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        weapon.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  const displayedWeapons = filteredWeapons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal">
        <Typography variant="h6" gutterBottom>
          Add Weapon
        </Typography>
        <TextField
          label="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          margin="normal"
        />
        <Box className="button-container">
          <Button variant="contained" onClick={() => handleFilterChange("all")}>
            All
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterChange("simple")}
          >
            Simple
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterChange("martial")}
          >
            Martial
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterChange("melee")}
          >
            Melee
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterChange("ranged")}
          >
            Ranged
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSortOrderChange("asc")}
          >
            Sort A-Z
          </Button>
          <Button
            variant="contained"
            onClick={() => handleSortOrderChange("desc")}
          >
            Sort Z-A
          </Button>
        </Box>
        {displayedWeapons.map((weapon, index) => (
          <Box key={index} className="weapon-info">
            <Typography variant="body1" component="div" className="weapon-name">
              <b>{weapon.name}</b>
            </Typography>
            <Typography
              variant="body2"
              component="div"
              className="weapon-description"
            >
              <i>{weapon.description}</i>
            </Typography>
            <Box className="weapon-stats">
              <Typography variant="body2" component="div">
                <b>Damage:</b> {weapon.damage}
              </Typography>
              <Typography variant="body2" component="div">
                <b>Type:</b> {weapon.type}
              </Typography>
              <Typography variant="body2" component="div">
                <b>Ranged:</b> {weapon.ranged ? "Yes" : "No"}
              </Typography>
              <Typography variant="body2" component="div">
                <b>Weight:</b> {weapon.weight}
              </Typography>
            </Box>
            <Box className="weapon-cost-add">
              <Typography variant="body2" component="div">
                <b>Cost:</b> {weapon.cost}
              </Typography>
              <Button variant="contained" onClick={() => onAddWeapon(weapon)}>
                Add
              </Button>
            </Box>
          </Box>
        ))}
        <Box className="pagination">
          {Array(Math.ceil(filteredWeapons.length / itemsPerPage))
            .fill()
            .map((_, i) => (
              <Button
                key={i}
                variant="contained"
                onClick={() => handlePageChange(i + 1)}
                disabled={currentPage === i + 1}
              >
                {i + 1}
              </Button>
            ))}
        </Box>
        <Button variant="contained" onClick={onClose}>
          EXIT
        </Button>
      </Box>
    </Modal>
  );
};

export default WeaponsModal;
