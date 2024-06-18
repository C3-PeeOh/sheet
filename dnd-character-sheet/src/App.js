import React, { useState, useEffect } from 'react';
import CharacterInfo from './components/CharacterInfo';
import AttributesBlock from './components/AttributesBlock';
import SkillsBlock from './components/SkillsBlock';
import SavingThrowsBlock from './components/SavingThrowsBlock';
import Inventory from './components/Inventory';
import races from './data/races';
import classes from './data/classes';
import skills from './data/skills';
import attributes from './data/attributes';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css';
import { calculateModifier, getLevelFromExperience, getProficiencyBonusFromLevel } from './utils';

function App() {
  const [character, setCharacter] = useState({
    name: '',
    class: '',
    level: '',
    race: '',
    size: '',
    background: '',
    speed: '',
    initiative: '',
    armorClass: '',
    proficiencyBonus: '',
    experience: '',
    attributes: { ...attributes },
    skills: Object.keys(skills).reduce((acc, skill) => {
      acc[skill] = false;
      return acc;
    }, {}),
    savingThrows: Object.keys(attributes).reduce((acc, attr) => {
      acc[attr] = false;
      return acc;
    }, {}),
    hitPoints: 0,
    currentHP: 0,
    hpCalcMethod: 'maximum',
    inventory: {
      weapons: [],
      armor: [],
      coinPurse: { copper: 0, silver: 0, gold: 0, gemstones: [] },
      gear: [],
    },
  });
  const [previousRace, setPreviousRace] = useState(null);
  const [previousClass, setPreviousClass] = useState(null);

  useEffect(() => {
    const level = getLevelFromExperience(character.experience);
    const proficiencyBonus = getProficiencyBonusFromLevel(level);
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      level: level,
      proficiencyBonus: proficiencyBonus,
    }));
  }, [character.experience]);

  useEffect(() => {
    calculateHitPoints();
  }, [character.level, character.attributes.constitution, character.class, character.hpCalcMethod]);

  const handleCharacterChange = (field, value) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [field]: value,
    }));
  };

  const handleAttributeChange = (newAttributes) => {
    setCharacter((prevCharacter) => {
      const updatedAttributes = {
        ...prevCharacter.attributes,
        ...newAttributes,
      };

      return {
        ...prevCharacter,
        attributes: updatedAttributes,
        initiative: calculateModifier(updatedAttributes.dexterity),
        armorClass: 10 + calculateModifier(updatedAttributes.dexterity),
      };
    });
  };

  const handleSkillChange = (skill, value) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      skills: {
        ...prevCharacter.skills,
        [skill]: value,
      },
    }));
  };

  const handleSaveThrowChange = (attribute, value) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      savingThrows: {
        ...prevCharacter,
        savingThrows: {
          ...prevCharacter.savingThrows,
          [attribute]: value,
        },
      },
    }));
  };

  const handleInventoryChange = (newInventory) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      inventory: newInventory,
    }));
  };

  const handleRaceChange = (raceName) => {
    const selectedRace = races.find((race) => race.name === raceName);

    if (selectedRace) {
      // Revert the previous race's bonuses
      const updatedAttributes = { ...character.attributes };
      if (previousRace) {
        Object.keys(previousRace.abilityBonuses).forEach((key) => {
          updatedAttributes[key] -= previousRace.abilityBonuses[key];
        });
      }

      // Apply the new race's bonuses
      Object.keys(selectedRace.abilityBonuses).forEach((key) => {
        updatedAttributes[key] += selectedRace.abilityBonuses[key];
      });

      setCharacter({
        ...character,
        race: selectedRace.name,
        size: selectedRace.size,
        speed: selectedRace.speed,
        attributes: updatedAttributes,
      });

      // Update the previous race
      setPreviousRace(selectedRace);
    }
  };

  const handleClassChange = (className) => {
    const selectedClass = classes.find((cls) => cls.name === className);

    if (selectedClass) {
      // Revert the previous class's saving throw bonuses
      const updatedSavingThrows = { ...character.savingThrows };
      if (previousClass) {
        previousClass.savingThrows.forEach((throwName) => {
          updatedSavingThrows[throwName] = false;
        });
      }

      // Apply the new class's saving throw bonuses
      selectedClass.savingThrows.forEach((throwName) => {
        updatedSavingThrows[throwName] = true;
      });

      setCharacter({
        ...character,
        class: selectedClass.name,
        savingThrows: updatedSavingThrows,
      });

      // Update the previous class
      setPreviousClass(selectedClass);
    }
  };

  const calculateHitPoints = () => {
    const selectedClass = classes.find((cls) => cls.name === character.class);
    if (!selectedClass) return;

    const conModifier = calculateModifier(character.attributes.constitution);
    const hitDie = selectedClass.hitDie;

    let hitPoints = hitDie + conModifier;

    if (character.level > 1) {
      for (let level = 2; level <= character.level; level++) {
        if (character.hpCalcMethod === 'maximum') {
          hitPoints += hitDie + conModifier;
        } else if (character.hpCalcMethod === 'average') {
          hitPoints += Math.floor(hitDie / 2) + 1 + conModifier;
        } else if (character.hpCalcMethod === 'random') {
          hitPoints += Math.floor(Math.random() * hitDie) + 1 + conModifier;
        }
      }
    }

    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      hitPoints: hitPoints,
      currentHP: hitPoints,
    }));
  };

  const handleHPMethodChange = (method) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      hpCalcMethod: method,
    }));
  };

  const saveCharacter = () => {
    localStorage.setItem('character', JSON.stringify(character));
    alert('Character saved!');
  };

  const loadCharacter = () => {
    const savedCharacter = localStorage.getItem('character');
    if (savedCharacter) {
      setCharacter(JSON.parse(savedCharacter));
      alert('Character loaded!');
    } else {
      alert('No saved character found.');
    }
  };

  return (
    <Container className="container">
      <Box className="box">
        <Typography variant="h3" gutterBottom>
          Dungeons & Dragons 5e Character Sheet
        </Typography>
        <CharacterInfo 
          character={character} 
          onCharacterChange={handleCharacterChange} 
          onRaceChange={handleRaceChange} 
          onClassChange={handleClassChange} 
        />
        <AttributesBlock 
          attributes={character.attributes} 
          onAttributeChange={handleAttributeChange} 
          race={character.race}
        />
        <SkillsBlock 
          skills={character.skills} 
          attributes={character.attributes} 
          proficiencyBonus={character.proficiencyBonus} 
          onSkillChange={handleSkillChange} 
        />
        <SavingThrowsBlock 
          savingThrows={character.savingThrows} 
          attributes={character.attributes} 
          proficiencyBonus={character.proficiencyBonus} 
          onSaveThrowChange={handleSaveThrowChange} 
        />
        <Inventory 
          inventory={character.inventory} 
          onInventoryChange={handleInventoryChange}
        />
        <Box className="button-container">
          <Button variant="contained" color="primary" onClick={saveCharacter}>
            Save Character
          </Button>
          <Button variant="contained" color="secondary" onClick={loadCharacter}>
            Load Character
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
