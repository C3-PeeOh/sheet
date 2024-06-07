import React, { useState } from 'react';
import CharacterInfo from './components/CharacterInfo';
import AttributesBlock from './components/AttributesBlock';
import SkillsBlock from './components/SkillsBlock';
import SavingThrowsBlock from './components/SavingThrowsBlock';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css';
import { calculateModifier } from './utils';

function App() {
  const [character, setCharacter] = useState({
    name: '',
    class: '',
    level: 1,
    race: '',
    background: '',
    speed: 30,
    initiative: 0,
    armorClass: 10,
    proficiencyBonus: 2,
    attributes: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    skills: {
      acrobatics: false,
      animalHandling: false,
      arcana: false,
      athletics: false,
      deception: false,
      history: false,
      insight: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: false,
      performance: false,
      persuasion: false,
      religion: false,
      sleightOfHand: false,
      stealth: false,
      survival: false,
    },
    savingThrows: {
      strength: false,
      dexterity: false,
      constitution: false,
      intelligence: false,
      wisdom: false,
      charisma: false,
    },
  });

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
        <CharacterInfo character={character} onCharacterChange={handleCharacterChange} />
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
