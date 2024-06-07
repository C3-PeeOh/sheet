import React, { useState, useEffect } from 'react';
import CharacterInfo from './components/CharacterInfo';
import AttributesBlock from './components/AttributesBlock';
import SkillsBlock from './components/SkillsBlock';
import SavingThrowsBlock from './components/SavingThrowsBlock';
import races from './data/races';
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
    level: 1,
    race: '',
    size: '',
    background: '',
    speed: 30,
    initiative: 0,
    armorClass: 10,
    proficiencyBonus: 2,
    experience: 0,
    attributes: { ...attributes },
    skills: Object.keys(skills).reduce((acc, skill) => {
      acc[skill] = false;
      return acc;
    }, {}),
    savingThrows: Object.keys(attributes).reduce((acc, attr) => {
      acc[attr] = false;
      return acc;
    }, {}),
  });
  const [previousRace, setPreviousRace] = useState(null);

  useEffect(() => {
    const level = getLevelFromExperience(character.experience);
    const proficiencyBonus = getProficiencyBonusFromLevel(level);
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      level: level,
      proficiencyBonus: proficiencyBonus,
    }));
  }, [character.experience]);

  const handleCharacterChange = (field, value) => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      [field]: value,
    }));
  };

  const handleAttributeChange = (attribute, value) => {
    setCharacter((prevCharacter) => {
      const newAttributes = {
        ...prevCharacter.attributes,
        [attribute]: value,
      };

      return {
        ...prevCharacter,
        attributes: newAttributes,
        initiative: calculateModifier(newAttributes.dexterity),
        armorClass: 10 + calculateModifier(newAttributes.dexterity),
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
        ...prevCharacter.savingThrows,
        [attribute]: value,
      },
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
    <Container>
      <Box mt={4}>
        <Typography variant="h3" gutterBottom>
          Dungeons & Dragons 5e Character Sheet
        </Typography>
        <CharacterInfo character={character} onCharacterChange={handleCharacterChange} onRaceChange={handleRaceChange} />
        <AttributesBlock attributes={character.attributes} onAttributeChange={handleAttributeChange} />
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
        <Box mt={4} display="flex" justifyContent="space-between">
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
