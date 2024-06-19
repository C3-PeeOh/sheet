// src/components/ArmorModal.js

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import armors from "../data/armors";

const ArmorModal = ({ open, onClose, onAddArmor }) => {
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

  const filteredArmors = armors
    .filter((armor) => {
      if (filter === "light") return armor.type === "light";
      if (filter === "medium") return armor.type === "medium";
      if (filter === "heavy") return armor.type === "heavy";
      if (filter === "shield") return armor.type === "shield";
      return true;
    })
    .filter(
      (armor) =>
        armor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        armor.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

  const displayedArmors = filteredArmors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="modal">
        <Typography variant="h6" gutterBottom>
          Armorsmith
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
            onClick={() => handleFilterChange("light")}
          >
            Light
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterChange("medium")}
          >
            Medium
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterChange("heavy")}
          >
            Heavy
          </Button>
          <Button
            variant="contained"
            onClick={() => handleFilterChange("shield")}
          >
            Shield
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
        {displayedArmors.map((armor, index) => (
          <Box key={index} className="armor-info">
            <Typography variant="body1" component="div" className="armor-name">
              <b>{armor.name}</b>
            </Typography>
            <Typography
              variant="body2"
              component="div"
              className="armor-description"
            >
              <i>{armor.description}</i>
            </Typography>
            <Box className="armor-stats">
              <Typography variant="body2" component="div">
                <b>AC:</b> {armor.AC}
              </Typography>
              <Typography variant="body2" component="div">
                <b>Type:</b> {armor.type}
              </Typography>
              <Typography variant="body2" component="div">
                <b>Weight:</b> {armor.Weight}
              </Typography>
            </Box>
            <Box className="armor-cost-add">
              <Typography variant="body2" component="div">
                <b>Cost:</b> {armor.Cost}
              </Typography>
              <Button variant="contained" onClick={() => onAddArmor(armor)}>
                Add
              </Button>
            </Box>
          </Box>
        ))}
        <Box className="pagination">
          {Array(Math.ceil(filteredArmors.length / itemsPerPage))
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

export default ArmorModal;
